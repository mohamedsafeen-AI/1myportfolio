import React from 'react';

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "HTML Certificate",
      image: "/certificates/html-cert.jpg",
      issuer: "W3Schools",
      date: "2024"
    },
    {
      title: "CSS Certificate",
      image: "/certificates/css-cert.jpg",
      issuer: "W3Schools",
      date: "2025"
    },
    {
      title: "JavaScript Certificate",
      image: "/certificates/js-cert.jpg",
      issuer: "W3Schools",
      date: "2025"
    },
    {
      title: "React Certificate",
      image: "/certificates/react-cert.jpg",
      issuer: "W3Schools",
      date: "2026"
    },
    {
      title: "Python Certificate",
      image: "/certificates/python-cert.jpg",
      issuer: "W3Schools",
      date: "2026"
    },
    {
      title: "MySQL Certificate",
      image: "/certificates/mysql-cert.jpg",
      issuer: "W3Schools",
      date: "2026"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Heading - Ultra-Premium Heading Typography */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight font-sans">
            My <span className="text-slate-900">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-slate-900 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Certificates Grid - Sleek Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-slate-50/80 border border-slate-200/80 hover:border-slate-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between"
            >
              {/* Certificate Image Frame */}
              <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-xs mb-5 flex items-center justify-center h-48 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="max-h-full max-w-full object-contain rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title & Metadata */}
              <div className="text-center">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-1 font-sans">
                  {cert.title}
                </h3>
                <p className="text-slate-500 text-xs font-medium tracking-wide">
                  Issued by {cert.issuer} • <span className="font-mono text-slate-600">{cert.date}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};