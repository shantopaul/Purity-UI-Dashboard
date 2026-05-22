const authors = [
  {
    name: "Elisa Beckett",
    email: "elisa@example.com",
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "14/06/21",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    initials: "EB",
    color: "bg-pink-400",
  },
  {
    name: "Alexa Liras",
    email: "alexa@example.com",
    role: "Programator",
    department: "Developer",
    status: "Offline",
    employed: "11/01/19",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    initials: "AL",
    color: "bg-teal-400",
  },
  {
    name: "Laurent Michael",
    email: "laurent@example.com",
    role: "Executive",
    department: "Projects",
    status: "Online",
    employed: "19/09/17",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    initials: "LM",
    color: "bg-blue-400",
  },
  {
    name: "Firiou John",
    email: "firiou@example.com",
    role: "Programator",
    department: "Developer",
    status: "Online",
    employed: "24/12/08",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    initials: "FJ",
    color: "bg-indigo-400",
  },
  {
    name: "Richard Gran",
    email: "richard@example.com",
    role: "Manager",
    department: "Organization",
    status: "Offline",
    employed: "04/10/21",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80",
    initials: "RG",
    color: "bg-amber-400",
  },
  {
    name: "Miriam Eric",
    email: "miriam@example.com",
    role: "Programator",
    department: "Developer",
    status: "Online",
    employed: "14/09/20",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    initials: "ME",
    color: "bg-purple-400",
  },
];

export default function AuthorsTable() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6 overflow-hidden">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold text-dark">Authors Table</h3>
      </div>

      {/* Table grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-100 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider">
              <th className="pb-3 pl-2">Author</th>
              <th className="pb-3">Function</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Employed</th>
              <th className="pb-3 pr-2 text-right"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {authors.map((author) => (
              <tr
                key={author.email}
                className="hover:bg-gray-50/45 transition-colors"
              >
                {/* Author Info */}
                <td className="py-3.5 pl-2">
                  <div className="flex items-center gap-3">
                    {author.avatar ? (
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-8 h-8 rounded-xl object-cover border border-gray-100 shadow-sm"
                      />
                    ) : (
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-white font-extrabold text-xs select-none shadow-sm ${author.color}`}
                      >
                        {author.initials}
                      </div>
                    )}
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-dark leading-snug">
                        {author.name}
                      </span>
                      <span className="text-[10px] text-gray-400 font-semibold">
                        {author.email}
                      </span>
                    </div>
                  </div>
                </td>

                {/* Job Function */}
                <td className="py-3.5">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-dark leading-snug">
                      {author.role}
                    </span>
                    <span className="text-[10px] text-gray-400 font-semibold">
                      {author.department}
                    </span>
                  </div>
                </td>

                {/* Status Indicator */}
                <td className="py-3.5">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                      author.status === "Online"
                        ? "bg-success/10 text-success"
                        : "bg-[#718096]/10 text-[#718096]"
                    }`}
                  >
                    {author.status}
                  </span>
                </td>

                {/* Employed Date */}
                <td className="py-3.5 text-xs font-bold text-gray-500">
                  {author.employed}
                </td>

                {/* Edit Link action */}
                <td className="py-3.5 pr-2 text-right">
                  <button className="text-[10px] font-extrabold text-gray-400 hover:text-dark transition-colors uppercase tracking-wider">
                    Edit
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
