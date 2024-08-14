import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

// Define the social array outside the component
const social = [
  { icon: <FaGithub />, path: "https://github.com/" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/" },
  { icon: <FaYoutube />, path: "https://youtube.com/" },
  { icon: <FaTwitter />, path: "https://twitter.com/" },
];

// Socials component
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {social.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
