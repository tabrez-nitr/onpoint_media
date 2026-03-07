import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Send, Lock } from 'lucide-react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full relative z-20">
      {/* Pre-footer CTA overlapping section */}
      <div className="relative">
        {/* Background split to overlap the white page main body and black footer */}
        <div className="absolute inset-0 flex flex-col pointer-events-none">
          <div className="h-1/2 bg-white"></div>
          <div className="h-1/2 bg-black"></div>
        </div>
        
        {/* CTA Box */}
        <div className="relative z-10 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto">
          <div className="rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl">
            {/* Left Side */}
            <div className="md:w-1/2 bg-[#6fe0cf] p-12 md:p-16 lg:p-24 flex flex-col justify-center">
              <h2 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold tracking-tight leading-[1.05] mb-10 text-black">
                Don't be <span className="text-white">sheepish</span><br />
                let's talk
              </h2>
              <div className="flex">
                <Link href="/contact" className="group flex items-center gap-0 bg-black text-white rounded-full pl-6 pr-2 py-2 hover:bg-gray-800 transition-colors w-max">
                  <span className="font-semibold text-[15px] mr-4">Let's Chat</span>
                  <div className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 transition-colors">
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Right Side Image */}
            <div className="md:w-1/2 relative min-h-[400px] md:min-h-[auto]">
              <Image
                src="/team-photo.png"
                alt="The Social Shepherd Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-black pt-20 pb-12 px-6 md:px-12 lg:px-24 text-white">
        <div className="max-w-[1400px] mx-auto">
          
          {/* Top Row Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
            
            {/* Newsletter & Socials (takes up 5 cols) */}
            <div className="lg:col-span-4 lg:pr-8 flex flex-col">
              <div className="max-w-xs mb-8">
                <p className="text-[16px] leading-relaxed text-gray-300 font-medium tracking-tight">
                  Stay in touch with the herd and receive up to date insights, strategies and news.
                </p>
              </div>
              
              {/* Newsletter Input */}
              <form className="relative max-w-sm mb-16">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#2a2a2a] text-white rounded-full py-3.5 pl-6 pr-14 focus:outline-none focus:ring-1 focus:ring-white font-medium placeholder-gray-400 placeholder:font-medium text-[15px]"
                />
                <button 
                  type="submit" 
                  className="absolute right-1.5 top-1.5 bottom-1.5 w-[38px] h-[38px] bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </form>

              {/* Logo */}
              <div className="mb-6 inline-block">
                <h2 className="text-[28px] font-bold leading-[0.9] tracking-tight flex items-center">
                  Social<span className="w-8 h-[2px] bg-white ml-1 mt-3"></span>
                </h2>
                <h2 className="text-[28px] font-bold leading-[0.9] tracking-tight">
                  Shepherd
                </h2>
              </div>

              {/* Social Icons */}
              <div className="flex flex-wrap gap-2.5">
                {[FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTiktok, FaSpotify].map((Icon, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="w-[34px] h-[34px] bg-white text-black rounded-full flex items-center justify-center hover:bg-[#6fe0cf] transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="lg:col-span-2 lg:col-start-6 flex flex-col">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-6">Our Services</h4>
              <ul className="space-y-3.5">
                {['Social', 'Paid', 'Creative', 'Influencer'].map((link, i) => (
                  <li key={i}>
                    <Link href={`/services/${link.toLowerCase()}`} className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="lg:col-span-2 flex flex-col">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-6">Company</h4>
              <ul className="space-y-3.5 mb-8">
                {['About Us', 'Newsletter', 'Case Studies', 'Contact'].map((link, i) => (
                  <li key={i}>
                    <Link href={`/${link.toLowerCase().replace(' ', '-')}`} className="text-[15px] font-medium text-gray-300 hover:text-white transition-colors">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/careers" className="inline-flex items-center gap-2 bg-[#2a2a2a] text-gray-300 rounded-full px-4 py-2 hover:bg-gray-700 transition-colors text-[13px] font-medium self-start w-max">
                <span className="text-[#6fe0cf]">🤝</span> We're Hiring
              </Link>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-3 flex flex-col">
              <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-wide mb-6">Don't be a stranger</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Send size={16} className="text-[#6fe0cf] shrink-0 mt-1" />
                  <div>
                    <a href="mailto:hello@thesocialshepherd.com" className="block text-[15px] font-medium text-gray-200 hover:text-[#6fe0cf] transition-colors mb-1">
                      UK - hello@thesocialshepherd.com
                    </a>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                      Alexander House, James Street West,<br />
                      Bath, BA1 2BT
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Send size={16} className="text-[#6fe0cf] shrink-0 mt-1" />
                  <div>
                    <a href="mailto:hi@thesocialshepherd.com" className="block text-[15px] font-medium text-gray-200 hover:text-[#6fe0cf] transition-colors mb-1">
                      US - hi@thesocialshepherd.com
                    </a>
                    <p className="text-[14px] text-gray-500 leading-relaxed font-medium">
                      524 Broadway, New York, NY 10012
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="bg-[#1a1a1a] inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-800">
                  <Lock size={12} className="text-gray-400" />
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">DMCA PROTECTED</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Border & Copyright Row */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-gray-500 font-medium">
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="flex flex-col leading-[0.8] items-center">
                  <span className="text-[20px] font-black text-white">ISO</span>
                  <span className="text-[8px] font-black tracking-widest">27001</span>
                </div>
              </div>
              <span>@2026 The Social Shepherd</span>
              <div className="flex items-center gap-6">
                <Link href="/rights" className="hover:text-white transition-colors">All rights reserved</Link>
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </div>
            </div>

            <div>
              Website <span className="text-gray-600 px-1">☆</span> MadeByShape
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
