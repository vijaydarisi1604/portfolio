'use client'

import { motion } from "framer-motion";
import { Award, Tag } from "lucide-react";

export default function Achievements({ data }: { data: any }) {
  return (
    <section id="achievements" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-8 glass p-8 rounded-3xl relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent">
            <h2 className="text-3xl font-bold font-heading flex items-center gap-4 text-white">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Award className="w-6 h-6" />
              </div>
              Achievements
            </h2>
            <div className="space-y-4 relative z-10">
              {data.achievements.map((item: string, idx: number) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="p-5 rounded-2xl flex items-start gap-4 border-l-4 border-l-primary bg-black/20 hover:bg-white/5 transition-colors border-y border-r border-white/5"
                >
                  <p className="text-white/90 font-medium leading-relaxed">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-8 glass p-8 rounded-3xl relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent">
            <h2 className="text-3xl font-bold font-heading flex items-center gap-4 text-white">
              <div className="p-2.5 rounded-xl bg-white/10 text-white/80">
                <Tag className="w-6 h-6" />
              </div>
              Certifications
            </h2>
            <div className="space-y-4 relative z-10">
              {data.certifications.map((item: string, idx: number) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="p-4 rounded-xl flex items-start gap-4 border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all group"
                >
                  <div className="p-2 bg-white/5 rounded-lg text-muted-foreground shrink-0 group-hover:text-primary transition-colors">
                    <Tag className="w-5 h-5" />
                  </div>
                  <p className="text-white/80 font-medium pt-1.5">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
