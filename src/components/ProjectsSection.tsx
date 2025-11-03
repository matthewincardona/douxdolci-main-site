import { motion } from 'motion/react';
import img2415791314659056195646359C751 from "figma:asset/116e844616e305cf89367ef0443c43feef1e290a.png";
import imgImage7 from "figma:asset/7373497be242ca651056da6c7ff54af242d8d1cd.png";
import imgImage10 from "figma:asset/55b6ab52cf6f7090679e77c06cb74e6f3141ff96.png";
import imgImage9 from "figma:asset/9f806dbb4ffac4c3c4f585bb94f58aeec903252f.png";

function SectionHeader() {
  return (
    <div className="flex items-start gap-[19px] mb-16">
      <div className="content-stretch flex flex-col gap-px items-end w-[224px]">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[21px] leading-[normal] text-[#101010] text-[16px] text-right w-full"
        >
          EXPLORE A LITTLE
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
        PROJECTS
      </motion.p>
    </div>
  );
}

function ProjectImage1() {
  return (
    <div className="relative w-[260px] h-[826px]">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[101.45%] left-[-1.54%] max-w-none top-[-0.36%] w-[103.86%]" src={img2415791314659056195646359C751} />
      </div>
      <div className="absolute top-[3px] left-[9px] bg-white h-[7px] w-[14px]" />
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <div className="w-full py-24 px-8 bg-transparent">
      <div className="max-w-[1440px] mx-auto">
        <SectionHeader />
        
        <div className="flex gap-[23px] items-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-[530px] w-[270px] relative overflow-hidden"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage7} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[900px] w-[270px] relative overflow-hidden"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-[599px] w-[270px] relative overflow-hidden"
          >
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ProjectImage1 />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
