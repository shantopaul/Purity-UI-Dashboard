const conversations = [
  {
    name: "Esthera Jackson",
    message: "Hi! I need more informations...",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Esthera Jackson",
    message: "Awesome work, can you change...",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Esthera Jackson",
    message: "Have a great afternoon...",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop",
  },
  {
    name: "Esthera Jackson",
    message: "About files I can...",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
];

export default function ConversationsList() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold text-dark">Conversations</h3>
      </div>

      {/* Conversations list */}
      <div className="flex flex-col gap-6">
        {conversations.map((conv, idx) => (
          <div key={idx} className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Avatar image */}
              <img
                src={conv.avatar}
                alt={conv.name}
                className="w-12 h-12 rounded-2xl object-cover shadow-sm select-none shrink-0"
              />
              {/* Detail text */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-dark leading-tight">
                  {conv.name}
                </span>
                <span className="text-[10px] text-lightText font-semibold mt-1">
                  {conv.message}
                </span>
              </div>
            </div>

            {/* Reply action button */}
            <button className="text-[10px] font-extrabold text-primary hover:underline uppercase tracking-wider shrink-0">
              Reply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
