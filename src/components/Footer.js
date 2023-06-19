import Link from 'next/link'
import React from 'react'

const Footer = () => {
return (
    <div
    className ="w-full px-12 py-8 flex items-center justify-between"
    >
        <nav>
            <Link href="/github" target={"_blank"}>G</Link>
            <Link href="/github" target={"_blank"}>G</Link>
            <Link href="/github" target={"_blank"}>G</Link>
            <Link href="/github" target={"_blank"}>G</Link>
            <Link href="/github" target={"_blank"}>G</Link>
        </nav>
    </div>
)
}

export default Footer