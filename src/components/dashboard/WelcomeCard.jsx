import { ArrowRight } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="bg-white rounded-card shadow-card p-5 flex flex-col md:flex-row gap-6 items-stretch min-h-[220px]">
      {/* Left Text details */}
      <div className="flex-1 flex flex-col justify-between py-1.5 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-lightText uppercase tracking-wider">
            Built by developers
          </span>
          <h2 className="text-lg font-bold text-dark mt-1">
            Purity UI Dashboard
          </h2>
          <p className="text-[11px] text-lightText leading-relaxed mt-2 max-w-[90%]">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </p>
        </div>

        <div>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/purity-ui-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-extrabold text-dark hover:translate-x-1 transition-all group uppercase tracking-wider"
          >
            <span>Read more</span>
            <ArrowRight
              size={12}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Right Brand logo block */}
      <div className="md:w-[45%] bg-gradient-to-br from-teal-400 to-primary rounded-2xl flex items-center justify-center p-6 relative overflow-hidden select-none shadow-sm min-h-[160px]">
        {/* Dynamic decorative shapes */}
        <div className="absolute w-24 h-24 rounded-full bg-white/5 -top-8 -right-8 blur-lg" />
        <div className="absolute w-20 h-20 rounded-full bg-white/5 -bottom-8 -left-8 blur-lg" />

        <div className="flex items-center gap-2.5 z-10">
          {/* White circle with teal lightning bolt */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L4 12h7v10l8-10h-7z" />
            </svg>
          </div>
          {/* Brand Text */}
          <span className="text-xl font-black text-white tracking-tight lowercase">
            chakra
          </span>
        </div>
      </div>
    </div>
  );
}
