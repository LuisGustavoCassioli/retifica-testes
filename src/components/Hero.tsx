import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

    return (
        <section
            ref={ref}
            id="inicio"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Parallax Background */}
            <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
                <img
                    src="/hero-engine.png"
                    alt="Motor de alto desempenho"
                    className="w-full h-full object-cover"
                    style={{ filter: 'brightness(0.25) saturate(0.8)' }}
                />
            </motion.div>

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        'linear-gradient(to bottom, rgba(5,5,5,0.3) 0%, rgba(5,5,5,0) 40%, rgba(5,5,5,0.95) 100%)',
                }}
            />

            {/* Radial glow */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse 60% 40% at 50% 60%, rgba(207,181,59,0.12) 0%, transparent 70%)',
                }}
            />

            {/* Grid lines */}
            <div
                className="absolute inset-0 z-0 opacity-5"
                style={{
                    backgroundImage:
                        'linear-gradient(rgba(207,181,59,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(207,181,59,0.5) 1px, transparent 1px)',
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Content */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 text-center"
                style={{ opacity }}
            >
                {/* Tag line */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex items-center justify-center gap-3 mb-8"
                >
                    <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, transparent, #CFB53B)' }} />
                    <span className="text-xs tracking-[0.4em] uppercase font-semibold" style={{ color: '#CFB53B' }}>
                        Engenharia de Alto Desempenho
                    </span>
                    <div className="h-px w-16" style={{ background: 'linear-gradient(90deg, #CFB53B, transparent)' }} />
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    className="text-5xl md:text-7xl xl:text-8xl font-black uppercase leading-none mb-6"
                    style={{ fontFamily: "'Rajdhani', 'Impact', sans-serif", letterSpacing: '0.02em' }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="block" style={{ color: '#e0e0e0' }}>POTÊNCIA</span>
                    <span className="block" style={{ color: '#CFB53B' }}>
                        RECONSTRUÍDA.
                    </span>
                    <span className="block" style={{ color: '#e0e0e0' }}>PRECISÃO ABSOLUTA.</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    className="text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
                    style={{ color: '#9b9b9b', fontWeight: 400 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Retífica e reconstrução de motores com padrão de engenharia de alto desempenho.
                    Cada detalhe importa. Cada milímetro é preciso.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="#contato"
                        className="group relative px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, #CFB53B, #9A8420)',
                            color: '#111111',
                            clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                            boxShadow: '0 0 30px rgba(207,181,59,0.4)',
                        }}
                    >
                        <span className="relative z-10">Solicitar Orçamento</span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'linear-gradient(135deg, #DCC84E, #CFB53B)' }}
                        />
                    </a>

                    <a
                        href="#servicos"
                        className="group px-8 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 border relative overflow-hidden"
                        style={{
                            borderColor: 'rgba(207,181,59,0.5)',
                            color: '#e0e0e0',
                            clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
                        }}
                    >
                        <span className="relative z-10">Ver Serviços</span>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ background: 'rgba(207,181,59,0.08)' }}
                        />
                    </a>
                </motion.div>

                {/* Stats row */}
                <motion.div
                    className="flex items-center justify-center gap-12 mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    {[
                        { value: '+2000', label: 'Motores Reconstruídos' },
                        { value: '15+', label: 'Anos de Experiência' },
                        { value: '100%', label: 'Garantia de Qualidade' },
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div
                                className="text-3xl md:text-4xl font-black"
                                style={{
                                    fontFamily: "'Rajdhani', 'Impact', sans-serif",
                                    color: '#CFB53B',
                                }}
                            >
                                {stat.value}
                            </div>
                            <div className="text-xs tracking-widest uppercase mt-1" style={{ color: '#9b9b9b' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <span className="text-xs tracking-widest uppercase" style={{ color: '#9b9b9b' }}>Scroll</span>
                <ChevronDown size={20} style={{ color: '#CFB53B' }} />
            </motion.div>
        </section>
    )
}
