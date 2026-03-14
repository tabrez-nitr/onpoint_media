import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AwardsSection() {
  const awards = [
    "Best Large Social Agency (2023, 2024)",
    "Large Social Media Agency of the Year (2025)",
    "Global Social Media Agency of the Year Finalist (2023)",
    "Best Direct Response Campaign",
    "Best Integrated Paid Media Campaign",
    "Best Use of Facebook & Instagram Ads"
  ];

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto bg-white">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        
        {/* Left Side: Content */}
        <div className="lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
          {/* Decorative dashes */}
          <div className="mb-8 flex gap-3">
            <span className="w-[3px] h-4 bg-black rounded-full rotate-[35deg]"></span>
            <span className="w-[3px] h-4 bg-black rounded-full -rotate-[40deg] translate-y-1"></span>
          </div>
          
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold tracking-tight leading-[1.05] mb-10 text-black">
            We're multi award-winning
          </h2>
          
          <div className="space-y-8 text-[16px] text-gray-800 leading-relaxed font-medium mb-12">
            <p>
              We know awards aren't the be-all and end-all.
            </p>
            <p>
              But we're proud of what we've achieved and the quality of work our team produces for our clients.
            </p>
            <p>
              We've won awards across all of our departments, with some key highlights including:
            </p>
          </div>

          <ul className="space-y-4 mb-12">
            {awards.map((award, index) => (
              <li key={index} className="flex items-center gap-4 text-gray-800 font-medium">
                <CheckCircle2 className="text-[#6fe0cf] fill-[#6fe0cf] text-white shrink-0" size={24} />
                <span>{award}</span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/about" className="bg-black text-white rounded-full px-6 h-12 flex items-center font-semibold text-[15px] hover:bg-gray-800 transition-colors">
              Learn More About Us
            </Link>
            <Link href="/about" className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0">
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 relative rounded-[2rem] overflow-hidden drop-shadow-xl min-h-[500px] md:min-h-[600px] lg:min-h-[700px] w-full order-1 lg:order-2">
          <Image
            src="/awards-photo.png"
            alt="onPoint media Award Winners"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
