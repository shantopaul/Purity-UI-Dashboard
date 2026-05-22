import { useState } from "react";

export default function PlatformSettings() {
  const [settings, setSettings] = useState({
    answers: true,
    mentions: false,
    follows: true,
    launches: false,
    updates: true,
    newsletter: false,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-bold text-dark">Platform Settings</h3>
      </div>

      <div className="flex flex-col gap-6">
        {/* Account Subgroup */}
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-bold text-lightText tracking-wider uppercase">
            Account
          </span>

          <div className="flex flex-col gap-3.5">
            {[
              {
                key: "answers",
                label: "Email me when someone answers on my post",
              },
              { key: "mentions", label: "Email me when someone mentions me" },
              { key: "follows", label: "Email me when someone follows me" },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-center justify-between cursor-pointer group"
              >
                <span className="text-[10px] text-lightText group-hover:text-dark font-semibold transition-colors">
                  {item.label}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings[item.key]}
                    onChange={() => toggleSetting(item.key)}
                    className="sr-only"
                  />
                  {/* Switch track background */}
                  <div
                    className={`w-8 h-4.5 rounded-full transition-colors ${
                      settings[item.key] ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                  {/* Switch handle slider */}
                  <div
                    className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                      settings[item.key] ? "translate-x-3.5" : "translate-x-0"
                    }`}
                  />
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Application Subgroup */}
        <div className="flex flex-col gap-3">
          <span className="text-[9px] font-bold text-lightText tracking-wider uppercase">
            Application
          </span>

          <div className="flex flex-col gap-3.5">
            {[
              { key: "launches", label: "New launches and projects" },
              { key: "updates", label: "Monthly product updates" },
              { key: "newsletter", label: "Subscribe to newsletter" },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-center justify-between cursor-pointer group"
              >
                <span className="text-[10px] text-lightText group-hover:text-dark font-semibold transition-colors">
                  {item.label}
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    checked={settings[item.key]}
                    onChange={() => toggleSetting(item.key)}
                    className="sr-only"
                  />
                  <div
                    className={`w-8 h-4.5 rounded-full transition-colors ${
                      settings[item.key] ? "bg-primary" : "bg-gray-200"
                    }`}
                  />
                  <div
                    className={`absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-white transition-transform ${
                      settings[item.key] ? "translate-x-3.5" : "translate-x-0"
                    }`}
                  />
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
