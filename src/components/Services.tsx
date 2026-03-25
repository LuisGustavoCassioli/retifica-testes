import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wrench, CheckCircle2, ChevronRight, Activity, Settings, Package, UserCheck } from 'lucide-react'

const blockHeadServices = [
    { title: 'Bloco', items: ['Abertura de Cilindro', 'Banho Químico', 'Pintura', 'Lavagem Fina', 'Brunimento'], icon: Wrench },
    { title: 'Cabeçote', items: ['Banho Químico', 'Plaina', 'Assentamento de Válvulas', 'Troca de Retentores', 'Vedadores'], icon: CheckCircle2 },
]

const componentRestoration = [
    { title: 'Bielas', items: ['Retífica do Ferro', 'Alinhamento'], icon: Activity },
    { title: 'Virabrequim', items: ['Retífica Colo de Biela', 'Retífica Colo de Mancal', 'Banho Químico', 'Alinhamento'], icon: Settings },
]

const replacedParts = [
    'Pistões e Anéis',
    'Bronzinas de Biela',
    'Bronzinas de Mancal',
    'Retentores e Vedadores',
    'Jogo de Juntas Completo',
    'Filtro de Óleo/Motor',
]

const laborServices = [
    'Desmontagem Técnica',
    'Montagem de Precisão',
    'Instalação no Veículo',
    'Pintura Industrial',
    'Banho Químico por Ultrassom',
    'Lavagem Fina Protetiva',
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
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-racing to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gold-racing" />
                        <span className="text-xs tracking-[0.4em] uppercase font-semibold text-gold-racing">
                            O que fazemos
                        </span>
                        <div className="h-px w-12 bg-gold-racing" />
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-black uppercase font-heading text-[#e0e0e0] tracking-wider"
                    >
                        Nossos Serviços
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-[#9b9b9b]">
                        Soluções completas em engenharia automotiva com tecnologia de última geração e profissionais certificados.
                    </p>
                </motion.div>

                <motion.div
                    className="max-w-4xl mx-auto mb-16 p-8 relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    style={{ background: 'rgba(207,181,59,0.03)', border: '1px solid rgba(207,181,59,0.1)' }}
                >
                    <div className="absolute top-0 left-0 w-2 h-full bg-gold-racing" />
                    <p className="text-lg md:text-xl font-medium text-[#e0e0e0] leading-relaxed mb-4">
                        "Após a desmontagem completa, cada peça é rigorosamente medida e conferida com exatidão máxima."
                    </p>
                    <div className="flex items-center gap-2 text-gold-racing text-sm font-bold uppercase tracking-widest">
                        <Activity size={16} />
                        Metrologia com Súbitos, Micrômetros e Paquímetros de Alta Precisão
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* 1. Core Machining */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold-racing border-b border-gold-racing/20 pb-2">Retífica de Base</h3>
                        {blockHeadServices.map((group) => (
                            <motion.div key={group.title} className="space-y-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
                                <div className="flex items-center gap-2 text-white font-bold uppercase text-xs">
                                    <group.icon size={14} className="text-gold-racing" />
                                    {group.title}
                                </div>
                                <ul className="space-y-2">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[11px] text-[#9b9b9b] uppercase tracking-tighter">
                                            <ChevronRight size={10} className="text-gold-racing/50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* 2. Component Restoration */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold-racing border-b border-gold-racing/20 pb-2">Componentes</h3>
                        {componentRestoration.map((group) => (
                            <motion.div key={group.title} className="space-y-4" initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
                                <div className="flex items-center gap-2 text-white font-bold uppercase text-xs">
                                    <group.icon size={14} className="text-gold-racing" />
                                    {group.title}
                                </div>
                                <ul className="space-y-2">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-[11px] text-[#9b9b9b] uppercase tracking-tighter">
                                            <ChevronRight size={10} className="text-gold-racing/50" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* 3. Replaced Parts */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold-racing border-b border-gold-racing/20 pb-2">Peças Novas</h3>
                        <div className="flex items-center gap-2 text-white font-bold uppercase text-xs mb-4">
                            <Package size={14} className="text-gold-racing" />
                            Substituição Total
                        </div>
                        <ul className="space-y-3">
                            {replacedParts.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[11px] text-[#9b9b9b] uppercase tracking-tighter">
                                    <CheckCircle2 size={10} className="text-green-500/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 4. Labor */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-gold-racing border-b border-gold-racing/20 pb-2">Mão de Obra</h3>
                        <div className="flex items-center gap-2 text-white font-bold uppercase text-xs mb-4">
                            <UserCheck size={14} className="text-gold-racing" />
                            Execução Técnica
                        </div>
                        <ul className="space-y-3">
                            {laborServices.map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-[11px] text-[#9b9b9b] uppercase tracking-tighter">
                                    <ChevronRight size={10} className="text-gold-racing/50" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer statement */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="inline-block px-10 py-5 border border-gold-racing/20 bg-linear-to-b from-transparent to-gold-racing/5">
                        <span className="text-lg md:text-xl font-bold uppercase tracking-[0.2em] font-heading text-gold-racing">
                            Recuperação, Usinagem e Retífica em Geral
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #CFB53B, transparent)' }} />
        </section>
    )
}
