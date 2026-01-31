'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-bold">
            편도훈
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#profile" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              프로필
            </a>
            <a href="#tech" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              기술 스택
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              프로젝트
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              연락처
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
