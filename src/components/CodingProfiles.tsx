import { motion } from 'motion/react';
import { Github, Code2, Terminal } from 'lucide-react';

export default function CodingProfiles() {
  return (
    <section className="py-24 bg-custom-card border-y border-custom-border">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold font-serif text-custom-text mb-4">Coding Profiles</h2>
          <p className="text-custom-muted">Check out my problem-solving journey and repositories.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* LeetCode Detailed Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-custom-bg border border-custom-border rounded-2xl p-8 hover:border-yellow-500/30 transition-all group"
            >
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500">
                            <Code2 className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-custom-text font-serif">LeetCode</h3>
                            <p className="text-custom-muted text-sm">jayantan</p>
                        </div>
                    </div>
                    <a href="https://leetcode.com/u/jayantan/" target="_blank" rel="noopener noreferrer" className="text-sm text-yellow-500 hover:underline">View Profile</a>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-custom-card p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-custom-text font-mono">61</div>
                        <div className="text-xs text-custom-muted uppercase tracking-wider mt-1">Solved</div>
                    </div>
                    <div className="bg-custom-card p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-custom-text font-mono">2.1M</div>
                        <div className="text-xs text-custom-muted uppercase tracking-wider mt-1">Rank</div>
                    </div>
                    <div className="bg-custom-card p-4 rounded-xl text-center">
                        <div className="text-2xl font-bold text-custom-text font-mono">124</div>
                        <div className="text-xs text-custom-muted uppercase tracking-wider mt-1">Submissions</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                        <span className="text-custom-accent">Easy</span>
                        <span className="text-custom-text font-mono">59 <span className="text-custom-muted">/ 929</span></span>
                    </div>
                    <div className="w-full h-2 bg-custom-card rounded-full overflow-hidden">
                        <div className="h-full bg-custom-accent w-[6.3%]"></div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-yellow-400">Medium</span>
                        <span className="text-custom-text font-mono">1 <span className="text-custom-muted">/ 2018</span></span>
                    </div>
                    <div className="w-full h-2 bg-custom-card rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 w-[0.1%]"></div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <span className="text-red-400">Hard</span>
                        <span className="text-custom-text font-mono">1 <span className="text-custom-muted">/ 912</span></span>
                    </div>
                    <div className="w-full h-2 bg-custom-card rounded-full overflow-hidden">
                        <div className="h-full bg-red-500 w-[0.1%]"></div>
                    </div>
                </div>
            </motion.div>

            {/* GitHub Detailed Card */}
            <div className="grid gap-6">
                 <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-custom-bg border border-custom-border rounded-2xl p-8 hover:border-custom-text/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-custom-card rounded-xl text-custom-text">
                            <Github className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-custom-text font-serif">GitHub</h3>
                            <p className="text-custom-muted text-sm">ADjayantan</p>
                        </div>
                    </div>
                    <a href="https://github.com/ADjayantan" target="_blank" rel="noopener noreferrer" className="text-sm text-custom-text hover:underline">View Profile</a>
                  </div>

                  <p className="text-custom-muted text-sm mb-6 leading-relaxed">
                    I am a B.E. Computer Science and Engineering Student pursuing a degree at V.S.B College of Engineering and Technical Campus.
                  </p>

                  <div className="bg-custom-card p-4 rounded-xl mb-6 flex items-center justify-between">
                    <span className="text-custom-muted text-sm">Contributions (Last Year)</span>
                    <span className="text-custom-accent font-mono font-bold text-xl">22</span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold text-custom-muted uppercase tracking-wider mb-2">Popular Repositories</h4>
                    
                    <a href="https://github.com/ADjayantan/AD-Jayantan-" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-custom-card hover:bg-custom-border transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-custom-primary font-medium text-sm">AD-Jayantan-</span>
                        <span className="text-xs text-custom-muted border border-custom-border px-1.5 py-0.5 rounded">Public</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-custom-muted">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span> HTML
                      </div>
                    </a>

                    <a href="https://github.com/ADjayantan/Jayantan-" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-custom-card hover:bg-custom-border transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-custom-primary font-medium text-sm">Jayantan-</span>
                        <span className="text-xs text-custom-muted border border-custom-border px-1.5 py-0.5 rounded">Public</span>
                      </div>
                      <p className="text-xs text-custom-muted mb-2 truncate">ai vioce assitance</p>
                      <div className="flex items-center gap-2 text-xs text-custom-muted">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> TypeScript
                      </div>
                    </a>

                    <a href="https://github.com/ADjayantan/java-master" target="_blank" rel="noopener noreferrer" className="block p-3 rounded-lg bg-custom-card hover:bg-custom-border transition-colors">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-custom-primary font-medium text-sm">java-master</span>
                        <span className="text-xs text-custom-muted border border-custom-border px-1.5 py-0.5 rounded">Public</span>
                      </div>
                      <p className="text-xs text-custom-muted mb-2 truncate">to learn java</p>
                      <div className="flex items-center gap-2 text-xs text-custom-muted">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span> TypeScript
                      </div>
                    </a>
                  </div>
                </motion.div>

                <motion.a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-custom-bg border border-custom-border hover:bg-green-900/10 hover:border-green-500/30 transition-all group"
                >
                  <div className="text-green-500 group-hover:scale-110 transition-transform">
                    <Terminal className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-custom-text font-serif">HackerRank</h3>
                    <p className="text-custom-muted text-sm">Problem solving and certifications</p>
                  </div>
                </motion.a>
            </div>
        </div>
      </div>
    </section>
  );
}
