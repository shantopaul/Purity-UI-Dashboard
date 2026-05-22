import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const mockData = [
  { month: "Jan", sales2022: 180, sales2021: 500 },
  { month: "Feb", sales2022: 210, sales2021: 300 },
  { month: "Mar", sales2022: 200, sales2021: 120 },
  { month: "Apr", sales2022: 340, sales2021: 270 },
  { month: "May", sales2022: 360, sales2021: 200 },
  { month: "Jun", sales2022: 470, sales2021: 260 },
  { month: "Jul", sales2022: 390, sales2021: 210 },
  { month: "Aug", sales2022: 320, sales2021: 120 },
  { month: "Sep", sales2022: 360, sales2021: 180 },
  { month: "Oct", sales2022: 210, sales2021: 120 },
  { month: "Nov", sales2022: 410, sales2021: 170 },
  { month: "Dec", sales2022: 430, sales2021: 135 },
];

export default function SalesOverviewChart() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-4">
      {/* Header Info */}
      <div>
        <h3 className="text-sm font-bold text-dark">Sales overview</h3>
        <p className="text-xs text-lightText mt-0.5">
          <span className="text-success font-bold">(+5) more</span> in 2021
        </p>
      </div>

      {/* Chart Canvas */}
      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height={260}>
          <AreaChart
            data={mockData}
            margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
          >
            <defs>
              <linearGradient id="color2022" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4FD1C5" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#4FD1C5" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="color2021" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#2D3748" stopOpacity={0.25} />
                <stop offset="95%" stopColor="#2D3748" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#EDF2F7"
            />
            <XAxis
              dataKey="month"
              stroke="#A0AEC0"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#A0AEC0"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dx={-5}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "1px solid #E2E8F0",
                borderRadius: "12px",
                fontSize: "11px",
                color: "#2D3748",
                boxShadow: "0 4px 12px 0 rgba(0, 0, 0, 0.05)",
              }}
            />
            {/* Area Series 2022 (Teal) */}
            <Area
              type="monotone"
              dataKey="sales2022"
              name="Sales 2022"
              stroke="#4FD1C5"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#color2022)"
            />
            {/* Area Series 2021 (Dark) */}
            <Area
              type="monotone"
              dataKey="sales2021"
              name="Sales 2021"
              stroke="#2D3748"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#color2021)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
