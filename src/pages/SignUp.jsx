import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImg from "../assets/images/background.png";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up with:", { name, email, password, agreeTerms });
  };

  return (
    <div className="relative w-full min-h-[750px] flex flex-col items-center justify-center p-4">
      {/* Background Banner */}
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="absolute top-0 left-0 right-0 h-72 bg-cover bg-center rounded-card shadow-sm z-0"
      />

      {/* Centered Overlap Registration Card */}
      <div className="relative bg-white rounded-card shadow-card max-w-md w-full p-8 md:p-10 flex flex-col gap-6 z-10 mt-16 border border-gray-100/50">
        {/* Header */}
        <div className="text-center flex flex-col gap-1.5">
          <h2 className="text-lg font-bold text-dark">Register with</h2>
          <p className="text-[10px] text-lightText font-semibold leading-relaxed">
            Choose a social platform or enter email credentials.
          </p>
        </div>

        {/* Social Buttons row */}
        <div className="flex gap-4 justify-center items-center">
          {/* Facebook */}
          <button
            title="Facebook"
            className="w-16 h-12 rounded-xl border border-gray-150 flex items-center justify-center text-dark hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-4 h-4 fill-current text-blue-600"
              viewBox="0 0 24 24"
            >
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
          </button>

          {/* Apple */}
          <button
            title="Apple"
            className="w-16 h-12 rounded-xl border border-gray-150 flex items-center justify-center text-dark hover:bg-gray-50 transition-colors"
          >
            <svg className="w-4 h-4 fill-current text-dark" viewBox="0 0 24 24">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.068 3.76 3.007 1.517-.06 2.09-.98 3.92-.98 1.82 0 2.348.98 3.93.95 1.607-.03 2.647-1.46 3.627-2.9 1.127-1.64 1.59-3.23 1.62-3.31-.07-.03-3.117-1.19-3.147-4.75-.03-2.99 2.45-4.43 2.567-4.51-1.408-2.06-3.577-2.3-4.337-2.35-1.928-.15-3.8.18-4.5.36-.7.18-1.51.52-1.51.52zm2.34-3.58a4.857 4.857 0 001.12-3.31 4.9 4.9 0 00-3.22 1.66 4.67 4.67 0 00-1.18 3.19c1.33 0 2.76-.73 3.28-1.54z" />
            </svg>
          </button>

          {/* Google */}
          <button
            title="Google"
            className="w-16 h-12 rounded-xl border border-gray-150 flex items-center justify-center text-dark hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-4 h-4 fill-current text-red-500"
              viewBox="0 0 24 24"
            >
              <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.51 0-6.357-2.827-6.357-6.314S10.481 5.88 13.99 5.88c1.528 0 2.923.542 4.015 1.442l3.053-3.03C19.167 2.502 16.74 1.5 13.99 1.5c-5.79 0-10.49 4.672-10.49 10.413 0 5.74 4.7 10.413 10.49 10.413 6.03 0 10.024-4.214 10.024-10.12 0-.682-.061-1.344-.174-1.92z" />
            </svg>
          </button>
        </div>

        {/* Separator */}
        <div className="flex items-center gap-3">
          <hr className="flex-1 border-gray-100" />
          <span className="text-[10px] text-lightText font-bold uppercase select-none">
            or
          </span>
          <hr className="flex-1 border-gray-100" />
        </div>

        {/* Credentials form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-bold text-dark uppercase tracking-wider">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="border border-gray-200 rounded-xl px-4 py-2.5 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>

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

          {/* Agree to terms switch */}
          <label className="flex items-center gap-2.5 cursor-pointer mt-1 select-none">
            <div className="relative">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="sr-only"
              />
              <div
                className={`w-8 h-4.5 rounded-full transition-colors ${
                  agreeTerms ? "bg-primary" : "bg-gray-200"
                }`}
              />
              <div
                className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                  agreeTerms ? "translate-x-3.5" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-[10px] text-lightText font-semibold">
              I agree the Terms and Conditions
            </span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary/95 text-white font-extrabold text-[10px] uppercase tracking-wider py-3.5 rounded-xl shadow-sm transition-colors mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Redirect */}
        <div className="text-center text-[10px] font-semibold text-lightText mt-2">
          Already have an account?{" "}
          <Link
            to="/auth/signin"
            className="text-primary hover:underline font-bold"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
