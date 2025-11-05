import { motion } from "motion/react";
import murban from "../assets/projects/murban.webp";
import mEdTeam from "../assets/projects/mEd Team Section.webp";
import kpgt from "../assets/projects/KPGT.webp";

const projectData = [
  {
    title: "Matt Urban Marketing",
    src: murban,
    alt: "Screenshot of a local marketing agency website",
  },
  {
    title: "mEducation Alliance Team Page",
    src: mEdTeam,
    alt: "Screenshot of a global education development nonprofit team page",
  },
  {
    title: "Katy Parents of Gifted & Talented Students",
    src: kpgt,
    alt: "Screenshot of a Texas-based sudent parent orgranization website",
  },
  {
    title: "Matt Urban Marketing",
    src: murban,
    alt: "Matt Urban Marketing Project Screenshot",
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
          WHAT WE'VE DONE FOR OTHERS
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
  return (
    <div className="z-10 w-full py-24 bg-transparent">
      <SectionHeader />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "224px 1fr",
        }}
      >
        <div></div>
        <div className="flex flex-wrap gap-4">
          {/* <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[530px] w-[270px] relative overflow-hidden"
          > */}
          {projectData.map((projects, index) => (
            <div
              key={index}
              className="relative hover:z-40 w-[360px] max-w-none"
            >
              <img
                alt={projects.alt}
                className="transition-all  hover:scale-150 object-cover size-full"
                src={projects.src}
              />
            </div>
          ))}
          {/* </motion.div> */}
        </div>
      </div>
    </div>
  );
}
