import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true)
      else setVisible(false)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 600, smooth: true })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-6 right-6 z-50
        p-4 rounded-full bg-blue-500 text-white shadow-lg
        hover:bg-blue-600 transition-opacity duration-300
        ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
    >
      <FaArrowUp size={20} />
    </button>
  )
}
