'use client'

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";

export default function Contact({ data }: { data: any }) {
  return (
    <section id="contact" className="scroll-mt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="glass p-8 md:p-14 rounded-[2.5rem] relative overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-bold font-heading mb-6 text-white tracking-tight">Let's Build <br/><span className="text-primary">Together.</span></h2>
            <p className="text-muted-foreground mb-10 text-lg md:text-xl leading-relaxed">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${data.email}`} className="flex items-center gap-5 text-white/80 hover:text-primary transition-all p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 w-fit">
                <div className="p-3.5 glass bg-primary/20 rounded-xl text-primary">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-semibold text-lg">{data.email}</span>
              </a>
              <a href={`tel:${data.phone}`} className="flex items-center gap-5 text-white/80 hover:text-primary transition-all p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/10 w-fit">
                <div className="p-3.5 glass bg-white/10 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="font-semibold text-lg">{data.phone}</span>
              </a>
            </div>
          </div>

          <div className="bg-black/20 p-8 rounded-3xl border border-white/5">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-white/80 pl-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-white/80 pl-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-white/80 pl-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white font-medium focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none placeholder:text-white/20"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-lg py-4 rounded-xl transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 flex items-center justify-center gap-3 mt-2"
              >
                Send Message <MessageSquare className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
