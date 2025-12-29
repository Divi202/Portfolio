import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section id="skills" className="h-full pb-32 flex flex-col gap-16">
      {/* Section Heading  */}
      <h2 className="text-2xl font-semibold text-center text-rose-400">
        Skills
      </h2>
      {/* Section Content  */}
      <div className="flex gap-4 border-2 px-10 py-20 flex-wrap">
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
