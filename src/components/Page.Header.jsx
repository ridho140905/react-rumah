export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex items-center justify-between p-4 mb-4">
            
            <div id="pageheader-left" className="flex flex-col">
                {/* Menampilkan Judul Utama */}
                <h1 className="text-3xl font-bold text-gray-800">
                    {title}
                </h1>
                
                {/* Menampilkan Breadcrumb (Navigasi) */}
                {/* Saya tambahkan pengecekan if breadcrumb exists agar tidak error jika dikosongkan */}
                {breadcrumb && (
                    <div className="flex items-center space-x-2 mt-2 text-base font-medium">
                        {Array.isArray(breadcrumb) ? (
                            breadcrumb.map((item, index) => (
                                <span key={index} className="flex items-center space-x-2">
                                    {/* Warna ungu untuk teks terakhir, abu-abu untuk teks sebelumnya */}
                                    <span className={index === breadcrumb.length - 1 ? "text-ungu font-bold" : "text-gray-500"}>
                                        {item}
                                    </span>
                                    {/* Tanda garis miring (/) */}
                                    {index < breadcrumb.length - 1 && (
                                        <span className="text-gray-400">/</span>
                                    )}
                                </span>
                            ))
                        ) : (
                            <span className="text-ungu font-bold">{breadcrumb}</span>
                        )}
                    </div>
                )}
            </div>

            {/* Menampilkan Tombol atau Elemen Tambahan (seperti tombol + Add Product) */}
            <div id="action-button">
                {children}
            </div>
            
        </div>
    );
}