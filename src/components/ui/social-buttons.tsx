"use client";
import { HoverBorderGradient } from "./hover-border-gradient";

export function SocialButton(props) {
  return (
    <div className="">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm font-semibold"
      >
        <span>{props.iconName}</span>
      </HoverBorderGradient>
    </div>
  );
}
