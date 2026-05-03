export default function Forgot() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
                Forgot Your Password?
            </h2>
            
            <p className="text-sm text-gray-500 mb-6 text-center">
                Enter your email address and we'll send you a link to reset your
                password.
            </p>

            <form>
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                    >
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl shadow-sm outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
                        placeholder="you@example.com"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-xl transition duration-300 shadow-sm"
                >
                    Send Reset Link
                </button>
            </form>
        </div>
    );
}