import { Edit2 } from "lucide-react";

export default function ProfileInfo() {
  const profileDetails = [
    { label: "Full Name", value: "Alec M. Thompson" },
    { label: "Mobile", value: "(44) 123 1234 123" },
    { label: "Email", value: "alecthompson@mail.com" },
    { label: "Location", value: "United States" },
  ];

  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col gap-6 h-full">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold text-dark">Profile Information</h3>
        <button className="text-lightText hover:text-dark transition-colors">
          <Edit2 size={12} strokeWidth={2.5} />
        </button>
      </div>

      {/* Bio Description */}
      <div>
        <p className="text-xs text-lightText font-medium leading-relaxed">
          Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer is
          no. If two equally difficult paths, choose the one more painful in the
          short term (pain avoidance is creating an illusion of equality).
        </p>
      </div>

      {/* Split Divider */}
      <hr className="border-gray-100" />

      {/* Metadata & Socials */}
      <div className="flex flex-col gap-3.5">
        {profileDetails.map((detail) => (
          <div key={detail.label} className="flex gap-2 text-xs">
            <span className="text-lightText font-bold shrink-0">
              {detail.label}:
            </span>
            <span className="text-dark font-medium">{detail.value}</span>
          </div>
        ))}

        {/* Social Accounts */}
        <div className="flex gap-2 text-xs items-center mt-1">
          <span className="font-bold text-dark shrink-0">Social:</span>
          <div className="flex items-center gap-3 text-primary ml-1">
            <a href="#" className="hover:text-teal-600 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a href="#" className="hover:text-teal-600 transition-colors">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="hover:text-teal-600 transition-colors">
              <svg
                className="w-3.5 h-3.5 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
