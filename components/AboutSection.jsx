import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-white relative z-10">
      {/* Top Heading */}
      <div className="text-center mb-24 max-w-4xl mx-auto">
        <h2 className="text-[2rem] md:text-[2.5rem] lg:text-[2.75rem] font-bold leading-[1.15] tracking-tight text-black">
          We grow ambitious brands with<br className="hidden md:block" />
          Social, Paid, Creative and Influencer
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 lg:gap-24 relative">
        {/* Left Side: Image */}
        <div className="lg:w-1/2 relative rounded-[2rem] overflow-hidden drop-shadow-xl min-h-[400px] md:min-h-[500px] lg:min-h-[600px] w-full">
          <Image
            src="/team-photo.png"
            alt="Social Shepherd Team"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Right Side: Content */}
        <div className="lg:w-1/2 flex flex-col justify-center">
          {/* Decorative dashes */}
          <div className="mb-8 flex gap-3">
            <span className="w-[3px] h-4 bg-black rounded-full rotate-[35deg]"></span>
            <span className="w-[3px] h-4 bg-black rounded-full -rotate-[40deg] translate-y-1"></span>
          </div>
          
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-10 text-black">
            We blend creative and<br />
            performance
          </h2>
          
          <div className="space-y-8 text-[16px] text-gray-800 leading-relaxed font-medium">
            <p>
              There aren't many creative agencies that understand performance and performance agencies that understand creative.
            </p>
            <p>
              This is where we're different.
            </p>
            <p>
              Whether we're helping to grow your Social communities, deliver performance-driven Paid Media, produce social-first Creative or Influencer campaigns - we craft strategies based on your brand, business and goals, all backed by data and insight.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-2">
            <Link href="/services" className="bg-black text-white rounded-full px-6 h-12 flex items-center font-semibold text-[15px] hover:bg-gray-800 transition-colors">
              See Our Services
            </Link>
            <Link href="/services" className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
