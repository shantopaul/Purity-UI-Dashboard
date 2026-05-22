const authors = [
  {
    name: "Elisa Beckett",
    email: "elisa@example.com",
    role: "Manager",
    department: "Organization",
    status: "Online",
    employed: "14/06/21",
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
    initials: "LM",
    color: "bg-blue-400",
  },
  {
    name: "Firiou John",
    email: "firiou@example.com",
    role: "Developer",
    department: "Developer",
    status: "Online",
    employed: "24/12/08",
    initials: "FJ",
    color: "bg-indigo-400",
  },
  {
    name: "Richard Gran",
    email: "richard@example.com",
    role: "Designer",
    department: "UI/UX",
    status: "Offline",
    employed: "04/10/21",
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
            <tr className="border-b border-gray-100 text-[10px] font-bold text-lightText uppercase tracking-wider">
              <th className="pb-3 pl-2">Author</th>
              <th className="pb-3">Function</th>
              <th className="pb-3">Status</th>
              <th className="pb-3">Employed</th>
              <th className="pb-3 pr-2 text-right">Action</th>
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
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center text-white font-extrabold text-xs select-none shadow-sm ${author.color}`}
                    >
                      {author.initials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-dark leading-snug">
                        {author.name}
                      </span>
                      <span className="text-[10px] text-lightText font-semibold">
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
                    <span className="text-[10px] text-lightText font-semibold">
                      {author.department}
                    </span>
                  </div>
                </td>

                {/* Status Indicator */}
                <td className="py-3.5">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-bold ${
                      author.status === "Online"
                        ? "bg-success/15 text-success"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {author.status}
                  </span>
                </td>

                {/* Employed Date */}
                <td className="py-3.5 text-xs font-bold text-dark">
                  {author.employed}
                </td>

                {/* Edit Link action */}
                <td className="py-3.5 pr-2 text-right">
                  <button className="text-xs font-bold text-lightText hover:text-dark transition-colors">
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
