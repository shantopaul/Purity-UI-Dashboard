import { ArrowRight } from "lucide-react";

export default function WelcomeCard() {
  return (
    <div className="bg-white rounded-card shadow-card p-6 flex flex-col md:flex-row gap-6 items-stretch min-h-[290px] justify-between w-full h-full">
      {/* Left Text details */}
      <div className="flex-1 flex flex-col justify-between py-1 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
            Built by developers
          </span>
          <h2 className="text-xl font-bold text-dark mt-1">
            Purity UI Dashboard
          </h2>
          <p className="text-xs text-lightText leading-relaxed mt-2 max-w-[95%]">
            From colors, cards, typography to complex elements, you will find
            the full documentation.
          </p>
        </div>

        <div className="mt-auto">
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/purity-ui-dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[10px] font-bold text-dark hover:translate-x-1 transition-all group uppercase tracking-wider"
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
      <div className="w-full md:w-[44%] bg-gradient-to-br from-teal-400 to-primary rounded-2xl flex items-center justify-center p-6 relative overflow-hidden select-none shadow-sm min-h-[180px] md:min-h-0 shrink-0">
        {/* Dynamic decorative shapes */}
        <div className="absolute w-28 h-28 rounded-full bg-white/5 -top-10 -right-10 blur-md" />
        <div className="absolute w-24 h-24 rounded-full bg-white/5 -bottom-10 -left-10 blur-md" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-[linear-gradient(225deg,transparent_50%,#fff_50%)]" />

        <div className="flex items-center gap-2.5 z-10">
          {/* White circle with teal lightning bolt */}
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shadow-sm shrink-0">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 2L4 12h7v10l8-10h-7z" />
            </svg>
          </div>
          {/* Brand Text */}
          <span className="text-2xl font-black text-white tracking-tight lowercase">
            chakra
          </span>
        </div>
      </div>
    </div>
  );
}
