/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [user, setUser] = useState({
    name: "Shanto Paul",
    email: "shantopaul9944@gmail.com",
    avatar: null,
  });
  const [theme, setTheme] = useState("light");

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const toggleDesktopSidebar = () => setSidebarCollapsed((prev) => !prev);
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        setSidebarOpen,
        toggleSidebar,
        sidebarCollapsed,
        setSidebarCollapsed,
        toggleDesktopSidebar,
        user,
        setUser,
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
