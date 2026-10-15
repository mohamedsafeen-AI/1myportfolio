import React from 'react';
import safeenImg from '../assets/safeenportfolioimg.png';

export const HeroSection = () => {
  const techStack = [
    { 
      name: 'HTML5', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
    },
    { 
      name: 'CSS3', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' 
    },
    { 
      name: 'Supabase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' 
    }
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-32 md:pb-20 bg-white overflow-hidden min-h-screen flex items-center">
      
      {/* Background Soft Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-72 h-72 md:w-96 md:h-96 bg-slate-100 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-72 h-72 md:w-96 md:h-96 bg-slate-50 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badges */}
            <div className="inline-flex items-center gap-2.5 bg-slate-100 border border-slate-200 px-3.5 py-1.5 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse"></span>
              <span className="text-xs font-semibold text-slate-800 tracking-wide font-sans">
                IT Student &bull; Full Stack Developer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight font-sans leading-[1.15]">
              Hi, I'm <br />
              <span className="text-slate-900">Mohamed Safeen M</span>
            </h1>

            {/* Bio Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed font-sans">
              Final-year B.Tech Information Technology student at Aalim Muhammed Salegh College of Engineering (2023–2027). AI Full Stack Developer / Full Stack Web Developer passionate about building scalable web applications, computer vision tools, and AI-driven interactive products using HTML, CSS, JavaScript, React, Express.js, Python, Supabase, and Gemini API.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a 
                href="#projects" 
                className="px-6 py-3.5 bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                View My Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>

              <a 
                href="/MohamedSafeenM_Resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 text-xs sm:text-sm font-semibold rounded-2xl border border-slate-200 shadow-sm hover:border-slate-400 transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Resume
              </a>
            </div>

            {/* Tech Stack Icons Bar */}
            <div className="pt-6 border-t border-slate-100 flex items-center gap-2.5 flex-wrap">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Tech Stack:</span>
              <div className="flex items-center gap-2 flex-wrap">
                {techStack.map((tech, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl shadow-2xs hover:border-slate-400 transition-all">
                    <img src={tech.icon} alt={tech.name} className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
                    <span className="text-[11px] sm:text-xs font-semibold text-slate-800 font-mono">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Perfectly Scaled Image Scene */}
          <div className="lg:col-span-5 relative flex justify-center mt-4 lg:mt-0 px-2 sm:px-0">
            <div className="relative w-full max-w-full sm:max-w-md lg:max-w-2xl overflow-hidden rounded-2xl sm:rounded-3xl shadow-md border border-slate-200/80 bg-white">
              <img 
                src={safeenImg} 
                alt="Mohamed Safeen M" 
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};