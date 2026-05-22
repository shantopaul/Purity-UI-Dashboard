import { FileDown } from "lucide-react";

const invoices = [
  { date: "March, 01, 2020", code: "#MS-415646", amount: "$180" },
  { date: "February, 10, 2021", code: "#RV-126749", amount: "$250" },
  { date: "April, 05, 2020", code: "#FB-212562", amount: "$560" },
  { date: "June, 25, 2019", code: "#QW-103578", amount: "$120" },
  { date: "March, 01, 2019", code: "#AR-803481", amount: "$300" },
];

export default function InvoicesList() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col justify-between h-[404px]">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-dark">Invoices</h3>
        <button className="border border-primary text-primary hover:bg-primary/5 font-bold text-[10px] px-3.5 py-1.5 rounded-xl transition-all">
          View All
        </button>
      </div>

      {/* Invoice list */}
      <div className="flex flex-col justify-between flex-1 mt-4">
        {invoices.map((inv) => (
          <div
            key={inv.code}
            className="flex justify-between items-center py-1"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold text-dark leading-tight">
                {inv.date}
              </span>
              <span className="text-[10px] text-lightText font-semibold mt-0.5">
                {inv.code}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-lightText">
                {inv.amount}
              </span>
              <button className="inline-flex items-center gap-1.5 text-xs font-bold text-dark hover:text-primary transition-all">
                <FileDown size={14} />
                <span className="hidden sm:inline text-[10px] uppercase tracking-wider">
                  PDF
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
