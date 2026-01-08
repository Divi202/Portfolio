import Carousel from "./ui/carousel";
import SectionHeading from "./section-heading";
const Projects = () => {
  const slideData = [
    {
      title: "Sickco - Heathcare Assitant AI",
      description:
        "A web-based AI healthcare assistant that uses an LLM to provide symptom-related guidance and health insights, built with a modern full-stack stack.",
      technologies: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "OpenAI Model",
        "Next.js",
        "Vercel",
      ],
      githubLink: "https://github.com/Divi202/sickco",
      liveDemoLink: "https://sickco.vercel.app/",
      src: "src/assets/carousal/sickco.png",
      // src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sickco Pre-Launch Landing Page",
      description:
        "A conversion-focused pre-launch landing page built to showcase Sickco’s vision, highlight key features, and collect early access sign-ups.",
      technologies: ["React", "TailwindCSS", "JavaScript", "Next.js", "Vercel"],
      githubLink: "https://github.com/Divi202/sickco_landing_page",
      liveDemoLink: "https://sickcolp.vercel.app/",
      src: "src/assets/carousal/sickco_lp.png",
      // src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Divi AI Landing Page",
      description:
        "A concept landing page for Divi AI, an AI stylist idea designed to communicate the product vision and user journey through a modern, responsive interface.",
      technologies: ["React", "TailwindCSS", "JavaScript", "Next.js", "Vercel"],
      githubLink: "https://github.com/Divi202/divi_ai",
      liveDemoLink: "https://divi-ai-official.vercel.app/",
      src: "src/assets/carousal/divi_ai.png",

      // src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section id="projects" className="h-full flex flex-col ">
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
