import Link from "next/link";
import React from "react";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <header className="w-full px-12 py-8 flex items-center justify-between">
      <Logo />
      <nav>
        <Link href="/">HOME</Link> 
        {/* HOME link could also go on logo  */}
        <Link href="/about">ABOUT</Link>
        <Link href="/projects">PROJECTS</Link>
        <Link href="/blog">ARTICLES</Link>
        <Link href="/contact">CONTACT</Link>

        {/* Can add settings for color darkmode and motion too  */}
      </nav>
    </header>
  );
};

export default NavBar;
