import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

import { fadeIn, textVariant } from "../utils/motion";

const projectsDone = [
  {
    title: "Estimator",
    description:
      "Web Application used from project scoping to resource allocation, to generate accurate estimates swiftly and effectively.",
    tech: " NodeJS, ReactJS, MySQl",
  },
  {
    title: "Sarallagani",
    description:
      "Versatile stock management system designed for investors and traders. It offers real-time stock data tracking, transaction management, and performance analysis for informed investment decisions.",
    tech: "NodeJS, ReactJS, Redux, Contabu, MySQL",
  },
  {
    title: "Reporting Tool",
    description:
      "Reporting tool which provides deployable reporting solution to enterprise clients with support for advanced functionalities like cross-tabular report, large excel export and dynamic query generation.",
    tech: "NodeJS, AngularJS, LokiJS, MySQL",
  },
  {
    title: "GetFit",
    description:
      "A website that lets users create and join challenges for different activities, view leaderboards, get notifications and compete with other members in different challenges",
    tech: "NodeJS, AngularJS, Firebase, MongoDB",
  },
  {
    title: "SEO Panel",
    description:
      "A comprehensive solution designed to elevate your website's visibility and drive organic traffic.",
    tech: "NextJS, Postgres",
  },
  {
    title: "The Agile Coach",
    description:
      "An impactful learning content website that provides resources and guided mentorship program to help learners succeed in agile role",
    tech: "VueJS",
  },
];

const renderProjects = () => {
  return projectsDone.map((project, index) => (
    <div
      key={index}
      className="bg-white max-w-xs p-8 rounded shadow"
      style={{
        borderRadius: "20px",
        backgroundColor: "#C5C5C5",
        position: "relative",
      }}
    >
      <h1 className="text-xl font-bold text-black mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-6 text-justify">{project.description}</p>
      <p
        className="text-xs font-bold text-black mb-2"
        style={{ position: "absolute", bottom: "10px", left: "30px" }}
      >
        {project.tech}
      </p>
    </div>
  ));
};

const Projects = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="mt-8 flex flex-wrap gap-8">{renderProjects()}</div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
