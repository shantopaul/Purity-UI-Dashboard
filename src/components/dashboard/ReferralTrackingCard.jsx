import { MoreHorizontal } from "lucide-react";

export default function ReferralTrackingCard() {
  const safetyScore = 9.3;
  const radius = 50;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  // Let's make a semi-circle gauge (180 deg) or standard 270 deg. Let's make it 270 deg (circumference * 0.75)
  const maxAngle = 270;
  const angle = (safetyScore / 10) * maxAngle;
  const activeLength = (angle / 360) * circumference;
  const strokeDashoffset = circumference - activeLength;

  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col justify-between min-h-[290px]">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-sm font-bold text-dark">Referral Tracking</h3>
        </div>
        <button className="p-1 text-lightText hover:text-dark hover:bg-gray-50 rounded-lg transition-colors">
          <MoreHorizontal size={16} />
        </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-12 items-center gap-4 flex-1">
        {/* Statistics list (left) */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="bg-gray-50/50 border border-gray-100/50 rounded-xl p-3">
            <span className="text-[10px] text-lightText font-bold uppercase tracking-wider block">
              Invited
            </span>
            <span className="text-sm font-bold text-dark block mt-0.5">
              145 people
            </span>
          </div>

          <div className="bg-gray-50/50 border border-gray-100/50 rounded-xl p-3">
            <span className="text-[10px] text-lightText font-bold uppercase tracking-wider block">
              Bonus
            </span>
            <span className="text-sm font-bold text-dark block mt-0.5">
              1,465 XP
            </span>
          </div>
        </div>

        {/* Dial Score Gauge (right) */}
        <div className="col-span-6 flex justify-center relative">
          <svg className="w-32 h-32 transform rotate-135">
            {/* Base dial track (270 deg) */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              className="text-gray-100"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference * 0.75} ${circumference * 0.25}`}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
            {/* Active pointer gauge */}
            <circle
              cx="64"
              cy="64"
              r={radius}
              className="text-primary"
              strokeWidth={strokeWidth}
              strokeDasharray={`${circumference}`}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
            />
          </svg>

          {/* Central score details */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[9px] text-lightText font-bold uppercase tracking-wider">
              Safety
            </span>
            <span className="text-xl font-bold text-dark">{safetyScore}</span>
            <span className="text-[9px] text-lightText font-semibold mt-0.5">
              of 10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
