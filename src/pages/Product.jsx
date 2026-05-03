import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PageHeader from "../components/Page.Header";

export default function Product() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // State Products yang lebih dinamis agar bisa ditambah melalui form
  const [products, setProducts] = useState([
    { id: "555-0112", name: "Minimalist Chair", stock: 105, price: "$120.00", status: "Available" },
    { id: "555-0116", name: "Standing Lamp", stock: 270, price: "$85.00", status: "Available" },
    { id: "555-0110", name: "Cabinet", stock: 0, price: "$250.00", status: "Sold Out" },
    { id: "555-0120", name: "Modern Sofa", stock: 45, price: "$890.00", status: "Available" },
    { id: "555-0121", name: "Wooden Bookshelf", stock: 15, price: "$320.00", status: "Available" },
    { id: "555-0122", name: "Dressing Table", stock: 30, price: "$150.55", status: "Available" }
  ]);

  // State untuk form inputan produk baru
  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    stock: "",
    price: "",
    status: "Available"
  });

  // Handle Input Form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle Tambah Data
  const handleAddProduct = (e) => {
    e.preventDefault();
    
    // Validasi sederhana
    if (!newProduct.id || !newProduct.name || !newProduct.stock || !newProduct.price) {
      alert("Harap isi semua field!");
      return;
    }

    const newProdObj = {
      id: newProduct.id,
      name: newProduct.name,
      stock: parseInt(newProduct.stock),
      price: `$${parseFloat(newProduct.price).toFixed(2)}`,
      status: newProduct.status,
    };

    setProducts([...products, newProdObj]);
    setIsFormOpen(false);
    // Reset form
    setNewProduct({ id: "", name: "", stock: "", price: "", status: "Available" });
  };

  // Logika Filter & Search
  const filteredProducts = products.filter((prod) => {
    const matchesSearch = prod.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          prod.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "All" || prod.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pb-10 relative">
      <PageHeader title="Product List" subtitle="Manage your furniture inventory" />
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        {/* Keterangan jumlah data */}
        <div className="text-gray-500 text-sm">
          Menampilkan <span className="text-purple-600 font-bold">{filteredProducts.length}</span> dari {products.length} produk.
        </div>

        {/* Tombol Add Product */}
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-purple-600 text-white px-5 py-2 rounded-xl hover:bg-purple-700 shadow-sm font-semibold transition-all"
        >
          + Add Product
        </button>
      </div>

      {/* TOOLS SEARCH & FILTER */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 p-4 bg-white rounded-2xl shadow-sm border border-gray-50">
        <div className="relative w-full sm:w-64">
          <input 
            type="text" 
            placeholder="Cari nama / id produk..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-500 transition-colors"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />
        </div>

        <select 
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="border border-gray-200 py-2 px-3 rounded-xl text-sm outline-none text-gray-700 bg-white focus:border-purple-500 transition-colors"
        >
          <option value="All">All Status</option>
          <option value="Available">Available</option>
          <option value="Sold Out">Sold Out</option>
        </select>
      </div>

      {/* TABEL */}
      <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-50">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="text-gray-400 border-b border-gray-100">
                <th className="pb-4 font-medium">Product ID</th>
                <th className="pb-4 font-medium">Product Name</th>
                <th className="pb-4 font-medium">Stock</th>
                <th className="pb-4 font-medium">Price</th>
                <th className="pb-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((prod, index) => (
                  <tr key={index} className="hover:bg-purple-50 transition-colors">
                    <td className="py-4 font-medium text-gray-500">{prod.id}</td>
                    <td className="py-4 font-semibold text-gray-800">{prod.name}</td>
                    <td className="py-4 text-gray-600">{prod.stock}</td>
                    <td className="py-4 font-bold text-gray-700">{prod.price}</td>
                    <td className="py-4">
                      <span className={`px-4 py-1 rounded-md text-[11px] font-bold ${
                        prod.status === 'Available' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                      }`}>
                        {prod.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="py-10 text-center text-gray-400">
                    Produk tidak ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODAL FORM ADD PRODUCT */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl w-full max-w-md shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Product</h2>
            <form onSubmit={handleAddProduct} className="flex flex-col space-y-4">
              <input 
                type="text" 
                name="id" 
                placeholder="Product ID (e.g. 555-01XX)" 
                value={newProduct.id}
                onChange={handleInputChange}
                className="border border-gray-200 p-2.5 rounded-xl outline-none focus:border-purple-500" 
              />
              <input 
                type="text" 
                name="name" 
                placeholder="Product Name" 
                value={newProduct.name}
                onChange={handleInputChange}
                className="border border-gray-200 p-2.5 rounded-xl outline-none focus:border-purple-500" 
              />
              <input 
                type="number" 
                name="stock" 
                placeholder="Stock Quantity" 
                value={newProduct.stock}
                onChange={handleInputChange}
                className="border border-gray-200 p-2.5 rounded-xl outline-none focus:border-purple-500" 
              />
              <input 
                type="text" 
                name="price" 
                placeholder="Price (number only, will format as $)" 
                value={newProduct.price}
                onChange={handleInputChange}
                className="border border-gray-200 p-2.5 rounded-xl outline-none focus:border-purple-500" 
              />
              <select 
                name="status" 
                value={newProduct.status}
                onChange={handleInputChange}
                className="border border-gray-200 p-2.5 rounded-xl outline-none focus:border-purple-500 bg-white text-gray-600"
              >
                <option value="Available">Available</option>
                <option value="Sold Out">Sold Out</option>
              </select>
              
              <div className="flex justify-end space-x-3 mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsFormOpen(false)} 
                  className="px-5 py-2 text-gray-500 hover:bg-gray-100 rounded-xl font-semibold text-sm"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 bg-purple-600 text-white rounded-xl font-semibold text-sm hover:bg-purple-700"
                >
                  Save Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}