import { motion } from 'motion/react';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { Link } from 'react-scroll';
import { useTypewriter } from '../hooks/useTypewriter';
import { StarfieldCanvas } from './StarfieldCanvas';

import profilePhoto from '../assets/profile.png';

const socialLinks = [
  { icon: <Github size={22} />, url: 'https://github.com/ADjayantan', label: 'GitHub' },
  { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/ad-jayantan-766886320/', label: 'LinkedIn' },
  { icon: <Code2 size={22} />, url: 'https://leetcode.com/u/jayantan/', label: 'LeetCode' },
];

export const Hero = () => {
  const words = ['Full Stack Developer', 'Java Backend Dev', 'DSA Problem Solver', 'Open Source Builder'];
  const typewriterText = useTypewriter(words);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <StarfieldCanvas />

      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-accent/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-accent/5 border border-accent/20 mb-6 cursor-pointer hover:bg-accent/10 transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-accent font-medium">
              Available for opportunities
            </span>
          </Link>

          <h1 className="text-5xl md:text-7xl mb-4 leading-tight">
            Hi, I'm <br />
            <span className="text-accent">Jayantan</span>
          </h1>

          <div className="h-8 md:h-10 mb-6">
            <span className="text-xl md:text-2xl font-mono text-gray-400">
              {typewriterText}
              <span className="animate-pulse ml-1 text-accent">|</span>
            </span>
          </div>

          <p className="text-base md:text-lg text-gray-400 max-w-lg mb-10 leading-relaxed">
            Computer Science student at VSB College of Engineering building high-performance full-stack applications
            with Java and React. Focused on solving complex real-world problems through clean code.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-accent text-bg font-bold rounded-xl hover:bg-white transition-all cursor-pointer shadow-lg shadow-accent/20"
            >
              View Projects
            </Link>
            <a
              href="/portfolio/resume.pdf"
              download="Jayantan_Resume.pdf"
              className="px-8 py-3 border border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all"
            >
              Download Resume
            </a>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-accent transition-all transform hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column — HUD / Holographic Profile */}
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative flex justify-center items-center"
          >
            {/* Outer ambient glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-accent/15 blur-[80px]" />

            {/* Slow-rotating conic ring */}
            <div
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 60%, #00e5ff 80%, transparent 100%)',
                animation: 'hud-spin 8s linear infinite',
              }}
            />
            <div
              className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
              style={{
                background: 'conic-gradient(from 180deg, transparent 60%, #0077ff 80%, transparent 100%)',
                animation: 'hud-spin 8s linear infinite reverse',
              }}
            />

            {/* Dashed orbit ring */}
            <div
              className="absolute w-64 h-64 md:w-[340px] md:h-[340px] rounded-full"
              style={{
                border: '1px dashed rgba(0,229,255,0.25)',
                animation: 'hud-spin 20s linear infinite',
              }}
            />

            {/* Ping pulses */}
            <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-accent/20 animate-ping" style={{ animationDuration: '2.5s' }} />

            {/* HUD corner brackets */}
            <div className="absolute w-56 h-56 md:w-72 md:h-72">
              {[
                { top: 0,    left: 0,    borderTop: '2px solid #00e5ff', borderLeft: '2px solid #00e5ff',   borderRadius: '3px 0 0 0' },
                { top: 0,    right: 0,   borderTop: '2px solid #00e5ff', borderRight: '2px solid #00e5ff',  borderRadius: '0 3px 0 0' },
                { bottom: 0, left: 0,    borderBottom: '2px solid #00e5ff', borderLeft: '2px solid #00e5ff',  borderRadius: '0 0 0 3px' },
                { bottom: 0, right: 0,   borderBottom: '2px solid #00e5ff', borderRight: '2px solid #00e5ff', borderRadius: '0 0 3px 0' },
              ].map((s, i) => (
                <div key={i} className="absolute w-6 h-6" style={{ ...s, position: 'absolute' }} />
              ))}
            </div>

            {/* Hexagonal photo frame */}
            <div
              className="relative w-52 h-52 md:w-64 md:h-64"
              style={{
                clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              }}
            >
              {/* Scanline grid overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(0,229,255,0.12) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,229,255,0.12) 1px, transparent 1px)
                  `,
                  backgroundSize: '18px 18px',
                }}
              />
              {/* Scan sweep */}
              <div
                className="absolute inset-x-0 z-20 pointer-events-none"
                style={{
                  height: '40%',
                  background: 'linear-gradient(to bottom, transparent, rgba(0,229,255,0.08), transparent)',
                  animation: 'scan-sweep 3s ease-in-out infinite',
                }}
              />
              {/* Photo */}
              <img
                src={profilePhoto}
                alt="Jayantan"
                className="relative z-0 w-full h-full object-cover object-top"
                style={{ transform: 'scale(1.08)' }}
              />
              {/* Bottom cyan gradient bleed */}
              <div className="absolute inset-0 z-30 bg-gradient-to-t from-accent/30 via-transparent to-transparent" />
            </div>

            {/* Floating Badges */}
            {[
              { label: '500+ DSA', pos: 'top-2 -left-8', delay: 0.4 },
              { label: '5+ Projects', pos: 'bottom-8 -right-10', delay: 0.6 },
              { label: '2+ Years', pos: 'top-16 -right-12', delay: 0.8 },
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: badge.delay, duration: 0.5 }}
                className={`absolute ${badge.pos} glass-card px-4 py-2 border-accent/30 shadow-xl shadow-bg/50 hidden sm:block`}
              >
                <span className="text-xs md:text-sm font-mono font-bold text-accent">{badge.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes hud-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes scan-sweep {
          0%   { top: -40%; }
          50%  { top: 100%; }
          100% { top: -40%; }
        }
      `}</style>
    </section>
  );
};
