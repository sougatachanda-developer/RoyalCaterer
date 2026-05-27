import { Card, CardContent } from '@/components/ui/Card'
import { testimonials } from '@/lib/mockData'
import { motion } from 'motion/react'
import { FaStar } from 'react-icons/fa'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-gradient-to-b from-[var(--royal-gray)] to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Hear from the families and businesses who trusted us with their special moments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:border-[var(--royal-gold)]/50 transition-all duration-300 bg-gradient-to-br from-card to-black/50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[var(--royal-gold)]"
                      />
                      <div className="ml-4">
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="w-5 h-5 fill-[var(--royal-gold)] text-[var(--royal-gold)]" />
                      ))}
                    </div>
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
