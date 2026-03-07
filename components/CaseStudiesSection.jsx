import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "Passenger",
      description: "Increased Revenue by 10x with Paid Social & Search - Award Winning Campaign",
      image: "/case-study-passenger.png",
      tags: ["Paid Media", "Creative"],
      link: "/case-studies/passenger"
    },
    {
      title: "BEYBLADE",
      description: "Grew +30k followers on TikTok, +393k organic video views, and an 8.21% engagement rate in 6 months.",
      image: "/case-study-beyblade.png",
      tags: ["Organic Social", "Creative"],
      link: "/case-studies/beyblade",
      wide: true
    }
  ];

  return (
    <section className="bg-[#f2f2f2] py-24 pb-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <h2 className="text-[3rem] md:text-[4rem] font-bold tracking-tight leading-[1.05] text-black">
            Our recent<br />
            Case Studies
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Link 
              href={study.link} 
              key={index}
              className={`group relative rounded-[2rem] overflow-hidden block ${study.wide ? 'lg:w-[60%]' : 'lg:w-[40%]'} h-[400px] md:h-[500px] shadow-sm`}
            >
              {/* Background Image */}
              <Image
                src={study.image}
                alt={`${study.title} Case Study`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes={study.wide ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 1024px) 100vw, 40vw"}
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="bg-white text-black text-[11px] font-bold tracking-wide uppercase px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {study.title}
                </h3>
                
                <p className="text-gray-200 text-sm md:text-base font-medium max-w-lg leading-relaxed">
                  {study.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2">
            <Link href="/case-studies" className="bg-black text-white rounded-full px-6 h-12 flex items-center font-semibold text-[15px] hover:bg-gray-800 transition-colors">
              View All Case Studies
            </Link>
            <Link href="/case-studies" className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0">
              <ArrowRight size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
