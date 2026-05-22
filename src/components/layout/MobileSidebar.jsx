import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useApp } from "../../context/AppContext";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const { sidebarOpen, setSidebarOpen } = useApp();

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black"
          />

          {/* Sliding Drawer Container */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-72 bg-gray-50/95 backdrop-blur-md shadow-2xl flex flex-col h-full border-r border-gray-100 z-10"
          >
            {/* Close Button overlay */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="absolute top-6 right-4 p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-lightText hover:text-dark transition-all duration-300"
              aria-label="Close sidebar"
            >
              <X size={16} strokeWidth={2.5} />
            </button>

            {/* Sidebar content */}
            <div className="h-full overflow-y-auto">
              <Sidebar />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
