'use client';
import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'
import { FaCrown } from 'react-icons/fa';
import { FaBars, FaXmark } from 'react-icons/fa6';

export default function Navbar() {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('home');
    const pathname = usePathname();

    const navLinks = [
        {name: 'Home', href: '/', section: 'home'},
        {name: 'Gallery', href: '/gallery'},
        {name: 'Contact', href: '/#contact', section: 'contact'},
        
    ];

    useEffect(() => {

        if(pathname !== '/') return;

        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6 // 30% page is visible {50% - 0.5 , 60% - 0.6}
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [pathname]);

    const isActiveMenu = (href?:string, section?:string) => {
        // if (href === '/') 
        //     return pathname === '/' && hash === '';
        if(pathname === '/' && section) 
            return activeSection === section;

        return pathname === href;
    }

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-[var(--royal-gold)]/30'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-20'>
                {/* Logo */}
                <Link href={'/'} className='flex items-center space-x-3 group'>
                    <div className='relative'>
                        <FaCrown className='w-8 h-8 text-[var(--royal-gold)] group-hover:scale-110 transition-transform duration-300' />
                        <div className="absolute inset-0 bg-[var(--royal-gold)] blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"/>
                    </div>
                    <span className='text-2xl font-bold bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent'>
                        Royal Caterer
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className='hidden md:flex items-center space-x-8'>
                    {navLinks.map((link) => (
                        <Link href={link.href} key={link.href}
                        className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                          isActiveMenu(link.href, link.section)
                            ? 'text-[var(--royal-gold)]'
                            : 'text-gray-300 hover:text-[var(--royal-gold)]'
                        }`}
                        >
                            {link.name}
                            {isActiveMenu(link.href, link.section) && (
                                <motion.div
                                layoutId='navbar-indicator'
                                className='absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--royal-gold)]'
                                transition={{ type: "spring", stiffness: 380, damping: 30}}
                                />
                            )}
                        </Link>
                    ))}
                    {/* Login Button if required, then add <Link><Button/></Link> */}
                </div>

                {/* Hamburger menu for mobile devices */}
                <button onClick={()=> setIsOpen(!isOpen)}
                            className='md:hidden p-2 rounded-lg text-[var(--royal-gold)] hover:bg-white/10 transition-colors'
                >
                            { isOpen ? <FaXmark className='w-6 h-6' /> : <FaBars className='w-6 h-6' />}
                </button>
            </div>
        </div>

        {/* Hamburger Menu Items */}
        <AnimatePresence>
            {isOpen && (
                <motion.div
                   initial = {{opacity: 0, height: 0}}
                   animate = {{opacity: 1, height: 'auto'}}
                   exit = {{opacity: 0, height:0}}
                   transition = {{duration: 0.3}}
                   className='md:hidden border-t border-[var(--royal-gold)]/20 bg-black/95 backdrop-blur-xl'
                >
                    <div className='px-4 py-4 space-y-3'>
                        {navLinks.map((link) => (
                            <Link href={link.href} key={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                isActiveMenu(link.href, link.section)
                                ? 'bg-[var(--royal-gold)]/30 text-[var(--royal-gold)]'
                                : 'text-gray-300 hover:bg-[var(--royal-gold)]/20'
                            }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Login Button if required, then add <Link><Button/></Link>  */}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </nav>
  )
}
