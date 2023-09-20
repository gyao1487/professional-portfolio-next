import Link from "next/link";
import React from "react";
import { GithubIcon, LinkedInIcon } from "./Icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark px-12 py-8 flex items-center justify-between">
      {/* Footer text */}
      <div>2022 - 2023 &copy; Grace Yao. All rights reserved.</div>

      {/* Socials Icons */}
      <div className="flex">
        <motion.a
          href="https://www.linkedin.com/in/grace-yao-51304b139/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className=" w-9 mx-4"
        >
          <LinkedInIcon />
        </motion.a>

        <motion.a
          href="https://github.com/gyao1487"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-9 ml-4"
        >
          <GithubIcon />
        </motion.a>

      </div>
    </footer>
  );
};

export default Footer;
