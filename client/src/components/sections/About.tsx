import { motion } from "framer-motion";
import { GraduationCap, Code2, BrainCircuit } from "lucide-react";

export default function About({ data }: { data: any }) {
  return (
    <section id="about" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <BrainCircuit className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold font-heading text-white">About Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div className="space-y-8 glass p-8 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
            <h3 className="text-2xl font-bold font-heading flex items-center gap-3 relative z-10 text-white">
              <Code2 className="w-6 h-6 text-primary" /> Technical Arsenal
            </h3>
            <div className="space-y-6 relative z-10">
              {data.skills.map((skill: any, idx: number) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm font-semibold mb-3">
                    <span className="text-white/90">{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-black/40 rounded-full overflow-hidden backdrop-blur-sm border border-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary via-indigo-500 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold font-heading flex items-center gap-3 text-white">
              <GraduationCap className="w-6 h-6 text-primary" /> Education Timeline
            </h3>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.1rem] before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary/50 before:via-white/10 before:to-transparent">
              {data.education.map((edu: any, idx: number) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 * idx }}
                  className="relative flex items-start group"
                >
                  <div className="flex items-center justify-center w-9 h-9 rounded-full border border-primary/30 bg-background shadow-[0_0_15px_rgba(139,92,246,0.2)] shrink-0 z-10 mt-1">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <div className="ml-6 glass p-6 rounded-2xl w-full group-hover:border-primary/30 transition-colors">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <h4 className="font-bold text-lg text-white leading-tight">{edu.degree}</h4>
                      <span className="text-primary text-xs font-bold px-3 py-1 rounded-full bg-primary/10 border border-primary/20 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                    <p className="text-white/60 text-sm bg-white/5 inline-block px-3 py-1 rounded-md border border-white/5">{edu.score}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
