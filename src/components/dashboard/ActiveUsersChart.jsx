import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Wallet, Globe, Users, ShoppingCart } from "lucide-react";

const mockData = [
  { name: "M", value: 330 },
  { name: "T", value: 250 },
  { name: "W", value: 500 },
  { name: "T", value: 300 },
  { name: "F", value: 400 },
  { name: "S", value: 350 },
  { name: "S", value: 450 },
  { name: "M", value: 310 },
  { name: "T", value: 480 },
];

const statList = [
  { label: "Users", count: "32.9k", icon: Users, progress: 60 },
  { label: "Clicks", count: "2.42m", icon: Globe, progress: 80 },
  { label: "Sales", count: "$2,400", icon: Wallet, progress: 30 },
  { label: "Items", count: "320", icon: ShoppingCart, progress: 40 },
];

export default function ActiveUsersChart() {
  return (
    <div className="bg-white rounded-card shadow-card p-4 flex flex-col gap-6">
      {/* Chart container with gradient background */}
      <div className="bg-gradient-to-br from-teal-400 to-primary/95 rounded-xl p-4 shadow-inner relative overflow-hidden">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={mockData}
            margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              stroke="#E2E8F0"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dy={10}
            />
            <YAxis
              stroke="#E2E8F0"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dx={-5}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.08)" }}
              contentStyle={{
                backgroundColor: "#1A202C",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "10px",
              }}
              labelStyle={{ fontWeight: "bold" }}
            />
            <Bar
              dataKey="value"
              fill="#ffffff"
              radius={[4, 4, 0, 0]}
              barSize={6}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description & Trends */}
      <div>
        <h3 className="text-sm font-bold text-dark">Active Users</h3>
        <p className="text-xs text-lightText mt-0.5">
          <span className="text-success font-bold">(+23%)</span> than last week
        </p>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-4 gap-4">
        {statList.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5 text-lightText">
                <div className="w-5 h-5 rounded-md bg-gray-50 flex items-center justify-center text-primary shadow-sm border border-gray-100/50">
                  <Icon size={11} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider hidden sm:inline">
                  {stat.label}
                </span>
              </div>
              <span className="text-sm font-extrabold text-dark">
                {stat.count}
              </span>
              {/* Progress bar indicator */}
              <div className="w-full bg-gray-100 rounded-full h-1">
                <div
                  className="bg-primary h-1 rounded-full"
                  style={{ width: `${stat.progress}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
