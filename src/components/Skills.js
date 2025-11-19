import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Tailwind', level: 70 },
  { name: 'Git / GitHub', level: 65 }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">Habilidades</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
          Algumas das minhas competências técnicas.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillBar({ skill, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = skill.level
      const duration = 1000 + index * 200
      const increment = end / (duration / 16)

      const counter = setInterval(() => {
        start += increment
        if (start >= end) {
          start = end
          clearInterval(counter)
        }
        setValue(Math.round(start))
      }, 16)

      return () => clearInterval(counter)
    }
  }, [inView, skill.level, index])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex justify-between mb-2">
        <span className="text-gray-900 dark:text-gray-100 font-medium">{skill.name}</span>
        <span className="text-gray-900 dark:text-gray-100 font-medium">{value}%</span>
      </div>
      <div className="w-full h-4 bg-gray-200 dark:bg-[#222] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.5 }}
          className="h-4 bg-blue-500 dark:bg-blue-400 rounded-full"
        />
      </div>
    </motion.div>
  )
}
