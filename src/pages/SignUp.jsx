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
        className="absolute top-4 left-4 right-4 h-[380px] bg-cover bg-center rounded-[30px] z-0 overflow-hidden"
      >
        {/* Subtle gradient overlay to match Figma */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-400/90 to-teal-600/90 mix-blend-multiply" />

        {/* Welcome Title and Subtext */}
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-20 px-6 text-center text-white select-none">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Welcome!
          </h1>
          <p className="text-sm text-white/80 max-w-sm md:max-w-md mt-2.5 font-normal leading-relaxed">
            Use these awesome forms to login or create new account in your
            project for free.
          </p>
        </div>
      </div>

      {/* Centered Overlap Registration Card */}
      <div className="relative bg-white rounded-[24px] shadow-card max-w-[450px] w-full p-8 md:p-10 flex flex-col gap-6 z-10 mt-[150px] mb-10 border border-gray-100">
        {/* Header */}
        <div className="text-center flex flex-col gap-1.5">
          <h2 className="text-lg font-bold text-dark">Register with</h2>
          <p className="text-xs text-gray-400 font-normal leading-relaxed mt-1">
            Choose a social platform or enter email credentials.
          </p>
        </div>

        {/* Social Buttons row */}
        <div className="flex gap-4 justify-center items-center">
          {/* Facebook */}
          <button
            title="Facebook"
            className="w-16 h-12 rounded-xl border border-gray-150 flex items-center justify-center text-dark hover:bg-gray-50 transition-colors cursor-pointer"
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
            className="w-16 h-12 rounded-xl border border-gray-150 flex items-center justify-center text-dark hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-dark" viewBox="0 0 24 24">
              <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.54 9.103 1.51 12.06 1.005 1.45 2.187 3.068 3.76 3.007 1.517-.06 2.09-.98 3.92-.98 1.82 0 2.348.98 3.93.95 1.607-.03 2.647-1.46 3.627-2.9 1.127-1.64 1.59-3.23 1.62-3.31-.07-.03-3.117-1.19-3.147-4.75-.03-2.99 2.45-4.43 2.567-4.51-1.408-2.06-3.577-2.3-4.337-2.35-1.928-.15-3.8.18-4.5.36-.7.18-1.51.52-1.51.52zm2.34-3.58a4.857 4.857 0 001.12-3.31 4.9 4.9 0 00-3.22 1.66 4.67 4.67 0 00-1.18 3.19c1.33 0 2.76-.73 3.28-1.54z" />
            </svg>
          </button>

          {/* Google */}
          <button
            title="Google"
            className="w-16 h-12 rounded-xl border border-gray-150 flex items-center justify-center text-dark hover:bg-gray-50 transition-colors cursor-pointer"
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
        <div className="flex items-center gap-3 select-none">
          <hr className="flex-1 border-gray-100" />
          <span className="text-[10px] text-lightText font-bold uppercase">
            or
          </span>
          <hr className="flex-1 border-gray-100" />
        </div>

        {/* Credentials form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold text-gray-700 mb-1 ml-1 select-none">
              Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="w-full border border-gray-200 rounded-[15px] px-4 py-3 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
            />
          </div>

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
              className="w-full border border-gray-200 rounded-[15px] px-4 py-3 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
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
              className="w-full border border-gray-200 rounded-[15px] px-4 py-3 text-xs text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all shadow-sm"
            />
          </div>

          {/* Agree to terms switch */}
          <label className="flex items-center gap-2.5 cursor-pointer mt-2 select-none">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="sr-only"
              />
              <div
                className={`w-[34px] h-[20px] rounded-full transition-colors ${
                  agreeTerms ? "bg-primary" : "bg-gray-200"
                }`}
              />
              <div
                className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform shadow-sm ${
                  agreeTerms ? "translate-x-3.5" : "translate-x-0"
                }`}
              />
            </div>
            <span className="text-xs text-gray-500 font-normal ml-1">
              I agree the Terms and Conditions
            </span>
          </label>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full h-[45px] bg-primary hover:bg-primary/90 text-white font-bold text-xs uppercase tracking-wider rounded-[15px] shadow-sm transition-all mt-4 cursor-pointer flex items-center justify-center"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Redirect */}
        <div className="text-center text-xs text-gray-400 font-medium mt-2 select-none">
          Already have an account?{" "}
          <Link
            to="/sign-in"
            className="text-primary hover:underline font-bold"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
