"use client";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export function Button(props) {
  return (
    <div className="">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-10 text-sm font-semibold"
      >
        <span>{props.name}</span>
      </HoverBorderGradient>
    </div>
  );
}
