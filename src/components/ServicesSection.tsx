import { motion } from 'motion/react';
import svgPaths from "../imports/svg-y6urbruuc2";

function SectionHeader() {
  return (
    <div className="flex items-start gap-[19px] mb-12">
      <div className="content-stretch flex flex-col gap-px items-end w-[224px]">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[21px] leading-[normal] text-[#101010] text-[16px] text-right w-full"
        >
          HOW WE HELP YOU
        </motion.p>
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#101010] h-[19px] w-full origin-left" 
        />
      </div>
      <motion.p 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="leading-[normal] text-[#101010] text-[48px]"
      >
        SERVICES
      </motion.p>
    </div>
  );
}

function QRIcon({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative shrink-0 size-[91px] cursor-pointer transition-transform hover:scale-110"
    >
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 91 91">
        <g>
          <path d={svgPaths.pfd86000} fill={isSelected ? "var(--fill-0, #C02071)" : "transparent"} stroke="var(--stroke-0, #C02071)" />
          <g clipPath="url(#clip0_qr)">
            <path d={svgPaths.p16b97d00} fill={isSelected ? "var(--fill-0, white)" : "var(--fill-0, #C02071)"} />
            <path d={svgPaths.p2ea8c280} fill={isSelected ? "var(--fill-0, white)" : "var(--fill-0, #C02071)"} />
            <path d={svgPaths.p7670400} fill={isSelected ? "var(--fill-0, white)" : "var(--fill-0, #C02071)"} />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_qr">
            <rect fill="white" height="64" transform="translate(14 11)" width="64" />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
}

function ServiceIcons({ selectedService, onServiceClick }: { selectedService: number; onServiceClick: (index: number) => void }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="grid grid-cols-2 gap-[31px] h-[299px] w-[213px]"
    >
      <QRIcon isSelected={selectedService === 0} onClick={() => onServiceClick(0)} />
      <QRIcon isSelected={selectedService === 1} onClick={() => onServiceClick(1)} />
      <QRIcon isSelected={selectedService === 2} onClick={() => onServiceClick(2)} />
      <QRIcon isSelected={selectedService === 3} onClick={() => onServiceClick(3)} />
      <div></div>
      <QRIcon isSelected={selectedService === 4} onClick={() => onServiceClick(4)} />
    </motion.div>
  );
}

const serviceData = [
  {
    title: "(Web Design)",
    description: "Making you a beautiful site"
  },
  {
    title: "(SEO Optimization)",
    description: "Boost your search rankings"
  },
  {
    title: "(E-Commerce)",
    description: "Sell products online seamlessly"
  },
  {
    title: "(Branding)",
    description: "Create a memorable identity"
  },
  {
    title: "(Maintenance)",
    description: "Keep your site running smoothly"
  }
];

function ServiceDetails({ selectedService }: { selectedService: number }) {
  const service = serviceData[selectedService];
  
  return (
    <div className="flex flex-col gap-[24px] flex-1 max-w-[532px]">
      <motion.div 
        key={selectedService}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="content-stretch flex flex-col gap-[14px] items-start leading-[normal]"
      >
        <p className="text-[#c02071] text-[40px]">{service.title}</p>
        <p className="text-[#101010] text-[24px]">{service.description}</p>
      </motion.div>
      
      <div className="flex flex-col gap-[12px]">
        {[1, 2].map((num) => (
          <div key={num} className="flex gap-[24px] items-center">
            <div className="flex items-center justify-center w-[27px] h-[27px]">
              <div className="rotate-90">
                <svg className="block w-[27px] h-[27px]" fill="none" preserveAspectRatio="none" viewBox="0 0 24 21">
                  <path d={svgPaths.p2c912600} fill="var(--fill-0, #C02071)" />
                </svg>
              </div>
            </div>
            <ol className="block leading-[0] list-decimal text-[#101010] text-[24px]" start={num}>
              <li className="ms-[36px]">
                <span className="leading-[normal]">Take off your hat</span>
              </li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

interface ServicesSectionProps {
  selectedService: number;
  onServiceClick: (index: number) => void;
}

export default function ServicesSection({ selectedService, onServiceClick }: ServicesSectionProps) {
  return (
    <div className="w-full py-24 px-8 bg-transparent">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader />
        
        <p className="leading-[normal] text-[16px] text-black mb-12">
          We work with local small buisnesses...We work with local small buisnesses...We work with local small buisnesses...
        </p>
        
        <div className="flex items-start justify-between gap-12">
          <ServiceIcons selectedService={selectedService} onServiceClick={onServiceClick} />
          <ServiceDetails selectedService={selectedService} />
        </div>
      </div>
    </div>
  );
}
