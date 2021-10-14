import React from 'react'
import Link from "next/link"
import { MdMenu } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="bg-purple text-white px-4 md:px-12 lg:px-16 py-4 flex items-center justify-between">
            <Link href="/">
                <a className="flex items-center">
                    <div className="text-xl"><p>NEWSLY</p></div>
                </a>
            </Link>
            <button className="block focus:outline-none">
                <MdMenu className="h-8 w-8" />
            </button>
        </nav>
    )
}

export default Navbar
