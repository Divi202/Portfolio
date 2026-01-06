import { cn } from "@/lib/utils";
import SectionHeading from "./section-heading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/text-area";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section id="contact" className="h-full flex flex-col ">
      {/* Section Heading  */}
      <SectionHeading headingName="Contact Me" />
      {/* Section Content  */}
      <div className="shadow-input mx-auto w-full max-w-2xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <p className="mt-2 max-w-xl text-md font-semibold text-neutral-600 dark:text-neutral-300">
          Let's Connect!
        </p>
        <p className="mt-2 max-w-xl text-sm text-neutral-600 dark:text-neutral-300">
          Whether you have a question, a project idea, or just want to say
          hello, feel free to reach out. I'm always open to discussing new
          opportunities and collaborations.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Tyler" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              rows={5}
              maxLength={500}
              placeholder="Your message here..."
            />
          </LabelInputContainer>

          <div className="">
            <HoverBorderGradient
              containerClassName=" group/btn relative h-11 w-full rounded-full"
              as="button"
              className="dark:bg-black dark:text-white  bg-white text-black flex items-center space-x-2 px-10 text-sm font-semibold"
            >
              <span>Send Message</span>
            </HoverBorderGradient>
          </div>

          {/* <div className="my-8 h-px  w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" /> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
