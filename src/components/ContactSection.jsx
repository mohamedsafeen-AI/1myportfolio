import React from 'react';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Let's <span className="text-slate-900">Connect</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mt-3 font-normal">
            Open to Software Development, Python, AI/ML, and Web Development opportunities. Feel free to connect with me for collaborations, internships, or full-time roles.
          </p>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Email Card */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 flex items-center space-x-4 shadow-sm hover:border-slate-400 transition-all">
              <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Me</p>
                <a href="mailto:mohamedsafeen590@gmail.com" className="text-base font-bold text-slate-900 hover:text-purple-600 transition-colors">
                  mohamedsafeen590@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 flex items-center space-x-4 shadow-sm hover:border-slate-400 transition-all">
              <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Call Me</p>
                <a href="tel:+919384798122" className="text-base font-bold text-slate-900 hover:text-purple-600 transition-colors font-mono">
                  +91 93847 98122
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-50/80 border border-slate-200/80 rounded-2xl p-5 flex items-center space-x-4 shadow-sm hover:border-slate-400 transition-all">
              <div className="p-3 bg-white rounded-xl border border-slate-100 shadow-xs text-slate-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                <p className="text-base font-bold text-slate-900">
                  Kilakarai, Ramanathapuram, Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form with Updated Access Key */}
          <div className="lg:col-span-6 bg-slate-50/80 border border-slate-200/80 rounded-2xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
              Send a Message
            </h3>
            
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
              
              {/* Updated Web3Forms Access Key */}
              <input type="hidden" name="access_key" value="aac229a6-ad56-45fd-bd0e-933615ec6d2e" />
              <input type="hidden" name="subject" value="New Message from Portfolio Website" />
              <input type="hidden" name="from_name" value="Mohamed Safeen Portfolio" />

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  required 
                  placeholder="Enter your name" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-600 uppercase mb-1">Message</label>
                <textarea 
                  name="message"
                  rows="4" 
                  required 
                  placeholder="Type your message here..." 
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:border-slate-900 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-3.5 bg-slate-900 hover:bg-black text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Social Links Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Profiles</span>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://github.com/mohamedsafeen-AI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 bg-white hover:bg-slate-900 hover:text-white text-slate-800 rounded-xl border border-slate-200 transition-all shadow-2xs text-xs font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};