import { MoreVertical } from "lucide-react";

const projects = [
  {
    name: "Chakra UI Version",
    budget: "$14,000",
    status: "Working",
    progress: 60,
    initial: "C",
    color: "text-primary bg-primary/10 border-primary/20",
  },
  {
    name: "Add Progress Track",
    budget: "$3,000",
    status: "Canceled",
    progress: 10,
    initial: "A",
    color: "text-red-500 bg-red-50 border-red-100",
  },
  {
    name: "Fix Platform Errors",
    budget: "Not Set",
    status: "Done",
    progress: 100,
    initial: "F",
    color: "text-green-500 bg-green-50 border-green-100",
  },
  {
    name: "Launch Version 2.0",
    budget: "$32,000",
    status: "Done",
    progress: 100,
    initial: "L",
    color: "text-primary bg-primary/10 border-primary/20",
  },
  {
    name: "Redesign Web Page",
    budget: "$400",
    status: "Working",
    progress: 25,
    initial: "R",
    color: "text-orange-500 bg-orange-50 border-orange-100",
  },
];

const statusStyles = {
  Working: "text-amber-500 bg-amber-50",
  Canceled: "text-red-500 bg-red-50",
  Done: "text-success bg-success/15",
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
            <tr className="border-b border-gray-100 text-[10px] font-bold text-lightText uppercase tracking-wider">
              <th className="pb-3 pl-2">Project</th>
              <th className="pb-3">Budget</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Completion</th>
              <th className="pb-3 pr-2 text-right">Action</th>
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
                    <div
                      className={`w-8 h-8 rounded-xl border flex items-center justify-center font-extrabold text-xs select-none shadow-sm ${project.color}`}
                    >
                      {project.initial}
                    </div>
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
                    className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold ${
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
