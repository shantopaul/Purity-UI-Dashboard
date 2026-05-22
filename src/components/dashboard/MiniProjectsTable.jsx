import { CheckCircle2, MoreVertical } from "lucide-react";

const projects = [
  {
    name: "Chakra UI Version",
    budget: "$14,000",
    progress: 60,
    members: ["SP", "AJ", "LK", "DK"],
    status: "in-progress",
  },
  {
    name: "Add Progress Track",
    budget: "$3,000",
    progress: 10,
    members: ["LK", "AJ"],
    status: "in-progress",
  },
  {
    name: "Fix Platform Errors",
    budget: "Not Set",
    progress: 100,
    members: ["SP", "DK"],
    status: "done",
  },
  {
    name: "Launch Version 2.0",
    budget: "$32,000",
    progress: 100,
    members: ["AJ", "LK", "SP"],
    status: "done",
  },
  {
    name: "Redesign Web Page",
    budget: "$400",
    progress: 25,
    members: ["DK", "SP", "AJ"],
    status: "in-progress",
  },
];

const memberColors = {
  SP: "bg-pink-400",
  AJ: "bg-teal-400",
  LK: "bg-blue-400",
  DK: "bg-indigo-400",
};

export default function MiniProjectsTable() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6 overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-sm font-bold text-dark">Projects</h3>
          <p className="text-xs text-lightText mt-0.5 flex items-center gap-1">
            <CheckCircle2 size={13} className="text-success" />
            <span className="font-semibold text-dark">30 done</span> this month
          </p>
        </div>
        <button className="p-1 text-lightText hover:text-dark hover:bg-gray-50 rounded-lg transition-colors">
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Responsive Table Container */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[500px]">
          <thead>
            <tr className="border-b border-gray-100 text-[10px] font-bold text-lightText uppercase tracking-wider">
              <th className="pb-3 pl-2">Companies</th>
              <th className="pb-3">Members</th>
              <th className="pb-3">Budget</th>
              <th className="pb-3 pr-2">Completion</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {projects.map((project) => (
              <tr
                key={project.name}
                className="hover:bg-gray-50/45 transition-colors"
              >
                {/* Company Name */}
                <td className="py-3 pl-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100 text-xs font-black text-primary select-none">
                      {project.name.charAt(0)}
                    </div>
                    <span className="text-xs font-bold text-dark">
                      {project.name}
                    </span>
                  </div>
                </td>

                {/* Team Members Avatar Stack */}
                <td className="py-3">
                  <div className="flex -space-x-1.5 overflow-hidden">
                    {project.members.map((member, i) => (
                      <div
                        key={i}
                        className={`inline-block h-5 w-5 rounded-full ring-2 ring-white text-[8px] font-extrabold text-white flex items-center justify-center select-none ${
                          memberColors[member] || "bg-gray-400"
                        }`}
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                </td>

                {/* Budget */}
                <td className="py-3 text-xs font-bold text-dark">
                  {project.budget}
                </td>

                {/* Completion Progress Bar */}
                <td className="py-3 pr-2">
                  <div className="flex flex-col gap-1 w-24">
                    <span className="text-[10px] font-bold text-dark">
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
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
