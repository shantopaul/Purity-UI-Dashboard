import { Link, useLocation } from "react-router-dom";
import { Search, Settings, Bell, Menu, User } from "lucide-react";
import { useApp } from "../../context/AppContext";

export default function Topbar() {
  const location = useLocation();
  const { toggleSidebar } = useApp();

  // Parse path to construct breadcrumbs
  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentPage =
    pathParts.length > 0 ? pathParts[pathParts.length - 1] : "dashboard";

  // Capitalize path segments
  const formattedPageName =
    currentPage.charAt(0).toUpperCase() + currentPage.slice(1);

  return (
    <header className="flex flex-col md:flex-row md:items-center justify-between px-6 py-4 bg-transparent gap-4 md:gap-0 sticky top-0 z-30 backdrop-blur-md bg-gray-50/40">
      {/* Breadcrumbs & Page Title */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 text-xs text-lightText font-normal">
          <Link
            to="/dashboard"
            className="hover:text-primary transition-colors"
          >
            Pages
          </Link>
          <span className="text-[10px] text-lightText select-none">/</span>
          <span className="text-dark font-medium capitalize">
            {currentPage}
          </span>
        </div>
        <h1 className="text-sm font-bold text-dark mt-1 capitalize select-none">
          {formattedPageName}
        </h1>
      </div>

      {/* Actions (Search, Sign In, Settings, Bell) */}
      <div className="flex items-center gap-4 ml-auto md:ml-0">
        {/* Search Bar */}
        <div className="relative w-48 sm:w-56">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-lightText">
            <Search size={14} />
          </div>
          <input
            type="text"
            placeholder="Type here..."
            className="w-full pl-9 pr-4 py-2 text-xs bg-white text-dark rounded-xl border border-gray-200 outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 placeholder-gray-400 shadow-sm transition-all"
          />
        </div>

        {/* Profile/Sign In Button */}
        <Link
          to="/sign-in"
          className="flex items-center gap-1.5 text-xs font-bold text-lightText hover:text-dark transition-colors"
        >
          <User size={14} strokeWidth={2.5} />
          <span className="hidden sm:inline">Sign In</span>
        </Link>

        {/* Hamburger Menu Toggle (Mobile only) */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 rounded-xl text-lightText hover:text-dark hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile sidebar"
        >
          <Menu size={16} strokeWidth={2.5} />
        </button>

        {/* Settings Toggle Button */}
        <button
          className="p-2 rounded-xl text-lightText hover:text-dark hover:bg-gray-100 transition-colors"
          aria-label="Toggle settings"
        >
          <Settings size={14} strokeWidth={2.5} />
        </button>

        {/* Notifications Icon Button */}
        <button
          className="p-2 rounded-xl text-lightText hover:text-dark hover:bg-gray-100 transition-colors relative"
          aria-label="View notifications"
        >
          <Bell size={14} strokeWidth={2.5} />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}
