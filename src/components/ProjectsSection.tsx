import { useState } from "react";
import { motion } from "motion/react";
import ProjectLightbox from "./ProjectLightbox";
import murban1 from "@assets/projects/murban.webp";
import murban2 from "@assets/projects/murban.webp";
import mEdTeam from "@assets/projects/mEd Team Section.webp";
import mEdMathGames from "@assets/projects/mEd Math Games.webp";
import mEdMathPower from "@assets/projects/mEd Math Power.webp";
import kpgt1 from "@assets/projects/KPGT.webp";
import kpgt2 from "@assets/projects/Tailored Male.webp";
import simmons1 from "@assets/projects/Yvette Simmons Homepage.webp";
import simmons2 from "@assets/projects/Yvette Simmons.webp";
import susanRodgers from "@assets/projects/Susan Rodgers.webp";
import STSS1 from "@assets/projects/STSS Industry Page.webp";
import STSS2 from "@assets/projects/STSS Home.webp";
import togbok from "@assets/projects/Togbok.webp";
import sbc4eHub from "@assets/projects/SBC4e Hub.webp";
import dorothyCatapano from "@assets/projects/Dorothy Catapano.webp";
import patientPassport from "@assets/projects/Patient Passport.webp";

const projectData = [
  {
    title: "mEducation Alliance Team Page",
    description:
      "A global education nonprofit’s team directory, built for accessibility and ease of updates.",
    images: [mEdTeam],
    alt: "Screenshot of a nonprofit website team section",
    link: "https://meducationalliance.org/",
  },
  {
    title: "Patient Passport",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [patientPassport],
    alt: "Screenshot of a parent organization website",
    link: "https://patient-passport.uxuidesignlab.com/",
  },
  {
    title: "mEducation Alliance",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [mEdMathPower],
    alt: "Screenshot of a parent organization website",
    link: "https://stssinc.com/janitorial-housekeeping-services/",
  },
  {
    title: "Susan Rodgers Design",
    description:
      "A vibrant redesign for a Texas-based organization helping parents connect and advocate.",
    images: [kpgt1, kpgt2],
    alt: "Screenshot of a parent organization website",
  },
  {
    title: "The Tailored Male of East Setauket",
    description: "A vibrant redesign for a local barbershop.",
    images: [susanRodgers],
    alt: "Screenshot of a barbershop website",
  },
  {
    title: "Yvette Simmons",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [simmons1, simmons2],
    alt: "Screenshot of a parent organization website",
    link: "https://salesstrategiesthatwork.com/",
  },
  {
    title: "STSS",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [STSS1],
    alt: "Screenshot of a parent organization website",
    link: "https://stssinc.com/janitorial-housekeeping-services/",
  },
  {
    title: "Matt Urban Marketing and SEO",
    description: "Something about plugins",
    images: [murban1, murban2],
    alt: "Screenshot of a marketing agency website",
  },
  {
    title: "STSS",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [STSS2],
    alt: "Screenshot of a parent organization website",
    link: "https://stssinc.com/janitorial-housekeeping-services/",
  },

  {
    title: "Togbok",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [togbok],
    alt: "Screenshot of a parent organization website",
  },
  {
    title: "SBC4E Hub",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [sbc4eHub],
    alt: "Screenshot of a parent organization website",
  },
  {
    title: "mEducation Alliance",
    description:
      "A vibrant website that advertises the impactful work of author Yvette Simmons.",
    images: [mEdMathGames],
    alt: "Screenshot of a parent organization website",
    link: "https://stssinc.com/janitorial-housekeeping-services/",
  },
  {
    title: "Dorothy Catapano",
    description:
      "A global education nonprofit’s team directory, built for accessibility and ease of updates.",
    images: [dorothyCatapano],
    alt: "Screenshot of a nonprofit website team section",
  },
];

function SectionHeader() {
  return (
    <div className="flex items-start gap-[19px] mb-16">
      <div className="content-stretch flex flex-col gap-px items-end w-56">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[21px] leading-[normal] text-[#101010] text-[16px] text-right w-full"
        >
          WHAT WE'VE DONE
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#101010] h-[19px] w-full origin-left"
        />
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="leading-[normal] text-[#101010] text-[48px]"
      >
        PROJECTS
      </motion.h2>
    </div>
  );
}

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="z-10 w-full py-24 bg-transparent">
      <SectionHeader />

      <div style={{ display: "grid", gridTemplateColumns: "224px 1fr" }}>
        <div></div>

        <div className="flex flex-wrap gap-6">
          {projectData.map((project, index) => (
            <motion.div
              key={index}
              className="border-red-100 relative w-80 h-120 cursor-pointer overflow-hidden rounded-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              onClick={() => {
                setSelectedProject(index);
                setCurrentImage(0);
              }}
            >
              <motion.img
                src={project.images[0]}
                alt={project.alt}
                className="object-cover w-full h-full"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject !== null && (
        <ProjectLightbox
          project={projectData[selectedProject]}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
          currentImage={currentImage}
          setCurrentImage={setCurrentImage}
        />
      )}
    </div>
  );
}
