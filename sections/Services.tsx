import { motion } from 'motion/react'
import { services } from '@/lib/mockData'
import { Card, CardContent } from '@/components/ui/Card'

export default function Services() {
  return (
    <section id="home" className="py-24 px-4 bg-gradient-to-b from-black to-[var(--royal-gray)]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive luxury catering and event management solutions tailored to your unique vision
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group h-full hover:border-[var(--royal-gold)]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--royal-gold)]/20 bg-gradient-to-br from-card to-black/50">
                  <CardContent className="p-8">
                    <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[var(--royal-gold)] group-hover:text-[var(--royal-gold-dark)] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
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
