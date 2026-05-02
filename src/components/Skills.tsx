import { motion } from 'motion/react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "JavaScript", "SQL"]
    },
    {
      title: "CS Fundamentals",
      skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git & GitHub", "Google AI Studio", "REST APIs", "Linux", "VS Code", "IntelliJ"]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-custom-card">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-custom-text mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-custom-primary rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-custom-bg border border-custom-border rounded-2xl p-8 hover:shadow-xl hover:shadow-custom-primary/5 transition-all"
            >
              <h3 className="text-xl font-bold font-serif text-custom-text mb-6 border-b border-custom-border pb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-custom-card text-custom-muted rounded-lg text-sm font-medium border border-custom-border hover:border-custom-primary/30 hover:text-custom-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
