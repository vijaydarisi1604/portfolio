'use client'

import { motion } from "framer-motion";
import { ExternalLink, FolderGit2, Github } from "lucide-react";

export default function Projects({ data }: { data: any }) {
  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold font-heading text-white">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.projects.map((project: any, idx: number) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="glass p-8 rounded-3xl flex flex-col h-full group border border-white/5 hover:border-primary/50 hover:shadow-[0_10px_40px_-15px_rgba(139,92,246,0.3)] transition-all bg-gradient-to-br from-white/[0.03] to-transparent relative overflow-hidden"
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="p-3.5 rounded-xl bg-white/5 text-primary border border-white/10 group-hover:bg-primary/10 group-hover:scale-110 transition-all">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <div className="flex gap-3 text-muted-foreground">
                  <a href={project.github} className="hover:text-white hover:scale-110 transition-all p-2 bg-white/5 rounded-full border border-white/10">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.demo} className="hover:text-white hover:scale-110 transition-all p-2 bg-white/5 rounded-full border border-white/10">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold font-heading mb-3 group-hover:text-primary transition-colors text-white relative z-10">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-8 flex-grow leading-relaxed relative z-10">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10 pt-6 border-t border-white/10">
                {project.tech.map((tech: string, i: number) => (
                  <span key={i} className="text-xs font-semibold px-2.5 py-1.5 rounded-lg bg-black/40 border border-white/5 text-primary/90 backdrop-blur-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
