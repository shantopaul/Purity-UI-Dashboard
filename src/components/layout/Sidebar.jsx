import { NavLink } from "react-router-dom";
import {
  Home,
  BarChart2,
  CreditCard,
  User,
  LogIn,
  UserPlus,
  HelpCircle,
} from "lucide-react";

const mainRoutes = [
  { path: "/dashboard", name: "Dashboard", icon: Home },
  { path: "/tables", name: "Tables", icon: BarChart2 },
  { path: "/billing", name: "Billing", icon: CreditCard },
];

const accountRoutes = [
  { path: "/profile", name: "Profile", icon: User },
  { path: "/sign-in", name: "Sign In", icon: LogIn },
  { path: "/sign-up", name: "Sign Up", icon: UserPlus },
];

export default function Sidebar() {
  const renderLink = (route) => {
    const Icon = route.icon;
    return (
      <NavLink
        key={route.path}
        to={route.path}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 font-bold text-xs ${
            isActive
              ? "bg-white shadow-card text-dark"
              : "bg-transparent text-lightText hover:bg-gray-50 hover:text-dark"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <div
              className={`flex items-center justify-center p-2 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-primary shadow-sm border border-gray-100"
              }`}
            >
              <Icon size={15} strokeWidth={2.5} />
            </div>
            <span>{route.name}</span>
          </>
        )}
      </NavLink>
    );
  };

  return (
    <aside className="w-64 bg-transparent h-full flex flex-col justify-between py-6 px-4 shrink-0">
      <div className="flex flex-col gap-6">
        {/* Brand Logo Header */}
        <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-200/80 pb-6">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-extrabold text-sm shadow-sm">
            P
          </div>
          <span className="font-bold text-xs tracking-wider text-dark select-none">
            PURITY UI DASHBOARD
          </span>
        </div>

        {/* Main Routes */}
        <nav className="flex flex-col gap-1">
          {mainRoutes.map(renderLink)}

          {/* Account Pages Section Header */}
          <span className="px-4 pt-6 pb-2 text-[10px] font-bold text-lightText uppercase tracking-wider">
            Account Pages
          </span>

          {accountRoutes.map(renderLink)}
        </nav>
      </div>

      {/* Need Help CTA Card */}
      <div className="mt-8 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl p-4 text-white shadow-md relative overflow-hidden flex flex-col gap-4">
        {/* Decorative circle */}
        <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10" />

        <div className="w-8 h-8 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm z-10">
          <HelpCircle size={18} strokeWidth={2.5} />
        </div>

        <div className="z-10">
          <h4 className="font-bold text-sm">Need help?</h4>
          <p className="text-[10px] text-teal-50 mt-1 leading-relaxed">
            Please check our docs for setup and layout configuration options.
          </p>
        </div>

        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/purity-ui-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white text-dark font-bold text-[10px] py-3 rounded-xl hover:bg-teal-50 active:scale-95 transition-all text-center uppercase tracking-wider shadow-sm z-10"
        >
          Documentation
        </a>
      </div>
    </aside>
  );
}
