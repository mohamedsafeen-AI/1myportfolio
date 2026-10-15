import React from 'react';
import lureiImg from '../assets/lurei.png';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "LUREI - Luxury Jewelry & Accessories",
      description: "A high-end luxury e-commerce and brand showcase web application designed for UAE Accessories. Features a sophisticated gold-and-slate aesthetic, curated product catalogs, and seamless user experience.",
      image: lureiImg,
      tags: ["React", "Tailwind CSS", "UI/UX", "JavaScript"],
      liveUrl: "https://lureiaccessories.vercel.app/",
      githubUrl: "https://github.com/mohamedsafeen-AI/1myportfolio"
    },
    {
      title: "Safi Global Traders",
      description: "A professional corporate website built for an international agricultural export and trading business, managing customer business inquiries for shipping containers of products like okra and bananas.",
      image: "/projects/safi.jpg",
      tags: ["HTML", "Tailwind CSS", "JavaScript", "Vercel"],
      liveUrl: "https://safi-global-traders.vercel.app",
      githubUrl: "https://github.com/mohamedsafeen-AI/safi-global-traders"
    },
    {
      title: "Child Care Clinic Web App",
      description: "A comprehensive healthcare web application featuring patient appointment booking, specialized doctor profiles, service listings, an interactive admin dashboard, and backend Google Sheets integration via Google Apps Script.",
      image: "/projects/clinic.jpg",
      tags: ["React", "Google Apps Script", "Google Sheets", "Tailwind CSS"],
      liveUrl: "https://safeen-childcare-clinic-app.netlify.app/",
      githubUrl: "https://github.com/mohamedsafeen-AI/childcareclinic"
    },
    {
      title: "Rafah Restaurant Web App",
      description: "An interactive restaurant web application featuring appetizing menu showcases, delicious food item categorization, online table booking, and responsive customer ordering experiences.",
      image: "/projects/biriyani.jpg",
      tags: ["HTML", "CSS", "JavaScript", "Neocities"],
      liveUrl: "https://safeengram.neocities.org/restaurant/",
      githubUrl: "https://github.com/mohamedsafeen-AI/Rafahrestaurant"
    },
    {
      title: "Expense Tracker Web Application",
      description: "A secure financial expense tracking application with real-time budget categorization, local storage persistence, interactive data summaries, and clean dashboard visualizers.",
      image: "/projects/expense.jpg",
      tags: ["React", "Express.js", "Supabase", "Netlify"],
      liveUrl: "https://safeenexpensetrackerapp.netlify.app/",
      githubUrl: "https://github.com/mohamedsafeen-AI/Expensetrackerapp"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Featured <span className="text-slate-900">Projects</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mt-3 font-normal">
            Explore some of my major full-stack web development, AI integration, and brand identity projects.
          </p>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-slate-50/80 border border-slate-200/80 hover:border-slate-400 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden aspect-[16/10] bg-white flex items-center justify-center p-3 border-b border-slate-100">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-xl"
                />
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight font-sans group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm mt-2 font-normal leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="px-2.5 py-1 bg-white border border-slate-200 rounded-lg text-[11px] font-semibold text-slate-700 font-mono shadow-2xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-slate-900 hover:text-purple-600 transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    Code
                  </a>

                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 bg-slate-900 hover:bg-black text-white text-xs font-semibold rounded-xl shadow-xs transition-all flex items-center gap-1.5"
                    >
                      Live Demo
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                    </a>
                  )}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};