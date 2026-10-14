import React from 'react';

export const AboutSection = () => {
  const highlights = [
    {
      icon: (
        <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: "Web Development",
      description: "Building responsive and user-friendly web applications using HTML, CSS, JavaScript, React, and modern web technologies."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "AI-Powered Web & E-Commerce",
      description: "Building modern websites, web applications, and e-commerce platforms integrated with AI tools like Gemini API, Google Apps Script, and Google Sheets."
    },
    {
      icon: (
        <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
      title: "Full Stack Development",
      description: "Building scalable web applications and APIs using React, Express.js, Python, Supabase, and REST APIs."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading - Perfect Center Alignment & Premium Font Styling */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            About <span className="text-slate-900">Me</span>
          </h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Grid Layout - Pixel Perfect Grid Alignment */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Biography Details (5 cols) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-snug">
              AI Full Stack Developer <span className="text-slate-400 font-light">|</span> Full Stack Web Developer
            </h3>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-normal">
              Final-year B.Tech Information Technology student at Aalim Muhammed Salegh College of Engineering (2023–2027). AI Full Stack Developer passionate about building scalable web applications, e-commerce stores, and AI-driven interactive products.
            </p>

            <p className="text-slate-600 text-base leading-relaxed font-normal">
              Skilled in HTML, CSS, JavaScript, React, Express.js, Python, Supabase, Google Apps Script, Google Sheets, and Gemini API.
            </p>

            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-7 py-3.5 bg-slate-900 hover:bg-black text-white text-sm font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Column - Highlight Feature Cards (7 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-50/80 border border-slate-200/80 hover:border-slate-400 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md flex items-start space-x-5"
              >
                <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};