import React, { useState } from 'react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic or Google Apps Script integration
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            Get In <span className="text-slate-900">Touch</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base max-w-xl mx-auto mt-3 font-normal">
            Open to Software Development, Python, AI/ML, and Web Development opportunities. Feel free to connect with me for collaborations, internships, or full-time roles.
          </p>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl flex items-center space-x-4 shadow-sm hover:border-slate-400 transition-all">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-2xs flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Me</h4>
                <a href="mailto:mohamedsafeen590@gmail.com" className="text-xs sm:text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors block truncate">
                  mohamedsafeen590@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl flex items-center space-x-4 shadow-sm hover:border-slate-400 transition-all">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-2xs flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Me</h4>
                <a href="tel:+919384798122" className="text-xs sm:text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors block">
                  +91 93847 98122
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-slate-50 border border-slate-200/80 p-6 rounded-3xl flex items-center space-x-4 shadow-sm hover:border-slate-400 transition-all">
              <div className="w-12 h-12 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 shadow-2xs flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Location</h4>
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Kilakarai, Ramanathapuram, Tamil Nadu, India
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-6">Send a Message</h3>
            
            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-2xl text-center">
                <h4 className="font-bold text-base mb-1">Message Sent Successfully!</h4>
                <p className="text-xs">Thank you for reaching out. I will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Email</label>
                  <input 
                    type="email_address" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message</label>
                  <textarea 
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Write your message here..."
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-slate-900 transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3.5 bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-xl shadow-md transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};