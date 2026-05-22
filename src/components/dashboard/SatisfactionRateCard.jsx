import { Smile } from "lucide-react";

export default function SatisfactionRateCard() {
  const percentage = 95;
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col justify-between min-h-[290px]">
      <div>
        <h3 className="text-sm font-bold text-dark">Satisfaction Rate</h3>
        <p className="text-xs text-lightText mt-0.5">From all projects</p>
      </div>

      <div className="flex justify-center my-2 relative">
        <svg className="w-36 h-36 transform -rotate-90">
          {/* Base gray ring */}
          <circle
            cx="72"
            cy="72"
            r={radius}
            className="text-gray-100"
            strokeWidth={strokeWidth}
            stroke="currentColor"
            fill="transparent"
          />
          {/* Active progress ring */}
          <circle
            cx="72"
            cy="72"
            r={radius}
            className="text-primary"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
          />
        </svg>

        {/* Central absolute details */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white shadow-sm mb-0.5">
            <Smile size={18} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold text-dark">{percentage}%</span>
          <span className="text-[10px] text-primary font-bold mt-0.5">
            Good
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
        <span className="text-[10px] text-lightText font-bold">0%</span>
        <span className="text-xs font-bold text-dark">95% Satisfaction</span>
        <span className="text-[10px] text-lightText font-bold">100%</span>
      </div>
    </div>
  );
}
