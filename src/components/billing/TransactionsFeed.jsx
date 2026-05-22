import { ArrowDown, ArrowUp, Calendar, AlertCircle } from "lucide-react";

const transactionGroup = [
  {
    period: "NEWEST",
    items: [
      {
        name: "Netflix",
        time: "27 March 2020, at 12:30 PM",
        amount: "- $2,500",
        type: "debit",
      },
      {
        name: "Apple",
        time: "27 March 2020, at 04:30 AM",
        amount: "+ $2,000",
        type: "credit",
      },
    ],
  },
  {
    period: "YESTERDAY",
    items: [
      {
        name: "Stripe",
        time: "26 March 2020, at 13:45 PM",
        amount: "+ $750",
        type: "credit",
      },
      {
        name: "Hubspot",
        time: "26 March 2020, at 12:30 PM",
        amount: "+ $1,050",
        type: "credit",
      },
      {
        name: "Creative Tim",
        time: "26 March 2020, at 08:30 AM",
        amount: "- $200",
        type: "debit",
      },
      {
        name: "Webflow",
        time: "26 March 2020, at 05:00 AM",
        amount: "Pending",
        type: "pending",
      },
    ],
  },
];

export default function TransactionsFeed() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6 flex-1">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-dark">Your Transactions</h3>
        <p className="text-[10px] text-lightText font-bold flex items-center gap-1.5">
          <Calendar size={13} />
          <span>23 - 30 March 2020</span>
        </p>
      </div>

      {/* Transaction periods */}
      <div className="flex flex-col gap-6 flex-1 justify-between">
        {transactionGroup.map((group) => (
          <div key={group.period} className="flex flex-col gap-3">
            {/* Period title */}
            <span className="text-[9px] font-bold text-lightText tracking-wider uppercase">
              {group.period}
            </span>

            {/* List items */}
            <div className="flex flex-col gap-4">
              {group.items.map((item, i) => {
                const isDebit = item.type === "debit";
                const isPending = item.type === "pending";

                return (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      {/* Direction Circle Indicator */}
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center border text-xs shrink-0 select-none ${
                          isPending
                            ? "border-gray-200 text-gray-500 bg-gray-50"
                            : isDebit
                              ? "border-red-100 text-red-500 bg-red-50"
                              : "border-green-100 text-success bg-green-50"
                        }`}
                      >
                        {isPending ? (
                          <AlertCircle size={10} strokeWidth={3} />
                        ) : isDebit ? (
                          <ArrowDown size={10} strokeWidth={3} />
                        ) : (
                          <ArrowUp size={10} strokeWidth={3} />
                        )}
                      </div>

                      {/* Detail text */}
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-dark leading-tight">
                          {item.name}
                        </span>
                        <span className="text-[10px] text-lightText font-semibold mt-0.5">
                          {item.time}
                        </span>
                      </div>
                    </div>

                    {/* Cost Amount */}
                    <span
                      className={`text-xs font-bold ${
                        isPending
                          ? "text-gray-500"
                          : isDebit
                            ? "text-red-500"
                            : "text-success"
                      }`}
                    >
                      {item.amount}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
