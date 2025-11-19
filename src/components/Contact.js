import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaDiscord, FaGithub } from 'react-icons/fa'

const contacts = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/cpx.brunow/',
    icon: <FaInstagram size={30} />
  },
  {
    name: 'Discord',
    link: 'https://discord.com/users/1198463524071022592',
    icon: <FaDiscord size={30} />
  },
  {
    name: 'GitHub',
    link: 'https://github.com/BrunoBrasilJr',
    icon: <FaGithub size={30} />
  }
]

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center">
          Minhas redes
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {contacts.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ type: 'spring', stiffness: 250, damping: 18, delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-gray-100 dark:bg-[#222] border border-gray-200 dark:border-[#333] text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-[#333] transition-colors duration-200"
            >
              {c.icon}
              <span className="text-sm">{c.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
