import { motion } from 'motion/react';
import { Download, FileText, Eye } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-custom-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-custom-text mb-4">Resume</h2>
          <div className="w-20 h-1 bg-custom-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-custom-card border border-custom-border rounded-2xl p-8 flex flex-col gap-6"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-custom-bg rounded-xl flex items-center justify-center text-custom-primary">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-serif text-custom-text mb-2">Jayantan AD</h3>
                <p className="text-custom-muted">Java Developer & Backend Enthusiast</p>
              </div>
            </div>

            <p className="text-custom-muted leading-relaxed">
              Download my resume to see a detailed overview of my experience, skills, and education.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="/Jayantan_AD_Resume.pdf"
                download="Jayantan_AD_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 rounded-lg bg-custom-primary hover:bg-indigo-600 text-white font-semibold transition-all shadow-lg shadow-custom-primary/25 flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-3 rounded-lg bg-custom-card hover:bg-custom-border text-custom-text font-semibold transition-all border border-custom-border flex items-center justify-center gap-2 cursor-pointer"
                onClick={() => alert("Preview functionality would open a modal here.")}
              >
                <Eye className="w-5 h-5" />
                Preview
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Preview Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative aspect-[3/4] bg-white rounded-lg shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden group"
          >
            <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 z-10">
              <span className="text-white font-semibold bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                Resume Preview
              </span>
            </div>
            {/* Mock content lines */}
            <div className="absolute top-8 left-8 right-8 space-y-4 opacity-50">
              <div className="h-8 w-1/2 bg-slate-400 rounded"></div>
              <div className="h-4 w-3/4 bg-slate-300 rounded"></div>
              <div className="h-4 w-full bg-slate-300 rounded"></div>
              <div className="h-32 w-full bg-slate-300 rounded mt-8"></div>
              <div className="h-32 w-full bg-slate-300 rounded"></div>
              <div className="h-32 w-full bg-slate-300 rounded"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
