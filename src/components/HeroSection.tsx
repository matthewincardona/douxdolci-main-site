import { motion } from "motion/react";
import svgPaths from "../imports/svg-y6urbruuc2";
import BusinessTypesTicker from "./BusinessTypesTicker";

function HeaderDynamic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="content-stretch flex gap-3 items-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre"
    >
      <span
        className="absolute inset-0 left-[-50px] bg-yellow-300 rounded-xs
"
      />
      <p className="relative">generates leads</p>
    </motion.div>
  );
}

function GetInTouchBtn({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      onClick={onClick}
      className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-36 cursor-pointer transition-opacity hover:opacity-80"
    >
      <p className="leading-[normal] relative shrink-0  text-[20px] w-full">
        Get In Touch
      </p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 -top-px">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 144 1"
          >
            <line
              id="Line 1"
              stroke="var(--stroke-0, black)"
              x2="144"
              y1="0.5"
              y2="0.5"
            />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}

function MailIcon() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center justify-center size-16"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 64 64"
      >
        <g id="Group 3">
          <path
            d={svgPaths.p15987200}
            id="Star 1"
            stroke="var(--stroke-0, black)"
            className="animate-spin-slow"
            style={{ transformOrigin: "center" }}
          />
          <g clipPath="url(#clip0_1_175)" id="email 1">
            <path
              d={svgPaths.p1dece080}
              fill="var(--fill-0, #101010)"
              id="Vector"
            />
            <g id="<Transparent Rectangle>"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_175">
            <rect
              fill="white"
              height="28"
              transform="translate(18 18)"
              width="28"
            />
          </clipPath>
        </defs>
      </svg>
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}

interface HeroSectionProps {
  onGetInTouchClick: () => void;
}

export default function HeroSection({ onGetInTouchClick }: HeroSectionProps) {
  return (
    <div className="z-10 min-h-[60vh] flex items-center justify-end flex-col">
      <div
        className="py-24 w-full gap-4 -mb-20"
        style={{
          display: "grid",
          gridTemplateColumns: "224px 1fr",
        }}
      >
        <div
          className="absolute min-h-screen inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.8597e-16 74.2 -104.34 0.0000024288 720 -0.000016759)\\'><stop stop-color=\\'rgba(192,32,113,1)\\' offset=\\'0.40385\\'/><stop stop-color=\\'rgba(199,59,130,1)\\' offset=\\'0.45673\\'/><stop stop-color=\\'rgba(206,86,146,1)\\' offset=\\'0.50962\\'/><stop stop-color=\\'rgba(220,139,180,1)\\' offset=\\'0.61538\\'/><stop stop-color=\\'rgba(233,193,213,1)\\' offset=\\'0.72115\\'/><stop stop-color=\\'rgba(247,246,246,1)\\' offset=\\'0.82692\\'/></radialGradient></defs></svg>')",
            backgroundSize: "cover",
            backgroundPosition: "0 -10vh",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div></div>
        <div className="relative max-w-[1440px] w-full flex flex-col items-start gap-8 text-[40px]">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Get a website that
            </motion.p>
            <HeaderDynamic />
          </div>

          <div className="flex gap-6 items-center mb-8">
            <GetInTouchBtn onClick={onGetInTouchClick} />
            <MailIcon />
          </div>
        </div>
      </div>
      <BusinessTypesTicker />
    </div>
  );
}
