"use client";
// import { IconBrandLeetcode } from "@tabler/icons-react";
import { HoverBorderGradient } from "./hover-border-gradient";
// import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function SocialButton() {
  return (
    <div className="">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm font-semibold"
      >
        <span>
          {/* {props.iconName == "Leetcode" ? (
            <IconBrandLeetcode />
          ) : props.iconName == "Github" ? (
            <FaGithub />
          ) : (
            <FaLinkedin />
          )} */}
          {/* <IconBrandLeetcode /> */}
        </span>
      </HoverBorderGradient>
    </div>
  );
}
