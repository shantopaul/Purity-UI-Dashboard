import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing in with:", { email, password, rememberMe });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[650px] bg-white rounded-card shadow-card overflow-hidden">
      {/* Left panel Form */}
      <div className="lg:col-span-5 flex flex-col justify-center px-8 md:px-12 py-12">
        <div className="max-w-sm w-full mx-auto flex flex-col gap-6">
          {/* Form Header */}
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-bold text-primary">Nice to see you!</h2>
            <p className="text-[10px] text-lightText font-semibold leading-relaxed">
              Enter your email and password to sign in to your dashboard.
            </p>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-dark uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-dark uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Remember Me switch */}
            <label className="flex items-center gap-2.5 cursor-pointer mt-1 select-none">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                  className="sr-only"
                />
                <div
                  className={`w-8 h-4.5 rounded-full transition-colors ${
                    rememberMe ? "bg-primary" : "bg-gray-200"
                  }`}
                />
                <div
                  className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                    rememberMe ? "translate-x-3.5" : "translate-x-0"
                  }`}
                />
              </div>
              <span className="text-[10px] text-lightText font-semibold">
                Remember me
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary hover:bg-primary/95 text-white font-extrabold text-[10px] uppercase tracking-wider py-3.5 rounded-xl shadow-sm transition-colors mt-2"
            >
              Sign In
            </button>
          </form>

          {/* Footer Link redirect */}
          <div className="text-center text-[10px] font-semibold text-lightText mt-2">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="text-primary hover:underline font-bold"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>

      {/* Right panel Visual cover */}
      <div className="lg:col-span-7 bg-gradient-to-br from-teal-400 to-cyan-500 hidden lg:flex flex-col justify-center items-center text-white p-12 relative overflow-hidden select-none">
        {/* Subtle dynamic backdrop circles */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-white/5 -top-20 -right-20 blur-xl" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-white/5 -bottom-20 -left-20 blur-xl" />

        <div className="max-w-md w-full text-center flex flex-col gap-4 z-10">
          <h1 className="text-3xl font-black tracking-wide uppercase">
            Purity UI Dashboard
          </h1>
          <p className="text-xs text-white/95 font-medium leading-relaxed mt-2">
            Inspired by beautiful Figma designs, completely built with React and
            Tailwind CSS. Clean, modular, and extremely responsive layouts.
          </p>
        </div>
      </div>
    </div>
  );
}
