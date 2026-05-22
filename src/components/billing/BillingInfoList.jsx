import { Trash2, Edit } from "lucide-react";

const billingProfiles = [
  {
    name: "Oliver Liam",
    company: "Viking Burrito",
    email: "oliver@burrito.com",
    vat: "FRB1235476",
  },
  {
    name: "Lucas Harper",
    company: "Stone Tech Zone",
    email: "lucas@stone-tech.com",
    vat: "FRB1235476",
  },
  {
    name: "Ethan James",
    company: "Fiber Neon",
    email: "ethan@fiber.com",
    vat: "FRB1235476",
  },
];

export default function BillingInfoList() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6 flex-1">
      {/* Header */}
      <div>
        <h3 className="text-sm font-bold text-dark">Billing Information</h3>
      </div>

      {/* Profiles list */}
      <div className="flex flex-col justify-between flex-1 gap-4">
        {billingProfiles.map((profile) => (
          <div
            key={profile.name}
            className="bg-gray-50/50 border border-gray-100/50 rounded-xl p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4"
          >
            {/* Info details */}
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-extrabold text-dark leading-tight">
                {profile.name}
              </span>
              <div className="flex flex-col gap-0.5 text-[10px] text-lightText font-semibold mt-1">
                <div>
                  Company Name:{" "}
                  <span className="text-dark font-bold">{profile.company}</span>
                </div>
                <div>
                  Email Address:{" "}
                  <span className="text-dark font-bold">{profile.email}</span>
                </div>
                <div>
                  VAT Number:{" "}
                  <span className="text-dark font-bold">{profile.vat}</span>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 self-end sm:self-start">
              <button className="inline-flex items-center gap-1 text-[10px] font-bold text-red-500 hover:text-red-600 transition-colors uppercase tracking-wider">
                <Trash2 size={11} />
                <span>Delete</span>
              </button>
              <button className="inline-flex items-center gap-1 text-[10px] font-bold text-dark hover:text-primary transition-colors uppercase tracking-wider">
                <Edit size={11} />
                <span>Edit</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
