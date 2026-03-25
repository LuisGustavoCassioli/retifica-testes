import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center"
            style={{ background: '#050505' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Animated ring */}
            <div className="relative flex items-center justify-center w-32 h-32 mb-8">
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-racing border-r-gold-racing"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
                />
                <motion.div
                    className="absolute inset-2 rounded-full border border-transparent border-b-[#7A6818] border-l-[#7A6818]"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                />

                {/* Center logo text */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <span
                        className="text-2xl font-black tracking-widest font-heading text-gold-racing"
                    >
                        B
                    </span>
                </motion.div>
            </div>

            {/* Brand name */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center"
            >
                <h1
                    className="text-4xl font-black tracking-[0.3em] uppercase mb-2 font-heading text-[#e0e0e0]"
                >
                    LESSED
                </h1>
                <p className="text-xs tracking-[0.5em] uppercase" style={{ color: '#9b9b9b' }}>
                    Retífica de Motores
                </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
                className="absolute bottom-16 w-48 h-px"
                style={{ background: '#1a1a1d' }}
            >
                <motion.div
                    className="h-full bg-linear-to-r from-gold-racing to-gold-bright"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                />
            </motion.div>
        </motion.div>
    )
}
