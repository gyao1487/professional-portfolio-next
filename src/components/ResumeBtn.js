import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

// Logo - changes color when hover, links to home page
const ResumeBtn = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <MotionLink
      href="https://docs.google.com/document/d/1_LbFeeKWxADQC8ZgUGIkvVJxlgeeZggP/edit?usp=sharing&ouid=112246240175994219292&rtpof=true&sd=true" 
      target={"_blank"}
      className="flex items-center bg-black text-light p-2.5 px-6
      text-lg font-semibold"
      whileHover={{ 
            backgroundColor: "#bb2647",
            transition: {duration: 0.3}
        }}
      >
        Resume
      </MotionLink>
    </div>
  );
};

export default ResumeBtn;
