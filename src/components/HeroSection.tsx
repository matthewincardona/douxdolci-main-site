import { motion } from 'motion/react';
import svgPaths from "../imports/svg-y6urbruuc2";
import BusinessTypesTicker from './BusinessTypesTicker';

function Frame54() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="content-stretch flex gap-[12px] items-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre"
    >
      <p className="relative shrink-0 text-[40px]">generates leads</p>
      <p className="relative shrink-0 text-[#101010] text-[48px] text-center">?</p>
    </motion.div>
  );
}

function Frame56({ onClick }: { onClick: () => void }) {
  return (
    <motion.button 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      onClick={onClick}
      className="content-stretch flex flex-col gap-[3px] items-start relative shrink-0 w-[144px] cursor-pointer transition-opacity hover:opacity-80"
    >
      <p className="leading-[normal] relative shrink-0 text-[#101010] text-[20px] w-full">Get In Touch</p>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 1">
            <line id="Line 1" stroke="var(--stroke-0, black)" x2="144" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </motion.button>
  );
}

function Group3() {
  return (
    <div className="relative size-[64px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
        <g id="Group 3">
          <path d={svgPaths.p15987200} id="Star 1" stroke="var(--stroke-0, black)" className="animate-spin-slow" style={{ transformOrigin: 'center' }} />
          <g clipPath="url(#clip0_1_175)" id="email 1">
            <path d={svgPaths.p1dece080} fill="var(--fill-0, #101010)" id="Vector" />
            <g id="<Transparent Rectangle>"></g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_175">
            <rect fill="white" height="28" transform="translate(18 18)" width="28" />
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
    </div>
  );
}

function Group4() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="flex items-center justify-center"
    >
      <Group3 />
    </motion.div>
  );
}

interface HeroSectionProps {
  onGetInTouchClick: () => void;
}

export default function HeroSection({ onGetInTouchClick }: HeroSectionProps) {
  return (
    <div 
      className="w-full min-h-[1024px] flex flex-col items-center justify-center px-8 py-24" 
      style={{ 
        backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1440 1024\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(-2.8597e-16 74.2 -104.34 0.0000024288 720 -0.000016759)\\'><stop stop-color=\\'rgba(192,32,113,1)\\' offset=\\'0.40385\\'/><stop stop-color=\\'rgba(199,59,130,1)\\' offset=\\'0.45673\\'/><stop stop-color=\\'rgba(206,86,146,1)\\' offset=\\'0.50962\\'/><stop stop-color=\\'rgba(220,139,180,1)\\' offset=\\'0.61538\\'/><stop stop-color=\\'rgba(233,193,213,1)\\' offset=\\'0.72115\\'/><stop stop-color=\\'rgba(247,246,246,1)\\' offset=\\'0.82692\\'/></radialGradient></defs></svg>')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="max-w-[1440px] w-full flex flex-col items-start gap-8">
        <div className="flex flex-col items-start">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-[normal] text-[#101010] text-[40px]"
          >
            Looking for a website that
          </motion.p>
          <Frame54 />
        </div>
        
        <div className="flex gap-[24px] items-center">
          <Frame56 onClick={onGetInTouchClick} />
          <Group4 />
        </div>
      </div>
      
      <BusinessTypesTicker />
    </div>
  );
}
