import Link from 'next/link'
import { FaCrown, FaPhoneAlt } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaLocationDot, FaYoutube } from 'react-icons/fa6'
import { IoMdMail } from 'react-icons/io'

export default function Footer() {
  return (
    <footer className='bg-black border-t border-[var(--royal-gold)]/20 pt-16 pb-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
                
                {/* 1st Column */}
                <div>
                    <div className='flex items-center space-x-3 mb-6'>
                        <FaCrown className="w-8 h-8 text-[var(--royal-gold)]" />
                        <span className="text-xl font-bold bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent">
                            Royal Caterer
                        </span>
                    </div>
                    <p className='text-gray-400 text-sm leading-relaxed mb-6'>
                      Premium luxury catering and event management services for weddings, corporate events, and private celebrations. 
                    </p>
                    <div className='flex space-x-4'>
                        <a 
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--royal-gold)]/20 border border-[var(--royal-gold)]/20 flex items-center justify-center text-[var(--royal-gold)] transition-all duration-300 hover:scale-110"
                        >
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--royal-gold)]/20 border border-[var(--royal-gold)]/20 flex items-center justify-center text-[var(--royal-gold)] transition-all duration-300 hover:scale-110"
                        >
                            <FaFacebookF className="w-5 h-5" />
                        </a>
                        <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-white/5 hover:bg-[var(--royal-gold)]/20 border border-[var(--royal-gold)]/20 flex items-center justify-center text-[var(--royal-gold)] transition-all duration-300 hover:scale-110"
                        >
                            <FaYoutube className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* 2nd Column */}
                <div>
                    <h3 className='text-[var(--royal-gold)] font-semibold mb-6'>Quick Links</h3>
                    <ul className='space-y-3'>
                        <li>
                            <Link href={"/"} className='text-gray-400 hover:text-[var(--royal-gold)] transition-colors text-sm'>
                            Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/gallery"} className='text-gray-400 hover:text-[var(--royal-gold)] transition-colors text-sm' >
                            Gallery
                            </Link>
                        </li>
                        <li><Link href={"/gallery"} className='text-gray-400 hover:text-[var(--royal-gold)] transition-colors text-sm' >
                            Services
                            </Link>
                        </li>
                        <li><Link href={"/gallery"} className='text-gray-400 hover:text-[var(--royal-gold)] transition-colors text-sm' >
                            Testimonials
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* 3rd Column */}
                <div>
                    <h3 className="text-[var(--royal-gold)] font-semibold mb-6">Services</h3>
                    <ul className="space-y-3">
                        <li className="text-gray-400 text-sm">Wedding Catering</li>
                        <li className="text-gray-400 text-sm">Corporate Events</li>
                        <li className="text-gray-400 text-sm">Private Parties</li>
                        <li className="text-gray-400 text-sm">Event Management</li>
                    </ul>
                </div>

                {/* 4th Column */}
                <div>
                    <h3 className="text-[var(--royal-gold)] font-semibold mb-6">Contact</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start space-x-3 text-gray-400 text-sm">
                            <FaPhoneAlt className="w-5 h-5 text-[var(--royal-gold)] mt-0.5 flex-shrink-0" />
                            <div>
                                <a href="tel:+919876543210" className="hover:text-[var(--royal-gold)] transition-colors">
                                    +91 98765 43210
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3 text-gray-400 text-sm">
                            <IoMdMail className="w-5 h-5 text-[var(--royal-gold)] mt-0.5 flex-shrink-0" />
                            <div>
                                <a href="mailto:info@royalcaterer.com" className="hover:text-[var(--royal-gold)] transition-colors">
                                    info@royalcaterer.com
                                </a>
                            </div>
                        </li>
                        <li className="flex items-start space-x-3 text-gray-400 text-sm">
                            <FaLocationDot className="w-5 h-5 text-[var(--royal-gold)] mt-0.5 flex-shrink-0" />
                            <span>Balichak, West Bengal, India</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Footer Lincensing */}
            <div className='border-t border-[var(--royal-gold)]/20 pt-8'>
              <div className="text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Royal Caterer. All rights reserved.</p>
              </div>
            </div>
        </div>
    </footer>
  )
}

