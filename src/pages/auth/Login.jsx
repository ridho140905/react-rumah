import axios from "axios";
import { useState } from "react";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    // 1. Validasi Lokal untuk Username/Email "ridho" dan Password "123"
    if (dataForm.email === "ridho" && dataForm.password === "123") {
      setTimeout(() => {
        setLoading(false);
        navigate("/"); // Langsung diarahkan ke Dashboard
      }, 1000);
      return;
    }

    // 2. Jika bukan ridho/123, jalankan validasi API seperti biasa
    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((response) => {
        if (response.status !== 200) {
          setError(response.data.message);
          return;
        }
        navigate("/");
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.message || "Invalid credentials");
        } else {
          setError(err.message || "An unknown error occurred");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const errorInfo = error ? (
    <div className="bg-red-100 mb-5 p-4 text-sm font-medium text-red-600 rounded-xl flex items-center">
      <BsFillExclamationDiamondFill className="mr-2 text-lg" />
      {error}
    </div>
  ) : null;

  const loadingInfo = loading ? (
    <div className="bg-purple-50 mb-5 p-4 text-sm font-medium text-purple-600 rounded-xl flex items-center">
      <ImSpinner2 className="mr-2 animate-spin" />
      Mohon Tunggu...
    </div>
  ) : null;

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Welcome Back 👋
      </h2>

      {errorInfo}
      {loadingInfo}

      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Username / Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl shadow-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
            placeholder="ridho"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl shadow-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
            placeholder="********"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-300 shadow-sm"
        >
          Login
        </button>
      </form>
    </div>
  );
}