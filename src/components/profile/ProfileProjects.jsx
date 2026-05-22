import { Plus } from "lucide-react";

const projectsList = [
  {
    id: "Project #1",
    title: "Modern",
    description:
      "As Uber works through a huge amount of internal management turmoil.",
    cover:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop",
    collaborators: [
      {
        name: "Esthera",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
      },
      {
        name: "Alexa",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
      },
      {
        name: "Richard",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "Project #2",
    title: "Scandinavian",
    description:
      "Music is something that every person has his or her own specific opinion about.",
    cover:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop",
    collaborators: [
      {
        name: "Laurent",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
      },
      {
        name: "Firiou",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
      },
      {
        name: "Elisa",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop",
      },
    ],
  },
  {
    id: "Project #3",
    title: "Minimalist",
    description:
      "Different people have different taste, and various types of music.",
    cover:
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600&auto=format&fit=crop",
    collaborators: [
      {
        name: "Miriam",
        avatar:
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop",
      },
      {
        name: "Richard",
        avatar:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop",
      },
      {
        name: "Alexa",
        avatar:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
      },
      {
        name: "Firiou",
        avatar:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
      },
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
          <div key={project.id} className="flex flex-col gap-4 transition-all">
            {/* Visual Cover Card */}
            <img
              src={project.cover}
              alt={project.title}
              className="w-full h-36 rounded-2xl object-cover shadow-sm shrink-0"
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
            <div className="flex justify-between items-center mt-2">
              <button className="border border-primary text-primary hover:bg-primary/5 text-[9px] font-extrabold px-5 py-2.5 rounded-xl transition-all uppercase tracking-wider">
                VIEW PROJECT
              </button>

              {/* Avatar Cluster */}
              <div className="flex -space-x-1.5 items-center select-none">
                {project.collaborators.map((user, i) => (
                  <img
                    key={i}
                    src={user.avatar}
                    alt={user.name}
                    title={user.name}
                    className="w-6 h-6 rounded-full object-cover border-2 border-white cursor-help shadow-sm shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Create a New Project dotted card */}
        <button className="border-2 border-dashed border-gray-200 hover:border-primary/50 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:shadow-sm transition-all group h-full min-h-[220px] select-none">
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
