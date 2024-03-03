import { BallCanvas } from "./canvas";
import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";

import Tilt from "react-tilt";
import { fadeIn } from "../utils/motion";

// const TechCard = () => {
//   return (
//     <div className="flex flex-row flex-wrap justify-center gap-10">
//       {" "}
//       {technologies.map(({ name, icon }, index) => (
//         <div
//           className="w-28 h-28 flex flex-col items-center"
//           key={`${index}_${name}`}
//         >
//           <BallCanvas icon={icon} /> <p> {name} </p>{" "}
//         </div>
//       ))}{" "}
//     </div>
//   );
// };

const TechCard = () => {
  return (
    <>
      {" "}
      {technologies.map(({ name, icon }, index) => (
        <Tilt className="xs:w-[200px] w-full" key={index}>
          <motion.div
            variants={fadeIn("right", "spring", index * 0.1, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
          >
            <div
              options={{
                max: 45,
                scale: 1,
                speed: 100,
              }}
              className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[200px] flex justify-evenly items-center flex-col"
            >
              <img
                src={icon}
                alt="web-development"
                className="w-16 h-16 object-contain"
              />
              <h3 className="text-white text-[20px] font-bold text-center">
                {" "}
                {name}{" "}
              </h3>{" "}
            </div>{" "}
          </motion.div>{" "}
        </Tilt>
      ))}{" "}
    </>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {" "}
          What technologies I have learnt{" "}
        </p>{" "}
        <h2 className={styles.sectionHeadText}> Technologies </h2>{" "}
      </motion.div>{" "}
      <div className="mt-20 flex flex-col">
        <div className="flex flex-row flex-wrap justify-center gap-10">
          <TechCard />
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default SectionWrapper(Tech, "tech");
