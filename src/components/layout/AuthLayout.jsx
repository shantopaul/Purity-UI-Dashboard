import { Link, Outlet, useLocation } from "react-router-dom";
import { Home, User, LogIn, UserPlus } from "lucide-react";

export default function AuthLayout() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const getLinkClass = (path) => {
    const base = "flex items-center gap-1.5 text-xs font-bold transition-colors";
    const active = "text-dark";
    const inactive = "text-lightText hover:text-dark";
    return `${base} ${location.pathname === path ? active : inactive}`;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between relative">
      {/* Absolute Transparent/Glassmorphism Navigation Header */}
      <header className="absolute top-0 inset-x-0 z-50 px-6 py-6 max-w-7xl mx-auto w-full">
        <nav className="flex justify-between items-center bg-white/70 backdrop-blur-md border border-white/40 px-6 py-4 rounded-2xl shadow-card transition-all">
          <Link
            to="/"
            className="font-bold text-xs tracking-wider text-dark select-none"
          >
            PURITY UI DASHBOARD
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/dashboard"
              className={getLinkClass("/dashboard")}
            >
              <Home size={13} />
              <span>DASHBOARD</span>
            </Link>
            <Link
              to="/profile"
              className={getLinkClass("/profile")}
            >
              <User size={13} />
              <span>PROFILE</span>
            </Link>
            <Link
              to="/sign-up"
              className={getLinkClass("/sign-up")}
            >
              <UserPlus size={13} />
              <span>SIGN UP</span>
            </Link>
            <Link
              to="/sign-in"
              className={getLinkClass("/sign-in")}
            >
              <LogIn size={13} />
              <span>SIGN IN</span>
            </Link>
          </div>

          {/* Action Button */}
          <div>
            <Link
              to="/dashboard"
              className="bg-dark text-white font-bold text-[10px] px-6 py-2.5 rounded-xl hover:bg-black transition-all shadow-sm uppercase tracking-wider"
            >
              Free Download
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Outlet (Centering target contents) */}
      <main className="flex-1 w-full pt-28 pb-12">
        <Outlet />
      </main>

      {/* Authentication Layout Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-xs text-lightText gap-4 md:gap-0">
        <div>
          &copy; {currentYear}, Made with ❤️ by{" "}
          <a
            href="https://www.creative-tim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-muted hover:text-primary transition-colors"
          >
            Creative Tim
          </a>{" "}
          &amp;{" "}
          <a
            href="https://simmmple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-muted hover:text-primary transition-colors"
          >
            Simmmple
          </a>{" "}
          for a better web.
        </div>
        <div className="flex gap-6">
          <a
            href="https://www.creative-tim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Creative Tim
          </a>
          <a
            href="https://simmmple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Simmmple
          </a>
          <a
            href="https://www.creative-tim.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Blog
          </a>
          <a
            href="https://www.creative-tim.com/license"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            License
          </a>
        </div>
      </footer>
    </div>
  );
}
