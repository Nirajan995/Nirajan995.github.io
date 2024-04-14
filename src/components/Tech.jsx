import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import Education from "./Education";
const Tech = () => {
  const technologiesadded = [
    { name: "REACTJS", percentage: 85 },
    { name: "NODEJS", percentage: 80 },
    { name: "NEXTJS", percentage: 80 },
    { name: "MONGODB", percentage: 75 },
    { name: "MYSQL", percentage: 75 },
    { name: "AWS", percentage: 60 },
  ];

  return (
    <>
      <div
        className="bg-experience bg-cover bg-center bg-no-repeat 
            rounded-tl-[150px] rounded-br-[150px]"
      >
        <div
          className="bg-experienceLight bg-cover bg-center 
            bg-no-repeat rounded-tl-[150px] rounded-br-[130px]"
        >
          <Education />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
      {/* <div className="bg-black bg-opacity-10 p-4 rounded shadow-lg mt-6">
        <h3 className={styles.sectionHeadTextLight}>Technology Proficiency</h3>

        <ul>
          {technologiesadded.map((technology) => (
            <li key={technology.name} className="mb-2 py-2 px-4 rounded-lg">
              <div className="flex justify-between">
                <span>{technology.name}</span>
                <span className="font-semibold">{technology.percentage}%</span>
              </div>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-teal-200">
                  <div
                    style={{ width: `${technology.percentage}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500"
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
};

export default SectionWrapper(Tech, "");
