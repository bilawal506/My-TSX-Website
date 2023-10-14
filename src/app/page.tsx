import Card from "./cards"
import React from 'react';
import Image from "next/image";
import Footer from "./footer";
import Link from "next/link";


export const Navbar: React.FC = () => {
  return (
    <nav className={`navbar`}>
        <Image src="/logo.png" width={240} height={111} alt="Company Logo" />  
      <ul className="menu">
        <li className="NavLinks" style={{fontSize:25}}><Link href="http://localhost:3000/">Home</Link></li>
        <li className="NavLinks" style={{fontSize:25}}><Link href="/about">About Us</Link></li>
        <li className="NavLinks" style={{fontSize:25}}><Link href="/faqs">FAQs</Link></li>
        <li className="NavLinks" style={{ marginRight: 800,fontSize:25}}><Link href="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );

};

export default function Home() {
  return (<><title>Home | My Website</title><Navbar /><br /><div className="heading"><h1 style={{ 'textAlign':'center', 'color':'white','paddingTop':'50px' }} className="text-4xl font-bold text-gray-800">This one of my assignment website !</h1></div><br /><Card/><Footer/></>)
}
