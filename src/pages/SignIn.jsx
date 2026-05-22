import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/images/background.png";
import dashboardScreenImg from "../assets/images/dashboard-screen.png";

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
          <div className="flex flex-col gap-1.5">
            <h2 className="text-[32px] font-bold text-dark tracking-tight leading-none">
              Nice to see you!
            </h2>
            <p className="text-sm text-gray-400 font-normal mt-2 leading-relaxed">
              Enter your email and password to sign in
            </p>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
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

            <div className="flex flex-col gap-1">
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
              Sign In
            </button>
          </form>

          {/* Footer Link redirect */}
          <div className="text-center text-xs text-gray-400 font-medium mt-2 select-none">
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
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="absolute right-0 top-0 bottom-0 w-[50vw] hidden lg:flex flex-col justify-center items-center text-white p-12 select-none bg-cover bg-center rounded-bl-[120px] overflow-hidden"
      >
        {/* Subtle gradient overlay to match Figma */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/90 to-teal-600/90 mix-blend-multiply z-0" />

        <div className="max-w-md w-full text-center flex flex-col items-center gap-4 z-10">
          <h1 className="text-3xl font-black tracking-widest uppercase">
            Purity UI Dashboard
          </h1>
          <p className="text-xs text-white/90 font-medium leading-relaxed max-w-sm">
            Inspired by beautiful Figma designs, completely built with React and
            Tailwind CSS. Clean, modular, and extremely responsive layouts.
          </p>

          {/* Floating perspective dashboard mockup */}
          <div className="relative mt-10 w-[85%] max-w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={dashboardScreenImg}
              alt="Dashboard Preview"
              className="w-full h-full object-cover object-left-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
