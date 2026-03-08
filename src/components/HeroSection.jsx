import React from "react";
import { FaGithub, FaLinkedinIn, FaMediumM } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiDownload, FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-20">
          <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Hello, I'm <span className="text-indigo-500 inline-block relative mt-2 lg:mt-0">Kenenisa Beyan
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-indigo-500/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3"/></svg>
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
              A passionate <strong className="text-slate-200 font-semibold">Full-Stack Software Engineer</strong> focused on crafting clean, scalable web applications. Experience with modern technologies like React, Node.js, and Tailwind CSS.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12 w-full sm:w-auto">
              <a href="/resume.pdf" download className="w-full sm:w-auto px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/20 transition-all transform hover:-translate-y-1 hover:shadow-indigo-500/40 flex items-center justify-center gap-2">
                Download Resume <FiDownload className="text-sm ml-1" />
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-indigo-400 font-semibold rounded-full transition-all flex items-center justify-center gap-2">
                Let's Talk <FiArrowRight className="text-sm ml-1" />
              </a>
            </div>
            
            <div className="flex items-center gap-5">
              <a href="https://github.com/kenenisabeyan" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-indigo-500 hover:border-indigo-500 transition-all shadow-md hover:shadow-indigo-500/30 hover:-translate-y-1 group">
                <FaGithub className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/keno05" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all shadow-md hover:shadow-[#0077b5]/30 hover:-translate-y-1 group">
                <FaLinkedinIn className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/kenenisa93941" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-500 transition-all shadow-md hover:shadow-slate-500/30 hover:-translate-y-1 group">
                <FaXTwitter className="text-xl group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:border-slate-500 transition-all shadow-md hover:shadow-white/10 hover:-translate-y-1 group">
                <FaMediumM className="text-xl group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              <div className="absolute -inset-4 rounded-full border border-indigo-500/30 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-blue-500 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-full bg-slate-800 flex items-center justify-center rounded-full overflow-hidden border-4 border-slate-800/80 shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]">
                <img src="/logo.png" alt="Kenenisa Beyan" className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
