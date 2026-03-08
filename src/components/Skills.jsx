import React from "react";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiPostgresql, SiNextdotjs, SiGraphql, SiExpress, SiMongodb, SiVercel, SiFigma } from "react-icons/si";
import { FiMonitor, FiServer, FiDatabase, FiTool } from "react-icons/fi";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-slate-800/40 border-y border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-bold tracking-widest text-indigo-500 uppercase mb-3 block">My Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Stack</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Frontend */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl shadow-slate-900/50 hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-indigo-400 mb-6 shadow-md shadow-slate-900 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <FiMonitor className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-5">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><FaReact className="text-cyan-400" /> React</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiNextdotjs className="text-white" /> Next.js</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiTailwindcss className="text-sky-400" /> Tailwind</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiJavascript className="text-yellow-400" /> JavaScript</span>
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl shadow-slate-900/50 hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-indigo-400 mb-6 shadow-md shadow-slate-900 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <FiServer className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-5">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><FaNodeJs className="text-green-500" /> Node.js</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiExpress className="text-gray-300" /> Express</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiGraphql className="text-pink-600" /> GraphQL</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm">REST APIs</span>
            </div>
          </div>

          {/* Database */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl shadow-slate-900/50 hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-indigo-400 mb-6 shadow-md shadow-slate-900 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <FiDatabase className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-5">Database</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiPostgresql className="text-blue-500" /> PostgreSQL</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiMongodb className="text-green-500" /> MongoDB</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm">Redis</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm">Prisma</span>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-xl shadow-slate-900/50 hover:border-indigo-500/50 hover:shadow-indigo-500/10 transition-all hover:-translate-y-1 group">
            <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-indigo-400 mb-6 shadow-md shadow-slate-900 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300">
              <FiTool className="text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-5">Tools & Aux</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm">Git/GitHub</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><FaDocker className="text-blue-400" /> Docker</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiVercel className="text-white" /> Vercel</span>
              <span className="px-3 py-1.5 bg-slate-900 text-slate-300 text-sm font-medium rounded-full border border-slate-700 shadow-sm flex items-center gap-1"><SiFigma className="text-pink-400" /> Figma</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
