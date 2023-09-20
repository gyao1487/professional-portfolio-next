import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {FaAngleRight} from "react-icons/fa";

const MotionLink = motion(Link);

// Logo - changes color when hover, links to home page
const ContactLink = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <MotionLink
      href="mailto:gee.yao@gmail.com" 
      target={"_blank"}
      className="flex items-center text-dark p-2.5 px-6
      text-lg "
      whileHover={{ 
            color: "#bb2647",
            transition: {duration: 0.3}
        }}
      >
        Email Me! 

        <FaAngleRight className={'w-6 ml-1'}/>
      </MotionLink>
      
   
    </div>
  );
};

export default ContactLink;
