import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Relevant Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[500px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Trainee Software Engineer"
            subTitle="Software Lifecycle Consultants"
            result=""
            des=""
          />
          <ResumeCard
            title="Editor"
            subTitle="MoraSpirit(2023 - Present)"
            result=""
            des=""
          />
          <ResumeCard
            title="Committee Member"
            subTitle=" Information Technology Society, Faculty of IT, University of Moratuwa(2022 - 2023)"
            result=""
            des=""
          />
          
        </div>
      </div>
      
        
    </motion.div>
  );
};

export default Experience;
