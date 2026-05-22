import { Edit2 } from "lucide-react";

export default function PaymentMethods() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-dark">Payment Method</h3>
        <button className="bg-[#1A202C] hover:bg-[#2D3748] text-white font-extrabold text-[9px] px-4 py-2.5 rounded-xl transition-colors tracking-wider uppercase">
          Add a New Card
        </button>
      </div>

      {/* Cards list grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mastercard */}
        <div className="flex justify-between items-center border border-gray-100 rounded-xl p-4 transition-all hover:border-primary/30">
          <div className="flex items-center gap-3">
            {/* Mastercard logo initials wrapper */}
            <div className="w-10 h-7 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100/50">
              <div className="flex -space-x-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400/90" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400/80" />
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-dark">
              7812 2139 0823 XXXX
            </span>
          </div>
          <button className="p-1.5 text-lightText hover:text-dark hover:bg-gray-50 rounded-lg transition-all">
            <Edit2 size={12} strokeWidth={2.5} />
          </button>
        </div>

        {/* Visa */}
        <div className="flex justify-between items-center border border-gray-100 rounded-xl p-4 transition-all hover:border-primary/30">
          <div className="flex items-center gap-3">
            {/* Visa logo placeholder */}
            <div className="w-10 h-7 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100/50 text-[10px] font-black text-blue-600 italic">
              VISA
            </div>
            <span className="text-xs font-mono font-bold text-dark">
              7812 2139 0823 XXXX
            </span>
          </div>
          <button className="p-1.5 text-lightText hover:text-dark hover:bg-gray-50 rounded-lg transition-all">
            <Edit2 size={12} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
