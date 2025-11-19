import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: 'Site Restaurante',
    description: 'Projeto de site de restaurante feito por mim.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/BrunoBrasilJr/SiteRestaurante'
  },
  {
    id: 2,
    title: 'Projeto Carros',
    description: 'Sistema de gerenciamento de carros.',
    tech: ['React', 'Tailwind', 'JavaScript'],
    link: 'https://github.com/BrunoBrasilJr/Carros'
  },
  {
    id: 3,
    title: 'Cadastrar Cursos',
    description: 'Aplicativo para cadastrar cursos.',
    tech: ['React', 'JavaScript', 'CSS'],
    link: 'https://github.com/BrunoBrasilJr/cadatrar-cursos'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Projetos</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          Aqui você pode visualizar meus projetos.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="
                block p-5 
                bg-gray-50 dark:bg-[#222] 
                rounded-2xl 
                border border-gray-200 dark:border-[#333] 
                transition-colors duration-300
                hover:bg-gray-100 dark:hover:bg-[#2a2a2a]
              "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20, delay: i * 0.05 }}
            >
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100 hover:underline">
                {p.title}
              </h3>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                {p.description}
              </p>

              <div className="mt-4 flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                {p.tech.map(t => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-gray-100 dark:bg-[#333] border border-gray-200 dark:border-[#333] rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  )
}
