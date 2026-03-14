import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import onPointLogo from '../public/onPointMedia.png';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6 px-12 md:px-24">
      <div className="flex items-center">
        {/* <Link href="/" className="text-2xl font-bold leading-tight tracking-tight">
          Social<br />
          <span className="relative">
            Shepherd
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></span>
          </span>
         
        </Link> */}
         <Image
          src={onPointLogo}
          alt="onPoint Media Logo"
          width={120}
          height={120}
          className="w-30 h-20"
          />
      </div>

      <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
        <Link href="/services" className="hover:text-gray-600 transition-colors">Our Services</Link>
        <Link href="/case-studies" className="hover:text-gray-600 transition-colors">Case Studies</Link>
        <Link href="/about" className="hover:text-gray-600 transition-colors">About Us</Link>
        <Link href="/blog" className="hover:text-gray-600 transition-colors">Blog</Link>
        <Link href="/insights" className="hover:text-gray-600 transition-colors">Insights</Link>
        <Link href="/careers" className="hover:text-gray-600 transition-colors">Careers</Link>
      </div>

      <div className="hidden lg:flex items-center space-x-3">
        <Link href="/contact" className="h-[46px] rounded-full bg-[#6fe0cf] hover:bg-[#5bcbb9] transition-colors flex items-center justify-center px-6 text-sm font-semibold text-gray-900">
          Get In Touch
        </Link>
        <Link href="/contact" className="h-[46px] w-[46px] rounded-full bg-[#6fe0cf] hover:bg-[#5bcbb9] transition-colors flex items-center justify-center text-gray-900">
          <ArrowRight size={20} strokeWidth={2.5} />
        </Link>
      </div>
      
      {/* Mobile menu button could go here */}
      <button className="lg:hidden p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  );
}