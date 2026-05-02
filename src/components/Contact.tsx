import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Check if Firebase config is available (it might not be in dev without .env setup)
      if (!db) {
        console.warn("Firebase is not initialized. Form data:", data);
        // Simulate success for preview purposes
        await new Promise(resolve => setTimeout(resolve, 1000));
        setSubmitStatus('success');
        reset();
        return;
      }

      await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: serverTimestamp()
      });
      
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-custom-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-custom-text mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-custom-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg text-custom-muted mb-8 leading-relaxed">
              I'm currently looking for internships and entry-level opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <a href="mailto:adjayantan2007@gmail.com" className="flex items-center gap-4 text-custom-muted hover:text-custom-primary transition-colors p-4 bg-custom-card rounded-xl border border-custom-border hover:border-custom-primary/50 group">
                <div className="w-12 h-12 bg-custom-bg rounded-lg flex items-center justify-center text-custom-primary group-hover:bg-custom-primary/10">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-custom-text">Email</h4>
                  <p className="text-sm text-custom-muted">adjayantan2007@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-custom-muted p-4 bg-custom-card rounded-xl border border-custom-border group">
                <div className="w-12 h-12 bg-custom-bg rounded-lg flex items-center justify-center text-custom-primary group-hover:bg-custom-primary/10 transition-colors">
                  <span className="font-bold text-lg">📞</span>
                </div>
                <div>
                  <h4 className="font-medium text-custom-text">Phone</h4>
                  <p className="text-sm text-custom-muted">8610852612</p>
                </div>
              </div>

              <a href="https://www.linkedin.com/in/ad-jayantan-766886320" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-custom-muted hover:text-custom-primary transition-colors p-4 bg-custom-card rounded-xl border border-custom-border hover:border-custom-primary/50 group">
                <div className="w-12 h-12 bg-custom-bg rounded-lg flex items-center justify-center text-custom-primary group-hover:bg-custom-primary/10">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-custom-text">LinkedIn</h4>
                  <p className="text-sm text-custom-muted">Jayantan AD</p>
                </div>
              </a>

              <a href="https://github.com/ADjayantan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-custom-muted hover:text-custom-primary transition-colors p-4 bg-custom-card rounded-xl border border-custom-border hover:border-custom-primary/50 group">
                <div className="w-12 h-12 bg-custom-bg rounded-lg flex items-center justify-center text-custom-primary group-hover:bg-custom-primary/10">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-medium text-custom-text">GitHub</h4>
                  <p className="text-sm text-custom-muted">github.com/ADjayantan</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-custom-card p-8 rounded-2xl border border-custom-border"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-custom-muted mb-2">Name</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  type="text"
                  className="w-full bg-custom-bg border border-custom-border rounded-lg px-4 py-3 text-custom-text focus:outline-none focus:border-custom-primary focus:ring-1 focus:ring-custom-primary transition-all"
                  placeholder="Your Name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-custom-muted mb-2">Email</label>
                <input
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  className="w-full bg-custom-bg border border-custom-border rounded-lg px-4 py-3 text-custom-text focus:outline-none focus:border-custom-primary focus:ring-1 focus:ring-custom-primary transition-all"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-custom-muted mb-2">Message</label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows={4}
                  className="w-full bg-custom-bg border border-custom-border rounded-lg px-4 py-3 text-custom-text focus:outline-none focus:border-custom-primary focus:ring-1 focus:ring-custom-primary transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-custom-primary hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-custom-primary/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="text-custom-primary text-sm text-center bg-custom-primary/10 py-2 rounded-lg border border-custom-primary/20">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-sm text-center bg-red-500/10 py-2 rounded-lg border border-red-500/20">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
