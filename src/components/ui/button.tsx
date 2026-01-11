"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import resume from "../../assets/resume/Divya_Resume.pdf";
interface ButtonProps {
  name: string;
  link?: string;
  handledContactClick?: () => void;
}
export function Button(props: ButtonProps) {
  const handleBtnClick = () => {
    if (props.name == "Contact") {
      props.handledContactClick?.();
    } else if (props.name == "Resume") {
      // directly defined here as used in multiple files
      window.open(`${resume}`, "_blank");
    } else if (props.link) {
      window.open(props.link, "_blank");
    }
  };
  return (
    <div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm font-semibold"
        onClick={handleBtnClick}
      >
        <span>{props.name}</span>
      </HoverBorderGradient>
    </div>
  );
}
