import SkillCard from "./SkillCard";
import SectionHeading from "./section-heading";
const Skills = () => {
  return (
    <section id="skills" className="h-full py-24 flex flex-col gap-16">
      {/* Section Heading  */}
      <SectionHeading headingName="Skills" />
      {/* Section Content  */}
      <div className="flex gap-4 border-2 px-10 py-20 flex-wrap justify-center rounded-md">
        <SkillCard logo="src/assets/skills/c.svg" name="C++" />
        <SkillCard logo="src/assets/skills/html.svg" name="HTML" />
        <SkillCard logo="src/assets/skills/css.svg" name="CSS" />
        <SkillCard logo="src/assets/skills/javascript.svg" name="JavaScript" />
        <SkillCard logo="src/assets/skills/react.svg" name="React" />
        <SkillCard logo="src/assets/skills/typescript.svg" name="TypeScript" />
        <SkillCard logo="src/assets/skills/git.svg" name="Git" />
        <SkillCard
          logo="src/assets/skills/tailwindcss.svg"
          name="Tailwind CSS"
        />
        <SkillCard logo="src/assets/skills/vite.svg" name="Vite" />
      </div>
    </section>
  );
};
export default Skills;
