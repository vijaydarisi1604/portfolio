import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer({ data }: { data: any }) {
  return (
    <footer className="border-t border-white/10 py-10 mt-20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm font-medium">
          © {new Date().getFullYear()} {data.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a href={data.socials.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Github className="w-5 h-5" />
          </a>
          <a href={data.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${data.email}`} className="text-muted-foreground hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
