import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import AwardsSection from "@/components/AwardsSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import { ArrowRight, MessageSquare } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaYoutube, FaTiktok, FaSpotify } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-sans relative overflow-x-hidden">
      <Navbar />

      <main className="px-6 md:px-12 lg:px-24 pt-12 lg:pt-20 pb-20 relative">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Content */}
          <div className="lg:w-[55%] z-10 relative">
            <p className="text-gray-900 font-semibold mb-6 flex items-center text-sm md:text-base tracking-wide">
              onPoint media
            </p>
            <h1 className="text-[3.5rem] md:text-[5rem] lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[1.05] mb-10">
              The results-driven <span className="text-[#6fe0cf]">Social</span><br />
              <span className="text-[#6fe0cf]">first agency</span> you've been<br />
              looking for
            </h1>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-4">
              <Link href="/services" className="bg-black text-white rounded-[2rem] pl-6 pr-2 py-2 flex items-center gap-4 hover:bg-gray-800 transition-colors">
                <span className="font-semibold text-[15px]">Browse Our Services</span>
                <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                  <ArrowRight size={20} strokeWidth={2.5} />
                </div>
              </Link>
              
              <Link href="/team" className="font-semibold text-[15px] hover:underline flex items-center gap-2 group ml-2">
                Meet The Team <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Image/Mockup */}
          <div className="lg:w-[45%] mt-20 lg:mt-0 relative flex justify-center lg:justify-end lg:pr-12">
            {/* Mint decorative shapes */}
            <div className="absolute top-0 right-[80%] md:-top-10 md:right-[90%] z-20">
              <svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20 Q15 28, 25 35" stroke="#6fe0cf" strokeWidth="3" strokeLinecap="round" />
                <path d="M15 5 Q25 15, 20 25" stroke="#6fe0cf" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            
            <div className="relative z-10 w-[300px] sm:w-[350px] md:w-[420px]">
              <Image 
                src="/hero-phone.png"
                alt="onPoint media Work"
                width={500} 
                height={1000}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
            
            <div className="absolute bottom-10 right-0 z-0">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 40 Q25 45, 30 30" stroke="#6fe0cf" strokeWidth="3" strokeLinecap="round" />
                <path d="M35 15 Q40 25, 30 35" stroke="#6fe0cf" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Social Icons Sidebar */}
        <div className="hidden lg:flex flex-col items-center gap-3 absolute right-8 top-[60%] -translate-y-[60%] z-20">
          <a href="#" className="w-[42px] h-[42px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"><FaFacebookF size={18} /></a>
          <a href="#" className="w-[42px] h-[42px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"><FaLinkedinIn size={18} /></a>
          <a href="#" className="w-[42px] h-[42px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"><FaInstagram size={20} /></a>
          <a href="#" className="w-[42px] h-[42px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"><FaYoutube size={18} /></a>
          <a href="#" className="w-[42px] h-[42px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"><FaTiktok size={18} /></a>
          <a href="#" className="w-[42px] h-[42px] bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm"><FaSpotify size={18} /></a>
        </div>
      </main>

      {/* Brands Section */}
      <section className="px-6 md:px-12 lg:px-24 py-12 pb-24 border-t border-gray-50 max-w-[1400px] mx-auto">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-10 xl:gap-20">
          <p className="font-semibold text-[15px] whitespace-nowrap text-gray-900 shrink-0">Brands that trust us</p>
          <div className="flex items-center gap-10 md:gap-14 lg:gap-20 grayscale opacity-80 flex-wrap justify-between w-full">
            <h3 className="text-2xl font-black tracking-widest text-[#ed1c24] mix-blend-multiply flex flex-col items-center leading-none"><span>UNI</span><span>QLO</span></h3>
            <div className="flex items-center gap-1">
              <h3 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase relative">Beyblade<span className="text-[10px] top-0 ml-1 absolute">TM</span></h3>
              <span className="text-3xl font-black italic">X</span>
            </div>
            <div className="w-[70px] h-[45px] bg-[#1a6636] rounded-[50%] flex items-center justify-center text-white text-[10px] font-bold shadow-sm">Arla</div>
            <h3 className="text-3xl font-bold tracking-tight text-black mix-blend-multiply">fiverr<span className="text-[#00b22d]">.</span></h3>
            <div className="border border-black px-4 py-1 text-xs md:text-sm font-bold tracking-[0.2em] relative mix-blend-multiply uppercase">A Passenger</div>
          </div>
        </div>
      </section>

      <AboutSection />
      
      <AwardsSection />

      <ServicesSection />

      <CaseStudiesSection />

      <Marquee />

      <Footer />

      {/* Floating Chat Button */}
      <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 z-50">
        <button className="w-28 h-28 bg-[#6fe0cf] rounded-full flex items-center justify-center relative hover:scale-[1.02] transition-transform duration-300 shadow-xl cursor-pointer group">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none origin-center">
            <svg viewBox="0 0 100 100" className="w-[90%] h-[90%] animate-[spin_15s_linear_infinite]">
              <path id="curve" d="M 50 14 A 36 36 0 1 1 49.9 14" fill="transparent" />
              <text>
                <textPath href="#curve" startOffset="0" className="fill-black uppercase font-bold text-[9px] tracking-[0.2em]">
                  Let's Chat • Let's Chat • Let's Chat • Let's Chat • 
                </textPath>
              </text>
            </svg>
          </div>
          <div className="bg-white/90 p-2 flex items-center justify-center w-12 h-12 rounded-full relative z-10 border border-gray-200 shadow-sm group-hover:scale-110 transition-transform">
            <MessageSquare size={22} className="text-black" fill="currentColor" strokeWidth={1} />
          </div>
        </button>
      </div>
    </div>
  );
}
