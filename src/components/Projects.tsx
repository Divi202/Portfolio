import Carousel from "./ui/carousel";
import SectionHeading from "./section-heading";
const Projects = () => {
  const slideData = [
    {
      title: "Sickco - Heathcare Assitant AI",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores soluta porro et est tempora beatae fuga aliquid quo assumenda.",
      technologies: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "OpenAI Model",
        "Next.js",
        "Vercel",
      ],
      githubLink: "",
      liveDemoLink: "",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sickco Pre-Launch Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores soluta porro et est tempora beatae fuga aliquid quo assumenda.",
      technologies: ["React", "TailwindCSS", "JavaScript", "Next.js", "Vercel"],
      githubLink: "",
      liveDemoLink: "",
      src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Divi AI Landing Page",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores soluta porro et est tempora beatae fuga aliquid quo assumenda.",
      technologies: ["React", "TailwindCSS", "JavaScript", "Next.js", "Vercel"],
      githubLink: "",
      liveDemoLink: "",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    // {
    //   title: "New Project",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores soluta porro et est tempora beatae fuga aliquid quo assumenda.",
    //   technologies: ["React", "TailwindCSS", "JavaScript", "Next.js", "Vercel"],
    //   button: "Explore Component",
    //   src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
  ];
  return (
    <section id="projects" className="h-full py-24 flex flex-col ">
      {/* Section Heading  */}
      <SectionHeading headingName="Projects" />
      {/* Section Content  */}
      <div className="relative overflow-hidden w-full h-full py-20">
        <Carousel slides={slideData} />
      </div>
    </section>
  );
};

export default Projects;
