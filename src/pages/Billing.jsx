import { Landmark, Wallet } from "lucide-react";
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
          <div className="grid grid-cols-2 gap-6">
            {/* Salary Card */}
            <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center text-center justify-between">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-2xl shadow-sm shadow-primary/20">
                <Landmark size={20} />
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-dark">Salary</h4>
                <p className="text-[10px] text-lightText font-semibold mt-1">
                  Belong Interactive
                </p>
              </div>
              <hr className="w-full border-gray-100 my-3" />
              <span className="text-sm font-extrabold text-dark">+$2,000</span>
            </div>

            {/* PayPal Card */}
            <div className="bg-white rounded-card shadow-card p-6 flex flex-col items-center text-center justify-between">
              <div className="w-12 h-12 bg-primary flex items-center justify-center text-white rounded-2xl shadow-sm shadow-primary/20">
                <Wallet size={20} />
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-bold text-dark">PayPal</h4>
                <p className="text-[10px] text-lightText font-semibold mt-1">
                  Freelance Payment
                </p>
              </div>
              <hr className="w-full border-gray-100 my-3" />
              <span className="text-sm font-extrabold text-dark">+$4,900</span>
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
