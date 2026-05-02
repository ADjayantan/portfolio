import { motion } from 'motion/react';
import { ExternalLink, Github, Layers, Zap, Globe } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-custom-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-custom-text mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-custom-primary rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          {/* Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-custom-card border border-custom-border rounded-2xl overflow-hidden hover:border-custom-primary/30 transition-all group"
          >
            <div className="grid md:grid-cols-5 gap-0">
              <div className="md:col-span-2 bg-custom-bg/50 p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-custom-border">
                 {/* Placeholder for project image or icon */}
                 <div className="w-24 h-24 bg-custom-primary/10 rounded-2xl flex items-center justify-center text-custom-primary">
                    <Zap className="w-12 h-12" />
                 </div>
              </div>
              <div className="md:col-span-3 p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold font-serif text-custom-text mb-2 group-hover:text-custom-primary transition-colors">
                      AI Web Application Builder
                    </h3>
                    <p className="text-sm text-custom-primary font-medium">Google AI Studio Project</p>
                  </div>
                  <a
                    href="https://aistudio.google.com/apps/drive/1BJsHgyfNAczkOZ-VI26-euaxdqrlr2dj?showPreview=true&showAssistant=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-custom-bg rounded-full text-custom-muted hover:text-custom-text hover:bg-custom-primary transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <p className="text-custom-muted mb-6 leading-relaxed">
                  Developed an AI-powered web application using Google AI Studio to automate user interaction and generate intelligent responses based on user input.
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-custom-muted mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      "Interactive AI response system",
                      "Prompt-driven application logic",
                      "Web-based deployment",
                      "Real-time interaction"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-custom-muted text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-custom-accent"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {["Google AI Studio", "Gemini AI", "Prompt Engineering", "Web Deployment"].map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-custom-bg text-custom-muted text-xs rounded-full border border-custom-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
