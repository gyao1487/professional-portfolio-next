import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const CustomLink = ({ href, title, className = "" }) => {
  return (
    <Link href={href} className={`${className} relative`} >
      {title}

      <span className="h-1 inline-block w-full bg-red absolute left-0 -bottom-1 ">
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  return (
    <header className="w-full px-12 py-8 flex items-center justify-between">
      <Logo />

      <nav>
        <CustomLink href="/" title="HOME" className="mr-4" />
        <CustomLink href="/about" title="ABOUT" className="mx-4" />
        <CustomLink href="/projects" title="PROJECTS" className="mx-4" />
        <CustomLink href="/articles" title="ARTICLES" className="mx-4" />
        <CustomLink href="/contact" title="CONTACT" className="ml-4" />
      </nav>
    </header>
  );
};

export default NavBar;
