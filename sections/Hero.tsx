import React, { Ref } from 'react'
import { Button } from '@/components/ui/Button';
import { motion } from 'motion/react'
import Link from 'next/link';
import { FaCrown } from 'react-icons/fa';
import { HeroSectionProps } from '@/Interfaces/Interface';

export default function Hero({ heroReference, opacity, scale }:HeroSectionProps) {
  return (
    <section ref={heroReference} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[var(--royal-maroon)]/20 to-black" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--royal-gold)] rounded-full opacity-10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--royal-maroon)] rounded-full opacity-10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <motion.div
          style={{ opacity, scale }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <FaCrown className="w-16 h-16 mx-auto text-[var(--royal-gold)] mb-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--royal-gold)] via-white to-[var(--royal-gold)] bg-clip-text text-transparent"
          >
            Royal Caterer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 leading-relaxed"
          >
            Luxury Event Catering & Management
            <br />
            <span className="text-[var(--royal-gold)]">Creating Unforgettable Moments</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact">
              <Button variant="secondary" size="lg" className="min-w-[200px]">
                Book Now
              </Button>
            </a>
            <Link href="/gallery">
              <Button variant="outline" size="lg" className="min-w-[200px]">
                View Gallery
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[var(--royal-gold)] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-[var(--royal-gold)] rounded-full animate-pulse" />
          </div>
        </div>
      </section>
  )
}
