import { useState, useRef } from 'react';
import { Toaster } from "./components/ui/sonner";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  const contactRef = useRef<HTMLDivElement>(null);
  const [selectedService, setSelectedService] = useState(0);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="bg-[#f7f6f6] w-full overflow-hidden">
      <div className="flex flex-col">
        <HeroSection onGetInTouchClick={scrollToContact} />
        
        <ServicesSection 
          selectedService={selectedService} 
          onServiceClick={setSelectedService} 
        />
        
        <ProjectsSection />
        
        <ContactSection contactRef={contactRef} />
      </div>
      
      <Toaster />
    </div>
  );
}
