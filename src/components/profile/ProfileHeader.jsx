import { useState } from "react";
import { Home, Shield, FolderGit2 } from "lucide-react";
import backgroundImg from "../../assets/images/background.png";

export default function ProfileHeader() {
  const [activeTab, setActiveTab] = useState("Overview");

  const tabs = [
    { name: "Overview", icon: Home },
    { name: "Teams", icon: Shield },
    { name: "Projects", icon: FolderGit2 },
  ];

  return (
    <div className="relative mb-6">
      {/* Background Banner */}
      <div
        style={{ backgroundImage: `url(${backgroundImg})` }}
        className="w-full h-48 bg-cover bg-center rounded-card shadow-sm"
      />

      {/* Glassmorphic Overlap Card */}
      <div className="absolute -bottom-12 left-4 right-4 bg-white/75 backdrop-blur-md border border-white/20 rounded-card shadow-card p-4 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        <div className="flex items-center gap-4">
          {/* Avatar with initials */}
          <div className="w-16 h-16 rounded-2xl bg-primary text-white font-extrabold text-xl flex items-center justify-center shadow-md select-none shrink-0">
            EJ
          </div>
          <div className="flex flex-col">
            <h2 className="text-sm font-bold text-dark leading-tight">
              Esthera Jackson
            </h2>
            <span className="text-[10px] text-lightText font-semibold mt-1">
              esthera@simmmple.com
            </span>
          </div>
        </div>

        {/* Tab triggers */}
        <div className="flex bg-white/60 p-1.5 rounded-xl border border-gray-100/50 shadow-sm shrink-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;

            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-[10px] font-bold transition-all ${
                  isActive
                    ? "bg-white text-dark shadow-sm"
                    : "text-lightText hover:text-dark"
                }`}
              >
                <Icon size={12} className={isActive ? "text-primary" : ""} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
