import Link from 'next/link'
import React from 'react'
import {GithubIcon, LinkedInIcon} from "./Icons"

const Footer = () => {
return (
    <div
    className ="w-full px-12 py-8 flex items-center justify-between"
    >
<div>
    This is my footer! Woo!
</div>

     <nav className ="flex">
            <a href="https://www.linkedin.com/in/grace-yao-51304b139/" target={"_blank"}>
              <LinkedInIcon />
            </a>
            <a href="https://github.com/gyao1487" target={"_blank"}>
                <GithubIcon />
            </a>
        </nav>

    </div>
)
}

export default Footer