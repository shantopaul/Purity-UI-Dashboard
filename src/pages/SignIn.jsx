import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/images/background.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { email, password, rememberMe });
  };

  return (
    <div className="flex flex-col lg:flex-row w-full min-h-[600px] bg-white">
      {/* Left panel Form */}
      <div className="w-full lg:w-[50%] flex flex-col justify-center items-center px-6 md:px-12 py-12">
        <div className="w-full max-w-[350px] mx-auto flex flex-col gap-6">
          {/* Form Header */}
          <div className="flex flex-col gap-1">
            <h2 className="text-[32px] font-bold text-primary tracking-tight leading-none">
              Welcome Back
            </h2>
            <p className="text-xs text-gray-400 font-semibold mt-2.5 leading-relaxed">
              Enter your email and password to sign in
            </p>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-700 mb-1 ml-1 select-none">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="w-full border border-gray-200 rounded-[15px] px-4 py-3.5 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-gray-700 mb-1 ml-1 select-none">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full border border-gray-200 rounded-[15px] px-4 py-3.5 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
              />
            </div>

            {/* Remember Me switch */}
            <label className="flex items-center gap-2.5 cursor-pointer mt-2 select-none">
              <div className="relative flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="sr-only"
                />
                <div
                  className={`w-[34px] h-[20px] rounded-full transition-colors ${
                    rememberMe ? "bg-primary" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform shadow-sm ${
                    rememberMe ? "translate-x-3.5" : "translate-x-0"
                  }`}
                />
              </div>
              <span className="text-xs text-gray-500 font-normal ml-1">
                Remember me
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-[45px] bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider rounded-[15px] shadow-sm transition-all mt-4 cursor-pointer flex items-center justify-center"
            >
              SIGN IN
            </button>
          </form>

          {/* Footer Link redirect */}
          <div className="text-center text-xs text-gray-400 font-semibold mt-2 select-none">
            Don't have an account?{" "}
            <Link
              to="/sign-up"
              className="text-primary hover:underline font-bold"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Right panel Visual cover */}
      <div className="absolute right-0 top-0 bottom-0 w-[50vw] hidden lg:flex flex-col justify-center items-center text-white p-12 select-none bg-gradient-to-br from-[#319795] to-[#4FD1C5] rounded-bl-[120px] overflow-hidden">
        {/* Wavy lines with screen blend mode */}
        <div
          style={{ backgroundImage: `url(${backgroundImg})` }}
          className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-50 z-0"
        />

        {/* Center Logo branding */}
        <div className="flex items-center gap-4.5 z-10 select-none">
          <div className="w-[74px] h-[74px] rounded-full bg-white flex items-center justify-center shadow-lg">
            <svg
              className="w-10 h-10 fill-current text-primary"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 14h9v8l10-12h-9z" />
            </svg>
          </div>
          <span className="text-[54px] font-bold text-white tracking-tight font-sans">
            chakra
          </span>
        </div>
      </div>
    </div>
  );
}
