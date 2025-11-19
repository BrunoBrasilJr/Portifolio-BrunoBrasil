import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

        {/* Texto animado */}
        <motion.div
          className="flex-1 text-gray-900 dark:text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">
  Eu sou <span className="text-blue-500 dark:text-blue-400">Bruno Brasil</span>, transformando ideias em código!</h1>
          <p className="text-lg mb-6">
            Bem-vindo ao meu portfólio. Aqui você verá meus projetos e experiências.
          </p>
        </motion.div>

        {/* Foto permanece estática */}
        <div className="w-60 h-60 rounded-2xl overflow-hidden border-4 border-gray-200 dark:border-[#333]">
          <img
            src="/foto-portifolio.jpeg"
            alt="Bruno Brasil"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}
