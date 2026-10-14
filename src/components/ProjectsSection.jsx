import React from 'react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "Rafah Mandhi & Briyani",
      description: "A modern restaurant web application featuring delicious menus, specials, and table reservations.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js"],
      image: "/projects/biriyani.jpg",
      liveLink: "https://safeengram.neocities.org/restaurant/",
      sourceLink: "https://github.com/mohamedsafeen-AI/Rafahrestaurant"
    },
    {
      title: "Expense Tracker with AI Insights",
      description: "A full-stack expense management application designed to track budgets, analyze spending and provide AI-powered savings insights.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Supabase", "Chart.js"],
      image: "/projects/expense.jpg",
      liveLink: "https://safeenexpensetrackerapp.netlify.app/",
      sourceLink: "https://github.com/mohamedsafeen-AI/Expensetrackerapp"
    },
    {
      title: "Child Care Hospital Clinic System",
      description: "A digital healthcare management platform for online appointment booking, digital tokens and patient record management.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "Supabase"],
      image: "/projects/clinic.jpg",
      liveLink: "https://safeen-childcare-clinic-app.netlify.app/",
      sourceLink: "https://github.com/mohamedsafeen-AI/childcareclinic"
    },
    {
      title: "SAFI Global Traders",
      description: "A modern and responsive web application for an agricultural import-export startup, showcasing 17 export-grade product lines, trade certifications and global logistics services to international buyers.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive", "Web3Forms", "Vercel"],
      image: "/projects/safi.jpg",
      liveLink: "https://safi-global-traders.vercel.app",
      sourceLink: "https://github.com/mohamedsafeen-AI/safi-global-traders"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Heading - Ultra-Premium Typography */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            My <span className="text-slate-900">Projects</span>
          </h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Projects Grid - Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-slate-50/80 border border-slate-200/80 hover:border-slate-400 rounded-2xl overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              {/* Image Box */}
              <div className="flex justify-center mb-6">
                <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs inline-block max-w-[240px] max-h-[160px] flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="max-h-36 w-auto object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight text-center md:text-left font-sans">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed text-center md:text-left font-normal">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs rounded-md font-medium shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex items-center justify-center md:justify-start gap-4 pt-4 border-t border-slate-200/80">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-900 hover:bg-black text-white rounded-lg transition-all flex items-center gap-2 text-xs font-semibold shadow-xs"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Live Demo
                  </a>

                  <a 
                    href={project.sourceLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 rounded-lg transition-all border border-slate-200 flex items-center gap-2 text-xs font-semibold shadow-2xs"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};