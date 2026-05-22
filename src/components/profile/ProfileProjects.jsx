import { Plus } from "lucide-react";

const projectsList = [
  {
    id: "Project #1",
    title: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    cover:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
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
    cover:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop",
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
    cover:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=600&auto=format&fit=crop",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
        {projectsList.map((project) => (
          <div
            key={project.id}
            className="border border-gray-100/50 rounded-xl p-4 flex flex-col gap-4 hover:shadow-sm transition-all"
          >
            {/* Visual Cover Card */}
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-36 rounded-lg object-cover shadow-inner shrink-0"
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
              <button className="border border-primary text-primary hover:bg-primary/5 text-[9px] font-extrabold px-5 py-2 rounded-xl transition-all uppercase tracking-wider">
                VIEW ALL
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

        {/* Create a New Project dotted card */}
        <button className="border-2 border-dashed border-gray-200 hover:border-primary/50 rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-sm transition-all group h-full min-h-[220px] select-none">
          <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-lightText group-hover:text-primary group-hover:bg-primary/10 transition-colors">
            <Plus size={16} strokeWidth={2.5} />
          </div>
          <span className="text-xs font-bold text-lightText group-hover:text-primary transition-colors">
            Create a New Project
          </span>
        </button>
      </div>
    </div>
  );
}
