import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

// Logo - changes color when hover, links to home page
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-black text-white flex items-center justify-center
        text-xl font-bold"
        whileHover={{ 
            backgroundColor: "#bb2647",
            transition: {duration: 0.3}
        }}
      >
        GY
      </MotionLink>
    </div>
  );
};

export default Logo;
