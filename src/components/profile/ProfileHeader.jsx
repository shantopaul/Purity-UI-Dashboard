import { useState, useRef } from "react";
import { Home, Shield, Wrench } from "lucide-react";
import backgroundImg from "../../assets/images/background.png";

export default function ProfileHeader() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  );
  const fileInputRef = useRef(null);

  const tabs = [
    { name: "Overview", icon: Home },
    { name: "Teams", icon: Shield },
    { name: "Projects", icon: Wrench },
  ];

  const handleEditClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setAvatar(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative -mt-[76px] mb-6">
      {/* Background Banner */}
      <div className="w-full h-[300px] relative bg-gradient-to-r from-[#319795] to-[#4FD1C5] rounded-[24px] overflow-hidden shadow-sm">
        <div
          style={{ backgroundImage: `url(${backgroundImg})` }}
          className="absolute inset-0 bg-cover bg-center mix-blend-screen opacity-60"
        />
      </div>

      {/* Glassmorphic Overlap Card */}
      <div className="absolute -bottom-12 left-6 right-6 bg-white/75 backdrop-blur-md border border-white/20 rounded-card shadow-card p-6 flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        <div className="flex items-center gap-4">
          {/* Avatar with edit button */}
          <div className="relative shrink-0">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
            <img
              src={avatar}
              alt="Esthera Jackson"
              className="w-20 h-20 rounded-2xl object-cover shadow-md select-none"
            />
            <button
              onClick={handleEditClick}
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-100 hover:bg-gray-50 transition-all text-primary"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-dark leading-tight">
              Esthera Jackson
            </h2>
            <span className="text-xs text-lightText font-semibold mt-1">
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
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase ${
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
