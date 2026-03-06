'use client'

import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center pt-24 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-primary/20 text-sm font-medium mb-8 text-primary shadow-[0_0_20px_rgba(139,92,246,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for Opportunities
        </motion.div>
        
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold font-heading tracking-tight mb-6 text-white leading-[1.1]">
          Hi, I'm {data.name.split(' ').slice(2).join(' ')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-cyan-400">
            {data.role}
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium">
          {data.summary}
        </p>

        <div className="flex flex-wrap gap-4 mb-14">
          <a 
            href="#projects" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors font-medium text-white"
          >
            Download Resume <Download className="w-4 h-4" />
          </a>
        </div>

        <div className="flex items-center gap-8 border-t border-white/10 pt-8 max-w-fit">
          <a href={data.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white hover:scale-110 transition-all">
            <Github className="w-6 h-6" />
          </a>
          <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white hover:scale-110 transition-all">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href={`mailto:${data.email}`} className="text-muted-foreground hover:text-white hover:scale-110 transition-all">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
