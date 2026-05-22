export default function StatsCard({
  title,
  value,
  percentage,
  isPositive,
  icon: Icon,
}) {
  return (
    <div className="bg-white rounded-card shadow-card p-4 flex justify-between items-center transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col">
        <span className="text-[10px] font-bold text-lightText uppercase tracking-wider">
          {title}
        </span>
        <div className="flex items-baseline gap-1.5 mt-1">
          <span className="text-lg font-bold text-dark">{value}</span>
          <span
            className={`text-xs font-bold ${
              isPositive ? "text-success" : "text-red-500"
            }`}
          >
            {percentage}
          </span>
        </div>
      </div>
      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shadow-sm">
        {Icon && <Icon size={18} strokeWidth={2.5} />}
      </div>
    </div>
  );
}
