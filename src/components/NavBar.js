import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      {/* Underline animation depending on which route is active */}
      <span
        className={`h-[2px] inline-block bg-red 
      absolute left-0 -bottom-1
      group-hover:w-full transition-[width] ease duration-300
      ${router.asPath === href ? "w-full" : "w-0"}
      `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <div className="">
      <nav className="border-b border-black/10">

      <div className="flex py-5 items-center justify-between px-5">
        
        <div className="flex justify-center items-center">
          <Logo />
        </div>

        {/* Menu + Routes */}
        <ul className="flex items-center justify-center flex-wrap space-x-8 relative">
          <li><CustomLink href="/" title="HOME"/></li>
          <li><CustomLink href="/about" title="ABOUT" /></li>
          <li><CustomLink href="/projects" title="PROJECTS"/></li>
            {/* <CustomLink href="/articles" title="ARTICLES" /> */}
          <li><CustomLink href="/contact" title="CONTACT" /></li>
          <li>Settings</li>
        </ul>

        {/* Darkmode/Lightmode Toggle*/}
        {/* <div className ="mx-4">Dark/Light</div> */}
      </div>
      </nav>
    </div>
  );
};

export default NavBar;
