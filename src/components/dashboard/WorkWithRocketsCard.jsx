import { ArrowRight } from "lucide-react";
import rocketsBg from "../../assets/images/rockets_bg.png";

export default function WorkWithRocketsCard() {
  return (
    <div
      style={{ backgroundImage: `url(${rocketsBg})` }}
      className="bg-cover bg-center rounded-card shadow-card p-5 text-white flex flex-col justify-between min-h-[220px] relative overflow-hidden select-none"
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/45 backdrop-brightness-[0.8] z-0" />

      <div className="z-10 flex flex-col gap-1.5 max-w-[85%] mt-1">
        <h2 className="text-base font-bold text-white">
          Work with the Rockets
        </h2>
        <p className="text-[11px] text-gray-200/90 leading-relaxed mt-2">
          Wealth creation is an evolutionarily recent positive-sum game. It is
          all about who take the opportunity first.
        </p>
      </div>

      <div className="z-10">
        <a
          href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/purity-ui-dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-extrabold text-white hover:translate-x-1 transition-all group uppercase tracking-wider"
        >
          <span>Read more</span>
          <ArrowRight
            size={12}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </a>
      </div>
    </div>
  );
}
