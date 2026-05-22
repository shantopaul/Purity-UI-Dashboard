import { ArrowRight } from "lucide-react";
import backgroundImg from "../../assets/images/background.png";

export default function WelcomeCard() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="bg-cover bg-center rounded-card shadow-card p-6 text-white flex flex-col justify-between min-h-[290px] relative overflow-hidden"
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/15 backdrop-brightness-[0.85] z-0" />

      <div className="z-10 flex flex-col gap-1 max-w-[80%]">
        <span className="text-[10px] font-bold text-teal-100 uppercase tracking-wider">
          Built by developers
        </span>
        <h2 className="text-xl font-bold mt-1 text-white">
          Purity UI Dashboard
        </h2>
        <p className="text-xs text-teal-50/90 mt-2 leading-relaxed">
          From colors, cards, typography to complex elements, you will find the
          full documentation.
        </p>
      </div>

      <div className="z-10 mt-6">
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/purity-ui-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:translate-x-1 transition-all group"
        >
          <span>Read More</span>
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
