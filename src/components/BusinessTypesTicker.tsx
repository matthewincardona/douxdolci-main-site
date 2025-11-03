export default function BusinessTypesTicker() {
  const businessTypes = [
    "Online Portfolios / Artists / Photographers",
    "Independent Contractors",
    "Startups",
    "Small Businesses",
    "Events & Venues",
    "Nonprofits",
    "Contractors & Home Services"
  ];

  return (
    <div className="w-full overflow-hidden py-6 bg-transparent">
      <div className="flex gap-[24px] items-center animate-scroll whitespace-nowrap leading-[normal] text-[#101010] text-[20px]">
        {[...businessTypes, ...businessTypes].map((type, i) => (
          <p key={i} className="shrink-0 text-center">
            {type}
          </p>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
