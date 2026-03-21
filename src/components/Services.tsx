import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wrench, Activity, Zap, Shield } from 'lucide-react'

const services = [
    {
        icon: Wrench,
        title: 'Retífica Completa',
        description:
            'Desmontagem total, inspeção, usinagem de precisão e remontagem com componentes de qualidade OEM ou superior.',
        highlight: 'Do bloco ao acabamento',
    },
    {
        icon: Activity,
        title: 'Diagnóstico Avançado',
        description:
            'Análise computadorizada completa com equipamentos de última geração para identificar qualquer falha ou desgaste.',
        highlight: 'Tecnologia de ponta',
    },
    {
        icon: Zap,
        title: 'Preparação Performance',
        description:
            'Aumento de potência, modificações internas, balanceamento dinâmico e otimização para máximo rendimento.',
        highlight: 'Potência máxima',
    },
    {
        icon: Shield,
        title: 'Manutenção Especializada',
        description:
            'Revisões preventivas com protocolos rigorosos, substituição certificada de peças e monitoramento contínuo.',
        highlight: 'Durabilidade garantida',
    },
]

export default function Services() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            id="servicos"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: '#080808' }}
        >
            {/* Decorative top border */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #CFB53B, transparent)' }} />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12" style={{ background: '#CFB53B' }} />
                        <span className="text-xs tracking-[0.4em] uppercase font-semibold" style={{ color: '#CFB53B' }}>
                            O que fazemos
                        </span>
                        <div className="h-px w-12" style={{ background: '#CFB53B' }} />
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-black uppercase"
                        style={{ fontFamily: "'Rajdhani', 'Impact', sans-serif", color: '#e0e0e0', letterSpacing: '0.02em' }}
                    >
                        Nossos Serviços
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: '#9b9b9b' }}>
                        Soluções completas em engenharia automotiva com tecnologia de última geração e profissionais certificados.
                    </p>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((s, i) => {
                        const Icon = s.icon
                        return (
                            <motion.div
                                key={s.title}
                                className="group relative p-8 border cursor-default transition-all duration-500"
                                style={{
                                    background: 'linear-gradient(145deg, #0e0e10, #111113)',
                                    borderColor: 'rgba(255,255,255,0.06)',
                                }}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 0.1 * i }}
                                whileHover={{
                                    borderColor: 'rgba(207,181,59,0.4)',
                                    boxShadow: '0 0 40px rgba(207,181,59,0.12), inset 0 0 40px rgba(207,181,59,0.04)',
                                    y: -4,
                                }}
                            >
                                {/* Corner accent */}
                                <div
                                    className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{
                                        background: 'linear-gradient(225deg, rgba(207,181,59,0.15), transparent)',
                                    }}
                                />

                                <div className="flex items-start gap-6">
                                    {/* Icon box */}
                                    <div
                                        className="flex-shrink-0 w-14 h-14 flex items-center justify-center transition-all duration-500"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(207,181,59,0.15), rgba(154,132,32,0.1))',
                                            border: '1px solid rgba(207,181,59,0.2)',
                                        }}
                                    >
                                        <Icon
                                            size={26}
                                            style={{ color: '#CFB53B' }}
                                            className="transition-all duration-300 group-hover:scale-110"
                                        />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <h3
                                                className="text-xl font-bold uppercase tracking-wide"
                                                style={{ fontFamily: "'Rajdhani', 'Impact', sans-serif", color: '#e0e0e0' }}
                                            >
                                                {s.title}
                                            </h3>
                                        </div>
                                        <p className="text-sm leading-relaxed mb-4" style={{ color: '#9b9b9b' }}>
                                            {s.description}
                                        </p>
                                        <span
                                            className="text-xs font-semibold tracking-widest uppercase px-3 py-1"
                                            style={{
                                                background: 'rgba(207,181,59,0.1)',
                                                color: '#CFB53B',
                                                borderLeft: '2px solid #CFB53B',
                                            }}
                                        >
                                            {s.highlight}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #CFB53B, transparent)' }} />
        </section>
    )
}
