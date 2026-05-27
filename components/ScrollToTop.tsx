'use client';
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const toggleScrollBtnVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleScrollBtnVisibility);
        return () => window.removeEventListener('scroll',toggleScrollBtnVisibility);
    }, []);

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

  return (
    <AnimatePresence>
        {isVisible && (
            <motion.button
            initial = {{ opacity: 0, scale: 0.5}}
            animate = {{ opacity: 1, scale: 1}}
            exit = {{ opacity: 0, scale: 0.5}}
            onClick={scrollToTop}
            className='fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-[var(--royal-gold)] hover:bg-[var(--royal-gold-dark)] text-black shadow-lg shadow-[var(--royal-gold)]/50 flex items-center justify-center transition-all duration-300 hover:scale-110'
            >
                <FaArrowUp className='w-6 h-6' />
            </motion.button>
        )}
    </AnimatePresence>
  );
}
