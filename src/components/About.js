import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">Trajetória</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-center">
          Aqui você conhece minha formação e experiências acadêmicas.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Educação */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center bg-gray-100 dark:bg-[#222] p-6 rounded-2xl border border-gray-200 dark:border-[#333] shadow-md"
          >
            <FaGraduationCap size={40} className="text-gray-900 dark:text-gray-100 mb-4" />
            <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-2">Formação</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Ensino Médio completo pela Etec Martinho Di Ciero, Itu/SP. <br/>
              Curso de Desenvolvimento de Sistemas.
            </p>
          </motion.div>

          {/* Curso Atual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center bg-gray-100 dark:bg-[#222] p-6 rounded-2xl border border-gray-200 dark:border-[#333] shadow-md"
          >
            <FaLaptopCode size={40} className="text-gray-900 dark:text-gray-100 mb-4" />
            <h3 className="font-semibold text-xl text-gray-900 dark:text-gray-100 mb-2">Curso Atual</h3>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Atualmente cursando Análise e Desenvolvimento de Sistemas na Fatec, Itu/SP, 4º ano.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
