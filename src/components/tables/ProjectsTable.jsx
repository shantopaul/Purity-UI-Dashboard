import { MoreVertical } from "lucide-react";

const projects = [
  {
    name: "Chakra Soft UI Version",
    budget: "$14,000",
    status: "Working",
    progress: 60,
    logoType: "xd",
  },
  {
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progress: 10,
    logoType: "jira",
  },
  {
    name: "Fix Platform Errors",
    budget: "Not set",
    status: "Done",
    progress: 100,
    logoType: "slack",
  },
  {
    name: "Launch our Mobile App",
    budget: "$32,000",
    status: "Done",
    progress: 100,
    logoType: "spotify",
  },
  {
    name: "Add the New Pricing Page",
    budget: "$400",
    status: "Working",
    progress: 25,
    logoType: "web",
  },
  {
    name: "Redesign New Online Shop",
    budget: "$7,600",
    status: "Canceled",
    progress: 40,
    logoType: "redesign",
  },
];

const statusStyles = {
  Working: "text-amber-500 bg-amber-500/10",
  Canceled: "text-red-500 bg-red-500/10",
  Done: "text-success bg-success/10",
};

const renderLogo = (type) => {
  switch (type) {
    case "xd":
      return (
        <div className="w-6 h-6 rounded-lg bg-[#FF00FF]/5 flex items-center justify-center border border-pink-100 text-[10px] font-bold text-[#E1306C] select-none">
          Xd
        </div>
      );
    case "jira":
      return (
        <div className="w-6 h-6 rounded-lg bg-[#0052CC]/5 flex items-center justify-center border border-blue-100 text-xs font-black text-[#0052CC] select-none">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M11.5 2C10.7 2 10 2.7 10 3.5V11h7.5c.8 0 1.5-.7 1.5-1.5V3.5C19 2.7 18.3 2 17.5 2h-6zm-6 6C4.7 8 4 8.7 4 9.5V17h7.5c.8 0 1.5-.7 1.5-1.5V9.5C13 8.7 12.3 8 11.5 8h-6zm6 6C10.7 14 10 14.7 10 15.5V23h7.5c.8 0 1.5-.7 1.5-1.5V15.5c0-.8-.7-1.5-1.5-1.5h-6z" />
          </svg>
        </div>
      );
    case "slack":
      return (
        <div className="w-6 h-6 rounded-lg bg-[#4A154B]/5 flex items-center justify-center border border-purple-100 text-xs font-black text-[#4A154B] select-none">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.522-2.523 2.528 2.528 0 0 1 2.522-2.52h2.52v2.52zm1.261 0a2.528 2.528 0 0 1 2.52-2.52h5.043a2.528 2.528 0 0 1 2.522 2.52 2.528 2.528 0 0 1-2.522 2.52H8.823a2.528 2.528 0 0 1-2.52-2.52zM8.823 5.043a2.528 2.528 0 0 1 2.52-2.52 2.528 2.528 0 0 1 2.522 2.52v2.52h-2.522a2.528 2.528 0 0 1-2.52-2.52zm0 1.261a2.528 2.528 0 0 1 2.52 2.52v5.043a2.528 2.528 0 0 1-2.52 2.522 2.528 2.528 0 0 1-2.52-2.522V8.824a2.528 2.528 0 0 1 2.52-2.52zM18.958 8.824a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522 2.528 2.528 0 0 1-2.522 2.52h-2.52V8.824zm-1.261 0a2.528 2.528 0 0 1-2.52 2.52h-5.043a2.528 2.528 0 0 1-2.522-2.52 2.528 2.528 0 0 1 2.522-2.52h5.043a2.528 2.528 0 0 1 2.52 2.52zM15.177 18.958a2.528 2.528 0 0 1-2.52 2.52 2.528 2.528 0 0 1-2.522-2.52v-2.52h2.522a2.528 2.528 0 0 1 2.52 2.52zm0-1.261a2.528 2.528 0 0 1-2.52-2.52v-5.043a2.528 2.528 0 0 1 2.52-2.522 2.528 2.528 0 0 1 2.522 2.522v5.043a2.528 2.528 0 0 1-2.522 2.52z" />
          </svg>
        </div>
      );
    case "spotify":
      return (
        <div className="w-6 h-6 rounded-lg bg-[#1DB954]/5 flex items-center justify-center border border-green-100 text-xs font-black text-[#1DB954] select-none">
          <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.565.387-.86.207-2.377-1.454-5.37-1.783-8.893-.98-.336.075-.668-.135-.744-.47-.077-.337.135-.668.47-.743 3.856-.88 7.15-.5 9.822 1.135.296.18.387.563.205.85z" />
          </svg>
        </div>
      );
    case "web":
      return (
        <div className="w-6 h-6 rounded-lg bg-[#00A3C4]/5 flex items-center justify-center border border-cyan-100 text-xs font-black text-[#00A3C4] select-none">
          <svg
            className="w-3.5 h-3.5 fill-none stroke-current"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20" />
            <path d="M2 12h20" />
          </svg>
        </div>
      );
    case "redesign":
      return (
        <div className="w-6 h-6 rounded-lg bg-[#FF3366]/5 flex items-center justify-center border border-red-100 text-[10px] font-bold text-[#FF3366] select-none">
          in
        </div>
      );
    default:
      return (
        <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 text-xs font-black text-primary select-none">
          P
        </div>
      );
  }
};

export default function ProjectsTable() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6 overflow-hidden">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold text-dark">Projects Table</h3>
      </div>

      {/* Table grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 pl-2">Companies</th>
              <th className="pb-3">Budget</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Completion</th>
              <th className="pb-3 pr-2 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {projects.map((project) => (
              <tr
                key={project.name}
                className="hover:bg-gray-50/45 transition-colors"
              >
                {/* Project Info */}
                <td className="py-3.5 pl-2">
                  <div className="flex items-center gap-3">
                    {renderLogo(project.logoType)}
                    <span className="text-xs font-bold text-dark leading-snug">
                      {project.name}
                    </span>
                  </div>
                </td>

                {/* Budget */}
                <td className="py-3.5 text-xs font-bold text-dark">
                  {project.budget}
                </td>

                {/* Status Indicator */}
                <td className="py-3.5">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                      statusStyles[project.status] ||
                      "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>

                {/* Completion Progress Bar */}
                <td className="py-3.5">
                  <div className="flex flex-col gap-1 w-28">
                    <span className="text-[10px] font-extrabold text-primary">
                      {project.progress}%
                    </span>
                    <div className="w-full bg-gray-100 rounded-full h-1">
                      <div
                        className="bg-primary h-1 rounded-full"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                </td>

                {/* Options Action */}
                <td className="py-3.5 pr-2 text-right">
                  <button className="p-1 text-lightText hover:text-dark hover:bg-gray-50 rounded-lg transition-colors">
                    <MoreVertical size={15} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
