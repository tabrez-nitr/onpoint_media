import React from 'react';
import Link from 'next/link';
import { ArrowRight, Smartphone, CircleDollarSign, Film, CheckCircle2 } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: "Social",
      icon: <Smartphone className="text-white" size={24} />,
      description: "We grow cult-like social communities with platform-specific social strategies",
      features: [
        "Social Strategy",
        "Channel and Community Management",
        "Social-first Content Creation",
        "Social Listening & Insights"
      ],
      linkText: "Learn More About Social",
      linkUrl: "/services/social"
    },
    {
      title: "Paid",
      icon: <CircleDollarSign className="text-white" size={24} />,
      description: "We deliver performance-driven Paid Social and Paid Search campaigns",
      features: [
        "Paid Social & Paid Search",
        "Full-Funnel Media Strategy",
        "Planning, Buying, Creative, Analytics, Testing and more.",
        "Feed Optimisation & Shopping"
      ],
      linkText: "Learn More About Paid",
      linkUrl: "/services/paid",
      darkButton: true
    },
    {
      title: "Creative",
      icon: <Film className="text-white" size={24} />,
      description: "Delivering outstanding Creative across Video, Design and Motion",
      features: [
        "Organic & Paid Social Video",
        "UGC to High-Production",
        "Creative Strategy, Art Direction & Campaigns",
        "Motion Design, Animation and Graphics"
      ],
      linkText: "Learn More About Creative",
      linkUrl: "/services/creative"
    }
  ];

  return (
    <section className="bg-[#f2f2f2] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <h2 className="text-[3rem] md:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-black">
            Our full-service<br />
            offering...
          </h2>
          
          <div className="flex items-center gap-6">
            {/* Carousel dots indicator */}
            <div className="flex gap-2">
              <span className="w-6 h-2 rounded-full bg-[#6fe0cf]"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
              <span className="w-2 h-2 rounded-full bg-gray-300"></span>
            </div>
            
            <div className="flex items-center gap-2">
              <Link href="/services" className="bg-black text-white rounded-full px-6 h-12 flex items-center font-semibold text-[15px] hover:bg-gray-800 transition-colors">
                View All Services
              </Link>
              <Link href="/services" className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0">
                <ArrowRight size={20} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-10 flex flex-col h-full border-t-[6px] border-black shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center shrink-0">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black">{service.title}</h3>
              </div>
              
              <p className="font-medium text-gray-800 mb-8 min-h-[48px]">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="text-[#6fe0cf] fill-[#6fe0cf] text-white shrink-0 mt-0.5" size={18} />
                    <span className="leading-tight">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href={service.linkUrl} 
                className={`w-full h-[52px] rounded-full flex items-center justify-center font-semibold text-[15px] transition-colors ${
                  service.darkButton 
                    ? 'bg-black text-white hover:bg-gray-800' 
                    : 'border border-gray-300 text-black hover:border-black'
                }`}
              >
                {service.linkText}
              </Link>
            </div>
          ))}

          {/* Next Button for Carousel effect */}
          <button className="hidden xl:flex absolute top-1/2 -right-6 translate-x-full -translate-y-1/2 w-16 h-16 bg-black text-white rounded-full items-center justify-center hover:bg-gray-800 transition-colors shadow-lg z-10">
            <ArrowRight size={24} strokeWidth={2} />
          </button>
        </div>
        
      </div>
    </section>
  );
}
