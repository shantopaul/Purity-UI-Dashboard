import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Desktop Sidebar (Fixed) */}
      <div className="hidden lg:block w-64 fixed inset-y-0 left-0 overflow-y-auto z-20">
        <Sidebar />
      </div>

      {/* Mobile Drawer Sidebar */}
      <MobileSidebar />

      {/* Main Content Area Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300 relative">
        {/* Top Header */}
        <Topbar />

        {/* Dynamic Nested Page Content */}
        <main className="flex-1 px-6 py-4 flex flex-col">
          <Outlet />
        </main>

        {/* Global Layout Footer */}
        <Footer />
      </div>
    </div>
  );
}
