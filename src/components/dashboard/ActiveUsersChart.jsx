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
  { name: "1", value: 330 },
  { name: "2", value: 230 },
  { name: "3", value: 120 },
  { name: "4", value: 300 },
  { name: "5", value: 480 },
  { name: "6", value: 380 },
  { name: "7", value: 450 },
  { name: "8", value: 290 },
  { name: "9", value: 160 },
];

const statList = [
  { label: "Users", count: "32,984", icon: Users, progress: 60 },
  { label: "Clicks", count: "2,42m", icon: Globe, progress: 80 },
  { label: "Sales", count: "2,400$", icon: Wallet, progress: 30 },
  { label: "Items", count: "320", icon: ShoppingCart, progress: 40 },
];

export default function ActiveUsersChart() {
  return (
    <div className="bg-white rounded-card shadow-card p-4 flex flex-col gap-6 w-full h-full">
      {/* Chart container with dark background */}
      <div className="bg-[#1A202C] rounded-xl p-4 shadow-inner relative overflow-hidden">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={mockData}
            margin={{ top: 10, right: 5, left: -25, bottom: 0 }}
          >
            <XAxis
              dataKey="name"
              stroke="#A0AEC0"
              fontSize={10}
              tick={false}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#A0AEC0"
              fontSize={10}
              tickLine={false}
              axisLine={false}
              dx={-5}
            />
            <Tooltip
              cursor={{ fill: "rgba(255,255,255,0.08)" }}
              contentStyle={{
                backgroundColor: "#2D3748",
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
              radius={[3, 3, 0, 0]}
              barSize={5}
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
                <div className="w-5 h-5 rounded-md bg-primary flex items-center justify-center text-white shadow-sm shrink-0">
                  <Icon size={11} strokeWidth={2.5} />
                </div>
                <span className="text-[10px] font-bold text-gray-400">
                  {stat.label}
                </span>
              </div>
              <span className="text-sm font-extrabold text-dark mt-0.5">
                {stat.count}
              </span>
              {/* Progress bar indicator */}
              <div className="w-full bg-gray-100 rounded-full h-[3px]">
                <div
                  className="bg-primary h-[3px] rounded-full"
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
