import SectionHeading from "./section-heading";
import { Timeline } from "./ui/timeline";

const Experience = () => {
  const data = [
    {
      title: "2025",
      content: (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">QA Tester</h2>
          <p className="text-md text-rose-400">Keywords Studios</p>
          {/* <ul className="list-disc pl-5 mt-2 space-y-2 mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li className="pb-2">
              Worked on AAA game titles ensuring gameplay testing, bug tracking,
              and performance validation across platforms
            </li>{" "}
            <li className="pb-2">
              Collaborated with devs and designers to enhance user experience
            </li>
            <li className="pb-2">Logged 100+ critical bugs using JIRA</li>
            <li>Contributed to day-zero patch readiness</li>
          </ul> */}
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">Master of Computer Applications</h2>
          <p className="text-md text-rose-400">
            Delhi Skill and Entrepreneurship University
          </p>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold">
            Bachelor of Computer Application
          </h2>
          <p className="text-md text-rose-400">
            Guru Gobind Singh Indraprastha University
          </p>
        </div>
      ),
    },
  ];
  return (
    <section id="experience" className="h-full py-24 flex flex-col gap-16">
      {/* Section Heading  */}
      <SectionHeading headingName="Experience & Education" />
      {/* Section Content  */}
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default Experience;
