import React, { useEffect, useRef } from 'react';

export const HeroSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Create black stars/particles
    const stars = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.8,
      speedY: Math.random() * 0.8 + 0.3,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.6 + 0.2,
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, ${star.opacity})`;
        ctx.fill();

        // Move star drops downwards
        star.y += star.speedY;
        star.x += star.speedX;

        // Reset position when off screen
        if (star.y > canvas.height) {
          star.y = -5;
          star.x = Math.random() * canvas.width;
        }
        if (star.x > canvas.width) star.x = 0;
        if (star.x < 0) star.x = canvas.width;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="min-h-screen w-full flex flex-col justify-center items-center relative px-6 bg-white overflow-hidden pt-16 pb-12"
    >
      {/* Background Animated Black Star Drops Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Centered Main Content */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center justify-center my-auto pointer-events-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Hi, I'm <span className="text-slate-900">Mohamed Safeen M</span>
        </h1>

        <p className="text-slate-600 text-base md:text-lg max-w-3xl mb-8 leading-relaxed font-normal">
          Final-year B.Tech Information Technology student at Aalim Muhammed Salegh College of Engineering (2023–2027). AI Full Stack Developer / Full Stack Web Developer passionate about building scalable web applications, computer vision tools, and AI-driven interactive products using HTML, CSS, JavaScript, React, Express.js, Python, Supabase, and Gemini API.
        </p>

        <a 
          href="#projects" 
          className="px-7 py-3 bg-slate-900 hover:bg-black text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
        >
          View My Work
        </a>
      </div>

      {/* Scroll Down Indicator at Bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-slate-500 text-xs font-medium z-10">
        <span className="mb-1">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};