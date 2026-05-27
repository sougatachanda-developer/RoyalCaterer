import { Card, CardContent } from '@/components/ui/Card'
import { motion } from 'motion/react'
import { FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'
import { LuMail } from 'react-icons/lu'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-black to-[var(--royal-maroon)]/10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">
              Ready to make your event extraordinary? Contact us today
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-[var(--royal-gold)]/30 bg-gradient-to-br from-card to-black/50">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <a
                    href="tel:+919876543210"
                    className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-[var(--royal-gold)]/10 border border-[var(--royal-gold)]/20 hover:border-[var(--royal-gold)]/50 transition-all duration-300 group"
                  >
                    <FiPhone className="w-12 h-12 text-[var(--royal-gold)] mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400 mb-2">Call Us</span>
                    <span className="font-semibold text-[var(--royal-gold)]">+91 98765 43210</span>
                  </a>

                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-[var(--royal-gold)]/10 border border-[var(--royal-gold)]/20 hover:border-[var(--royal-gold)]/50 transition-all duration-300 group"
                  >
                    <FaWhatsapp className="w-12 h-12 text-[var(--royal-gold)] mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400 mb-2">WhatsApp</span>
                    <span className="font-semibold text-[var(--royal-gold)]">Chat Now</span>
                  </a>

                  <a
                    href="mailto:info@royalcaterer.com"
                    className="flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-[var(--royal-gold)]/10 border border-[var(--royal-gold)]/20 hover:border-[var(--royal-gold)]/50 transition-all duration-300 group"
                  >
                    <LuMail className="w-12 h-12 text-[var(--royal-gold)] mb-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400 mb-2">Email Us</span>
                    <span className="font-semibold text-[var(--royal-gold)]">info@royalcaterer.com</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
  )
}
