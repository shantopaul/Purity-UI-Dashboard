const projectsList = [
  {
    id: "Project #1",
    title: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    color: "bg-gradient-to-br from-pink-400 to-rose-500",
    collaborators: [
      { name: "Esthera", init: "EJ", bg: "bg-primary" },
      { name: "Alexa", init: "AL", bg: "bg-teal-400" },
      { name: "Richard", init: "RG", bg: "bg-amber-400" },
    ],
  },
  {
    id: "Project #2",
    title: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    color: "bg-gradient-to-br from-teal-400 to-cyan-500",
    collaborators: [
      { name: "Laurent", init: "LM", bg: "bg-blue-400" },
      { name: "Firiou", init: "FJ", bg: "bg-indigo-400" },
      { name: "Elisa", init: "EB", bg: "bg-pink-400" },
    ],
  },
  {
    id: "Project #3",
    title: "Minimalist",
    description:
      "Different people have different taste, and various types of music.",
    color: "bg-gradient-to-br from-indigo-400 to-purple-500",
    collaborators: [
      { name: "Miriam", init: "ME", bg: "bg-purple-400" },
      { name: "Richard", init: "RG", bg: "bg-amber-400" },
      { name: "Alexa", init: "AL", bg: "bg-teal-400" },
      { name: "Firiou", init: "FJ", bg: "bg-indigo-400" },
    ],
  },
];

export default function ProfileProjects() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold text-dark">Projects</h3>
        <p className="text-[10px] text-lightText font-semibold mt-1">
          Architects design houses
        </p>
      </div>

      {/* Grid Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="border border-gray-100/50 rounded-xl p-4 flex flex-col gap-4 hover:shadow-sm transition-all"
          >
            {/* Visual Cover Card */}
            <div
              className={`w-full h-36 rounded-lg shadow-inner ${project.color}`}
            />

            {/* Information */}
            <div className="flex flex-col gap-1.5 flex-1">
              <span className="text-[9px] font-bold text-lightText tracking-wider uppercase">
                {project.id}
              </span>
              <h4 className="text-xs font-bold text-dark">{project.title}</h4>
              <p className="text-[10px] text-lightText font-medium leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Footer row (Actions + Avatar group) */}
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-50">
              <button className="text-[10px] font-extrabold text-primary hover:underline uppercase tracking-wider">
                View Project
              </button>

              {/* Avatar Cluster */}
              <div className="flex -space-x-1.5 items-center select-none">
                {project.collaborators.map((user, i) => (
                  <div
                    key={i}
                    title={user.name}
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-white font-extrabold text-[8px] border-2 border-white cursor-help shadow-sm shrink-0 ${user.bg}`}
                  >
                    {user.init}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
