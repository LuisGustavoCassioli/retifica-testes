import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Target, Cpu, Star, Clock } from 'lucide-react'

const items = [
    {
        icon: Target,
        title: 'Alta Precisão Técnica',
        description: 'Tolerâncias em micrômetros. Cada componente medido e validado por instrumentação de precisão.',
    },
    {
        icon: Cpu,
        title: 'Equipamentos Modernos',
        description: 'Usinagem CNC, análise digital e diagnóstico computadorizado. Tecnologia atual, resultados superiores.',
    },
    {
        icon: Star,
        title: 'Atendimento Especializado',
        description: 'Técnicos com formação específica e atualização constante. Diagnóstico honesto, soluções reais.',
    },
    {
        icon: Clock,
        title: 'Performance e Durabilidade',
        description: 'Motor com potência recuperada e vida útil estendida. Qualidade que se prova na estrada.',
    },
]

export default function Differentials() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="diferenciais"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, #0a0a0a 0%, #0e0e10 50%, #080808 100%)',
            }}
        >
            {/* Background text watermark */}
            <div
                className="absolute right-0 top-1/2 -translate-y-1/2 text-[200px] font-black uppercase select-none pointer-events-none leading-none"
                style={{
                    color: 'rgba(207,181,59,0.025)',
                    fontFamily: "'Rajdhani', 'Impact', sans-serif",
                    right: '-2rem',
                }}
            >
                BLESSED
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12" style={{ background: '#CFB53B' }} />
                        <span className="text-xs tracking-[0.4em] uppercase font-semibold" style={{ color: '#CFB53B' }}>
                            Por que escolher
                        </span>
                        <div className="h-px w-12" style={{ background: '#CFB53B' }} />
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-black uppercase"
                        style={{ fontFamily: "'Rajdhani', 'Impact', sans-serif", color: '#e0e0e0', letterSpacing: '0.02em' }}
                    >
                        Nossos Diferenciais
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={item.title}
                                className="group relative text-center p-8 border transition-all duration-500 cursor-default"
                                style={{
                                    background: 'linear-gradient(160deg, #0e0e10, #111113)',
                                    borderColor: 'rgba(255,255,255,0.05)',
                                }}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.12 }}
                                whileHover={{
                                    borderColor: 'rgba(207,181,59,0.35)',
                                    boxShadow: '0 8px 40px rgba(207,181,59,0.1), 0 0 1px rgba(207,181,59,0.2)',
                                    y: -6,
                                }}
                            >
                                {/* Glow dot top */}
                                <div
                                    className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ background: 'linear-gradient(180deg, transparent, #CFB53B)' }}
                                />

                                {/* Icon */}
                                <div
                                    className="w-16 h-16 mx-auto mb-6 flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(207,181,59,0.12) 0%, transparent 70%)',
                                        border: '1px solid rgba(207,181,59,0.15)',
                                    }}
                                >
                                    <Icon size={28} style={{ color: '#CFB53B' }} />
                                </div>

                                <h3
                                    className="text-lg font-bold uppercase mb-3 tracking-wide"
                                    style={{ fontFamily: "'Rajdhani', 'Impact', sans-serif", color: '#e0e0e0' }}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-sm leading-relaxed" style={{ color: '#9b9b9b' }}>
                                    {item.description}
                                </p>

                                {/* Bottom accent */}
                                <div
                                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-1/2 transition-all duration-500"
                                    style={{ background: '#CFB53B' }}
                                />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
