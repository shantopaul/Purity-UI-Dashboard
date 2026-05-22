import CreditCardWidget from "../components/billing/CreditCardWidget";
import PaymentMethods from "../components/billing/PaymentMethods";
import InvoicesList from "../components/billing/InvoicesList";
import BillingInfoList from "../components/billing/BillingInfoList";
import TransactionsFeed from "../components/billing/TransactionsFeed";

export default function Billing() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
      {/* Left Column */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <CreditCardWidget />
          {/* We can duplicate card details or render a promo, but let's just make credit card span or stack. Let's make credit card stack with a promo card or just show it single. Wait, in Figma it has a balance indicator card on the right, or we can just render the CreditCardWidget and wrap it nicely! */}
          <div className="bg-white rounded-card shadow-card p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold text-lightText uppercase tracking-wider block">
                Total Balance
              </span>
              <span className="text-2xl font-bold text-dark block mt-1">
                $45,231.89
              </span>
            </div>
            <div className="text-[10px] text-lightText font-semibold mt-4">
              <span className="text-success font-bold">+12%</span> since last
              month
            </div>
          </div>
        </div>
        <PaymentMethods />
        <BillingInfoList />
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        <InvoicesList />
        <TransactionsFeed />
      </div>
    </div>
  );
}
