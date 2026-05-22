import backgroundImg from "../../assets/images/background.png";

export default function CreditCardWidget() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="bg-cover bg-center rounded-card shadow-card p-6 text-white flex flex-col justify-between min-h-[200px] relative overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      {/* Translucent premium glass overlay */}
      <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px] z-0" />

      {/* Header (Wifi icon & Brand initials) */}
      <div className="z-10 flex justify-between items-start">
        {/* Card Chip icon */}
        <svg
          className="w-10 h-8 text-yellow-300/90"
          viewBox="0 0 100 80"
          fill="currentColor"
        >
          <rect x="10" y="10" width="80" height="60" rx="10" />
          <path
            d="M10 30 H90 M10 50 H90 M40 10 V70 M60 10 V70"
            stroke="rgba(0,0,0,0.2)"
            strokeWidth="3"
          />
        </svg>
        <span className="text-sm font-black tracking-wider uppercase opacity-90">
          Purity
        </span>
      </div>

      {/* Card Number */}
      <div className="z-10 my-4">
        <span className="text-lg font-bold tracking-[0.2em] font-mono block">
          7812 •••• •••• 7916
        </span>
      </div>

      {/* Card Info Footer */}
      <div className="z-10 flex justify-between items-end">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-gray-300 uppercase tracking-wider">
              Card Holder
            </span>
            <span className="text-xs font-bold mt-0.5">Oliver Liam</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[8px] font-bold text-gray-300 uppercase tracking-wider">
              Expires
            </span>
            <span className="text-xs font-bold mt-0.5">05/28</span>
          </div>
        </div>

        {/* Mastercard circles logo */}
        <div className="flex -space-x-2.5 items-center select-none">
          <div className="w-6 h-6 rounded-full bg-red-500/90" />
          <div className="w-6 h-6 rounded-full bg-yellow-500/80" />
        </div>
      </div>
    </div>
  );
}
