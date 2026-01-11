import SkillCard from "./SkillCard";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
const Skills = () => {
  const skills = [
    { logo: "/skills/c.svg", name: "C++" },
    { logo: "/skills/html.svg", name: "HTML" },
    { logo: "/skills/css.svg", name: "CSS" },
    { logo: "/skills/javascript.svg", name: "JavaScript" },
    { logo: "/skills/react.svg", name: "React" },
    { logo: "/skills/typescript.svg", name: "TypeScript" },
    { logo: "/skills/git.svg", name: "Git" },
    { logo: "/skills/tailwindcss.svg", name: "Tailwind CSS" },
    { logo: "/skills/vite.svg", name: "Vite" },
  ];

  return (
    <section id="skills" className="h-full flex flex-col gap-16 ">
      {/* Section Heading  */}
      <SectionHeading headingName="Skills" />
      {/* Section Content  */}
      <div className="flex gap-4 border-2 px-10 py-20 justify-center overflow-hidden rounded-md ">
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 15, // ⬅ smoother
              ease: "linear",
            }}
          >
            {[...skills, ...skills].map((item, i) => (
              <SkillCard key={i} logo={item.logo} name={item.name} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
