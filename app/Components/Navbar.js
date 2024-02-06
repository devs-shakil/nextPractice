import React from 'react';
import Link from "next/link"
const Navbar = () => {
    return (
        <div>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/product">Product</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/comments">Comments</Link></li>
                <li><Link href="/blogs">Blogs</Link></li>
            </ul>
        </div>
    );
};

export default Navbar;