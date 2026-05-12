import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";
import LoginInput from "../../components/login/Logininput";
import LoginButton from "../../components/login/Loginbutton";
import LoginDivider from "../../components/login/Logindivider";
import SocialLoginButton from "../../components/login/Socialloginbutton";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (dataForm.email === "ridho" && dataForm.password === "123") {
      setTimeout(() => { setLoading(false); navigate("/"); }, 1000);
      return;
    }

    axios
      .post("https://dummyjson.com/user/login", {
        username: dataForm.email,
        password: dataForm.password,
      })
      .then((res) => { if (res.status === 200) navigate("/"); else setError(res.data.message); })
      .catch((err) => setError(err.response?.data?.message || err.message || "An unknown error occurred"))
      .finally(() => setLoading(false));
  };

  return (
    <div className="font-['Cairo']">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-wide mb-2">LOGIN</h1>
        <p className="text-sm text-gray-400">How to i get started lorem ipsum dolor at?</p>
      </div>

      {/* Error */}
      {error && (
        <div className="mb-4 bg-red-100 p-4 text-sm font-medium text-red-600 rounded-2xl flex items-center">
          <BsFillExclamationDiamondFill className="mr-2 text-lg shrink-0" />
          {error}
        </div>
      )}

      {/* Loading */}
      {loading && (
        <div className="mb-4 bg-[#F4F2FF] p-4 text-sm font-medium text-[#5D5FEF] rounded-2xl flex items-center">
          <ImSpinner2 className="mr-2 animate-spin shrink-0" />
          Mohon Tunggu...
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <LoginInput type="text" name="email" placeholder="Username" icon="user" value={dataForm.email} onChange={handleChange} />
        <LoginInput type="password" name="password" placeholder="Password" icon="lock" value={dataForm.password} onChange={handleChange} />
        <div className="pt-1">
          <LoginButton label={loading ? "Loading..." : "Login Now"} type="submit" fullWidth disabled={loading} />
        </div>
        <LoginDivider />
        <SocialLoginButton provider="google" />
        <SocialLoginButton provider="facebook" />
      </form>
    </div>
  );
}