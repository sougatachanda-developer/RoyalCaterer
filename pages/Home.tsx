'use client';

import Contact from '@/sections/Contact';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Testimonials from '@/sections/Testimonials';
import { useScroll, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react'

export default function HomePage() {

    const heroSectionReference = useRef<HTMLDivElement>(null);
    const { scrollYProgress} = useScroll({
        target: heroSectionReference,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            setTimeout(() => {
                const element = document.querySelector(hash);
                element?.scrollIntoView({ behavior: 'smooth'});
            }, 100);
        }
    }, []);

  return (
    <div className="min-h-screen">
      <Hero heroReference={heroSectionReference} opacity={opacity} scale={scale}/>
      <Services />
      <Testimonials />
      <Contact />
    </div>
  )
}
