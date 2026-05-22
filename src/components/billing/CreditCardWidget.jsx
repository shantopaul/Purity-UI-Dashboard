import backgroundImg from "../../assets/images/background.png";

export default function CreditCardWidget() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="bg-cover bg-center rounded-card shadow-card p-6 text-white flex flex-col justify-between h-[220px] md:h-full relative overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      {/* Premium background container */}

      {/* Header (Wifi icon & Brand initials) */}
      <div className="z-10 flex justify-between items-center">
        <span className="text-sm font-black tracking-wider uppercase opacity-90">
          Purity UI
        </span>
        {/* Mastercard circles logo */}
        <div className="flex -space-x-2.5 items-center select-none opacity-80">
          <div className="w-6 h-6 rounded-full bg-white/25" />
          <div className="w-6 h-6 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Card Number */}
      <div className="z-10 my-4">
        <span className="text-lg font-bold tracking-[0.2em] font-mono block">
          7812 2139 0823 XXXX
        </span>
      </div>

      {/* Card Info Footer */}
      <div className="z-10 flex justify-between items-end">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-gray-300 uppercase tracking-wider">
              VALID THRU
            </span>
            <span className="text-xs font-bold mt-0.5">05/24</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-gray-300 uppercase tracking-wider">
              CVV
            </span>
            <span className="text-xs font-bold mt-0.5">09X</span>
          </div>
        </div>
      </div>
    </div>
  );
}
