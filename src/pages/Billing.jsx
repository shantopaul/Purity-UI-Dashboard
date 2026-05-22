import { Wallet } from "lucide-react";
import CreditCardWidget from "../components/billing/CreditCardWidget";
import PaymentMethods from "../components/billing/PaymentMethods";
import InvoicesList from "../components/billing/InvoicesList";
import BillingInfoList from "../components/billing/BillingInfoList";
import TransactionsFeed from "../components/billing/TransactionsFeed";

export default function Billing() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
      {/* Left Column */}
      <div className="lg:col-span-8 flex flex-col gap-6 w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch h-auto md:h-[220px]">
          <CreditCardWidget />
          <div className="grid grid-cols-2 gap-6 h-full">
            {/* Salary Card */}
            <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center text-center justify-between h-[220px] md:h-full">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-2xl shadow-sm shadow-primary/20">
                <Wallet size={20} />
              </div>
              <div className="flex flex-col items-center mt-3">
                <h4 className="text-sm font-bold text-dark">Salary</h4>
                <p className="text-[10px] text-lightText font-semibold mt-0.5">
                  Belong Interactive
                </p>
              </div>
              <span className="text-sm font-extrabold text-dark mt-3 block">
                +$2000
              </span>
            </div>

            {/* PayPal Card */}
            <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center text-center justify-between h-[220px] md:h-full">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-2xl shadow-sm shadow-primary/20">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7.076 21.337H11.57c.504 0 .93-.362 1.018-.857l2.16-12.06c.074-.413-.243-.79-.663-.79H9.42c-.504 0-.93.363-1.018.858L6.242 20.547c-.074.413.243.79.663.79h.171z" />
                  <path d="M12.825 8.167c.365-.407.822-.613 1.379-.613H18c1.616 0 2.8.52 3.493 1.543.593.874.723 1.956.452 3.195l-1.57 7.973c-.085.433-.464.745-.905.745h-3.327c-.45 0-.832-.323-.91-.763L13.785 8.87a.64.64 0 01.127-.514c.032-.036.065-.072.098-.109z" />
                </svg>
              </div>
              <div className="flex flex-col items-center mt-3">
                <h4 className="text-sm font-bold text-dark">Paypal</h4>
                <p className="text-[10px] text-lightText font-semibold mt-0.5">
                  Freelance Payment
                </p>
              </div>
              <span className="text-sm font-extrabold text-dark mt-3 block">
                $455.00
              </span>
            </div>
          </div>
        </div>
        <PaymentMethods />
        <BillingInfoList />
      </div>

      {/* Right Column */}
      <div className="lg:col-span-4 flex flex-col gap-6 h-full">
        <InvoicesList />
        <TransactionsFeed />
      </div>
    </div>
  );
}
