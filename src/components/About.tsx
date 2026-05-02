import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import profilePhoto from '../assets/profile.png';

interface GitHubStats { repos: number; }
interface LeetCodeStats { solved: number; easy: number; medium: number; hard: number; }

export const About = () => {
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null);
  const [lcStats, setLcStats] = useState<LeetCodeStats | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/users/ADjayantan')
      .then(r => r.json())
      .then(data => { if (data.public_repos !== undefined) setGhStats({ repos: data.public_repos }); })
      .catch(() => setGhStats({ repos: 15 }));
  }, []);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/jayantan')
      .then(r => r.json())
      .then(data => {
        if (data.status === 'success') setLcStats({ solved: data.totalSolved, easy: data.easySolved, medium: data.mediumSolved, hard: data.hardSolved });
        else throw new Error();
      })
      .catch(() => setLcStats({ solved: 500, easy: 200, medium: 230, hard: 70 }));
  }, []);

  const stats = [
    { label: 'LeetCode Solved', value: lcStats ? `${lcStats.solved}` : '…', sub: lcStats ? `${lcStats.easy}E · ${lcStats.medium}M · ${lcStats.hard}H` : '' },
    { label: 'GitHub Repos', value: ghStats ? `${ghStats.repos}+` : '…', sub: 'Public repositories' },
    { label: 'Projects Built', value: '5+', sub: 'Full-stack apps' },
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: HUD Photo */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex justify-center">
            <div className="relative flex justify-center items-center w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-accent/15 blur-[60px]" />
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, transparent 60%, #00e5ff 80%, transparent 100%)', animation: 'hud-spin 8s linear infinite' }} />
              <div className="absolute inset-0 rounded-full" style={{ border: '1px dashed rgba(0,229,255,0.2)', animation: 'hud-spin 20s linear infinite reverse' }} />
              <div className="relative w-44 h-44 md:w-56 md:h-56 overflow-hidden" style={{ clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)' }}>
                <img src={profilePhoto} alt="Jayantan" className="w-full h-full object-cover object-top" style={{ transform: 'scale(1.08)' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/25 via-transparent to-transparent" />
              </div>
              <style>{`@keyframes hud-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="font-mono text-accent text-sm tracking-widest mb-4 block uppercase font-bold">// about_me</span>
            <h2 className="text-4xl md:text-5xl mb-6">Passionate Developer</h2>
            <div className="space-y-4 text-gray-400 mb-10 leading-relaxed">
              <p>I am a Computer Science student with a deep fascination for backend architectures and data structures. My workflow is built on <span className="text-white italic">Java</span> and <span className="text-white italic">React</span>, leveraging DSA skills to optimize performance.</p>
              <p>Beyond code, I'm an enthusiast of photography and a huge fan of Tamil cinema scores. I believe that building software is an art form — one that requires as much creativity as it does logic.</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <div className="text-xl md:text-2xl font-heading text-accent mb-1">{stat.value}</div>
                  <div className="text-[10px] md:text-xs font-mono uppercase text-gray-500">{stat.label}</div>
                  {stat.sub && <div className="text-[9px] font-mono text-gray-600 mt-1">{stat.sub}</div>}
                </div>
              ))}
            </div>
            <a href="/portfolio/resume.pdf" download="Jayantan_Resume.pdf" className="px-8 py-3 border border-accent text-accent rounded-xl font-bold hover:bg-accent/5 transition-colors">Download CV</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
