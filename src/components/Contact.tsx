import { cn } from "@/lib/utils";
import SectionHeading from "./section-heading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/text-area";
const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <section id="contact" className="h-full pt-24 flex flex-col ">
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

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Send Message
            <BottomGradient />
          </button>

          {/* <div className="my-8 h-px  w-full bg-linear-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" /> */}
        </form>
      </div>
    </section>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-linear-to-r from-transparent via-rose-400 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-linear-to-r from-transparent via-rose-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

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
