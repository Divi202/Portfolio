"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function Button(props) {
  const handleBtnClick = () => {
    if (props.name == "Contact") {
      props.handledContactClick();
    }
    if (props.name == "Resume") {
      // directly defined here as used in multiple files
      window.open("src/assets/resume/Divya_Resume.pdf", "_blank");
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
