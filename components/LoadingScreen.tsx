import { motion } from 'motion/react'
import { FaCrown } from 'react-icons/fa'

export default function LoadingScreen() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black'>
        <motion.div
         initial = {{ opacity: 0, scale: 0.8 }}
         animate = {{ opacity: 1, scale: 1 }}
         transition = {{ duration: 0.5 }}
         className='text-center'
        >
            <motion.div
             animate = {{
                scale: [1, 1.1, 1],
                rotate: [ 0, 360, 0],
             }}
             transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
             }}
            >
                <FaCrown className='w-20 h-20 text-[var(--royal-gold)] mx-auto mb-6' />
            </motion.div>

            <h2 className='text-2xl font-bold bg-gradient-to-r from-[var(--royal-gold)] to-[var(--royal-gold-dark)] bg-clip-text text-transparent'>
                Royal Caterer
            </h2>
            <div className="mt-6 flex gap-2 justify-center">
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                    className="w-2 h-2 rounded-full bg-[var(--royal-gold)]"
                />
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                    className="w-2 h-2 rounded-full bg-[var(--royal-gold)]"
                />
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                    className="w-2 h-2 rounded-full bg-[var(--royal-gold)]"
                />
            </div>
        </motion.div>
    </div>
  );
}
