import {
  Bell,
  CreditCard,
  Key,
  Settings,
  Code,
} from "lucide-react";

const timelineData = [
  {
    title: "$2400, Design changes",
    time: "22 DEC 7:20 PM",
    color: "border-primary text-primary",
    icon: Bell,
  },
  {
    title: "New order #4219423",
    time: "21 DEC 11:21 PM",
    color: "border-red-500 text-red-500",
    icon: Code,
  },
  {
    title: "Server Payments for April",
    time: "21 DEC 9:28 PM",
    color: "border-blue-500 text-blue-500",
    icon: CreditCard,
  },
  {
    title: "New card added for order #3210145",
    time: "20 DEC 3:52 PM",
    color: "border-orange-500 text-orange-500",
    icon: CreditCard,
  },
  {
    title: "Unlock packages for Development",
    time: "19 DEC 11:35 PM",
    color: "border-purple-500 text-purple-500",
    icon: Key,
  },
  {
    title: "New order #9851258",
    time: "18 DEC 4:41 PM",
    color: "border-[#FF00FF] text-[#FF00FF]",
    icon: Settings,
  },
];

export default function OrdersOverviewTimeline() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold text-dark">Orders overview</h3>
        <p className="text-xs text-lightText mt-0.5">
          <span className="text-success font-bold">+30%</span> this month
        </p>
      </div>

      {/* Timeline items list */}
      <div className="flex flex-col relative pl-4">
        {/* Continuous connector line */}
        <div className="absolute top-2 bottom-6 left-[23px] w-[1px] bg-gray-100" />

        {timelineData.map((item, i) => {
          const Icon = item.icon;
          return (
            <div
              key={i}
              className="flex gap-4 pb-6 last:pb-1 items-start relative"
            >
              {/* Dot Icon indicator */}
              <div
                className={`w-4 h-4 rounded-full border bg-white flex items-center justify-center z-10 shrink-0 mt-0.5 ${item.color}`}
              >
                <Icon size={8} strokeWidth={3} />
              </div>

              {/* Log text details */}
              <div className="flex flex-col">
                <span className="text-xs font-bold text-dark leading-tight">
                  {item.title}
                </span>
                <span className="text-[10px] text-lightText font-semibold mt-1">
                  {item.time}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
