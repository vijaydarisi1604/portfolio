import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function Experience({ data }: { data: any }) {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 rounded-2xl bg-primary/10 text-primary">
            <Briefcase className="w-6 h-6" />
          </div>
          <h2 className="text-4xl font-bold font-heading text-white">Experience</h2>
        </div>

        <div className="space-y-8">
          {data.experience.map((exp: any, idx: number) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.01 }}
              className="glass p-8 md:p-10 rounded-3xl relative overflow-hidden group border border-white/5 hover:border-primary/30 transition-all shadow-xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 border-b border-white/10 pb-6 relative z-10">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold font-heading text-white mb-2">{exp.title}</h3>
                  <h4 className="text-lg text-primary font-semibold">{exp.company}</h4>
                </div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white/80 whitespace-nowrap h-fit">
                  {exp.period}
                </div>
              </div>
              
              <ul className="space-y-4 relative z-10">
                {exp.responsibilities.map((resp: string, i: number) => (
                  <li key={i} className="flex gap-4 text-muted-foreground md:text-lg">
                    <span className="text-primary/70 mt-1 text-xl font-bold">▹</span>
                    <span className="leading-relaxed font-medium">{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
