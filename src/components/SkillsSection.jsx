import React, { useState } from 'react';

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Programming', 'Web', 'Tools'];

  const skills = [
    { name: 'JavaScript', level: '75%', category: 'Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Python', level: '80%', category: 'Programming', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'React', level: '85%', category: 'Web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'HTML/CSS', level: '75%', category: 'Web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'Express.js', level: '70%', category: 'Web', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Supabase', level: '80%', category: 'Tools', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
    { 
      name: 'Google Apps Script', 
      level: '70%', 
      category: 'Tools', 
      customIcon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM8 17H6V15H8V17ZM8 13H6V11H8V13ZM8 9H6V7H8V9ZM18 17H10V15H18V17ZM18 13H10V11H18V13ZM18 9H10V7H18V9Z" fill="#4285F4"/>
        </svg>
      )
    },
    { 
      name: 'Google Sheets', 
      level: '65%', 
      category: 'Tools', 
      customIcon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM16 17H8V15H16V17ZM16 13H8V11H16V13ZM16 9H8V7H16V9Z" fill="#0F9D58"/>
        </svg>
      )
    },
    { 
      name: 'Gemini API', 
      level: '75%', 
      category: 'Tools', 
      customIcon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 7.52 7.52 12 2 12C7.52 12 12 16.48 12 22C12 16.48 16.48 12 22 12C16.48 12 12 7.52 12 2Z" fill="#4285F4"/>
        </svg>
      )
    },
  ];

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            My <span className="text-slate-900">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 tracking-wide ${
                activeTab === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-slate-50/80 border border-slate-200/80 hover:border-slate-400 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              {/* Skill Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-xl border border-slate-100 shadow-xs w-10 h-10 flex items-center justify-center shrink-0">
                    {skill.customIcon ? (
                      skill.customIcon
                    ) : (
                      <img src={skill.icon} alt={skill.name} className="w-6 h-6 object-contain" />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight font-sans">
                    {skill.name}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-slate-500 font-mono">
                  {skill.level}
                </span>
              </div>

              {/* Minimal Dark Slate Progress Bar */}
              <div className="w-full bg-slate-200/80 h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-slate-900 h-full rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};