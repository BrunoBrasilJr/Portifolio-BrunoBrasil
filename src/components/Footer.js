import React from 'react'

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-50 dark:bg-[#1A1A1A] transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 text-center text-gray-900 dark:text-gray-100">
        &copy; {new Date().getFullYear()} Bruno Brasil. Todos os direitos reservados.
      </div>
    </footer>
  )
}
