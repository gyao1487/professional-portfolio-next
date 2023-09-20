import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

// Logo - changes color when hover, links to home page
const ResumeBtn = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <MotionLink
      href="/Resume.pdf" 
      target={"_blank"}
      className="flex items-center bg-black text-light p-2.5 px-6
      text-lg font-semibold"
      whileHover={{ 
            backgroundColor: "#bb2647",
            transition: {duration: 0.3}
        }}
      download={true}
      >
       Download C/V 
      </MotionLink>
    </div>
  );
};

export default ResumeBtn;
