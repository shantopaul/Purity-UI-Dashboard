import { Wallet, Globe, FileText, ShoppingCart } from "lucide-react";
import StatsCard from "../components/dashboard/StatsCard";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import SatisfactionRateCard from "../components/dashboard/SatisfactionRateCard";
import ReferralTrackingCard from "../components/dashboard/ReferralTrackingCard";
import ActiveUsersChart from "../components/dashboard/ActiveUsersChart";
import SalesOverviewChart from "../components/dashboard/SalesOverviewChart";
import MiniProjectsTable from "../components/dashboard/MiniProjectsTable";
import OrdersOverviewTimeline from "../components/dashboard/OrdersOverviewTimeline";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      {/* 4 Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatsCard
          title="Today's Money"
          value="$53,000"
          percentage="+55%"
          isPositive={true}
          icon={Wallet}
        />
        <StatsCard
          title="Today's Users"
          value="2,300"
          percentage="+3%"
          isPositive={true}
          icon={Globe}
        />
        <StatsCard
          title="New Clients"
          value="+3,462"
          percentage="-2%"
          isPositive={false}
          icon={FileText}
        />
        <StatsCard
          title="Total Sales"
          value="$103,430"
          percentage="+5%"
          isPositive={true}
          icon={ShoppingCart}
        />
      </div>

      {/* Welcome Card & Satisfaction Card & Referral Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-stretch">
          <WelcomeCard />
        </div>
        <div className="lg:col-span-3">
          <SatisfactionRateCard />
        </div>
        <div className="lg:col-span-4">
          <ReferralTrackingCard />
        </div>
      </div>

      {/* Active Users & Sales Overview Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-5">
          <ActiveUsersChart />
        </div>
        <div className="lg:col-span-7">
          <SalesOverviewChart />
        </div>
      </div>

      {/* Projects Table & Orders Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8">
          <MiniProjectsTable />
        </div>
        <div className="lg:col-span-4">
          <OrdersOverviewTimeline />
        </div>
      </div>
    </div>
  );
}
