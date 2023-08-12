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
    <header className="w-full px-12 py-8 flex items-center ">
      <div className="flex items-center justify-between">
        <div className="pr-12">
          <Logo />
        </div>
        {/* Navbar with routes */}
        <nav>
          <CustomLink href="/" title="HOME" className="mr-4" />
          <CustomLink href="/about" title="ABOUT" className="mx-4" />
          <CustomLink href="/projects" title="PROJECTS" className="mx-4" />
          <CustomLink href="/articles" title="ARTICLES" className="mx-4" />
          <CustomLink href="/contact" title="CONTACT" className="ml-4" />
        </nav>
        <div className ="">Dark/Lightmode</div>
      </div>

      

    </header>
  );
};

export default NavBar;
