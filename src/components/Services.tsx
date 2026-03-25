import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wrench, CheckCircle2, ChevronRight, Tooltip, Layers, Settings, Microscope, Droplets } from 'lucide-react'

const remanufacturedParts = [
    {
        title: 'Bloco',
        tasks: ['Abertura de cilindro', 'Banho químico', 'Pintura especializada', 'Lavagem fina', 'Brunimento do cilindro'],
        icon: Layers
    },
    {
        title: 'Cabeçote',
        tasks: ['Banho químico', 'Plaina de face', 'Assentamento de válvulas', 'Troca de retentores', 'Vedadores novos'],
        icon: Settings
    },
    {
        title: 'Bielas',
        tasks: ['Retífica do ferro', 'Alinhamento de precisão'],
        icon: Wrench
    },
    {
        title: 'Virabrequim',
        tasks: ['Retífica do colo de biela', 'Retífica do colo de mancal', 'Banho químico', 'Alinhamento mecânico'],
        icon: Activity
    }
]

const replacedParts = [
    'Pistões', 'Anéis', 'Bronzina de Biela', 'Bronzina de Mancal',
    'Retentores', 'Vedadores de Válvulas', 'Jogo de Juntas', 'Filtro de Motor'
]

const laborWorkflow = [
    'Desmontagem Técnica', 'Montagem Especializada', 'Instalação Recomenda',
    'Pintura Industrial', 'Banho Químico', 'Lavagem Fina'
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

                {/* Meta Header */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <motion.div
                        className="p-8 relative overflow-hidden"
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        style={{ background: 'rgba(207,181,59,0.03)', border: '1px solid rgba(207,181,59,0.1)' }}
                    >
                        <Microscope size={32} className="text-gold-racing mb-4 opacity-50" />
                        <h3 className="text-lg font-bold uppercase tracking-widest text-[#e0e0e0] mb-3">Metrologia Avançada</h3>
                        <p className="text-sm text-[#9b9b9b] leading-relaxed">
                            Equipamentos de alta qualidade (Súbitos, Micrômetros, Paquímetros precisos) para garantir tolerâncias nominais de fábrica.
                        </p>
                    </motion.div>

                    <motion.div
                        className="p-8 relative overflow-hidden"
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        style={{ background: 'rgba(207,181,59,0.03)', border: '1px solid rgba(207,181,59,0.1)' }}
                    >
                        <Droplets size={32} className="text-gold-racing mb-4 opacity-50" />
                        <h3 className="text-lg font-bold uppercase tracking-widest text-[#e0e0e0] mb-3">O Processo</h3>
                        <p className="text-sm text-[#e0e0e0] leading-relaxed italic">
                            "Após a desmontagem completa do motor, cada peça é medida e conferida com exatidão máxima antes de qualquer procedimento técnico."
                        </p>
                    </motion.div>
                </div>

                {/* Technical Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Column 1: Remanufactured */}
                    <div className="lg:col-span-2 space-y-10">
                        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                            <h3 className="text-2xl font-black uppercase font-heading text-white tracking-widest">
                                Peças Retificadas
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {remanufacturedParts.map((group, i) => {
                                const Icon = group.icon
                                return (
                                    <motion.div
                                        key={group.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={inView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.2 + (i * 0.1) }}
                                        className="space-y-4"
                                    >
                                        <div className="flex items-center gap-3">
                                            <Icon size={20} className="text-gold-racing opacity-70" />
                                            <h4 className="text-base font-bold uppercase tracking-wider text-[#e0e0e0]">{group.title}</h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {group.tasks.map((task, tj) => (
                                                <li key={tj} className="flex items-start gap-3 text-xs text-[#9b9b9b] uppercase tracking-tighter">
                                                    <span className="w-1 h-3 mt-0.5 bg-gold-racing/30 flex-shrink-0" />
                                                    {task}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Column 2: Replaced & Labor */}
                    <div className="space-y-12">
                        {/* Replaced Parts */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="p-6 border border-white/5 bg-linear-to-b from-white/2 to-transparent"
                        >
                            <h3 className="text-lg font-black uppercase font-heading text-white tracking-widest mb-6 border-b border-gold-racing/20 pb-2">
                                Peças Trocadas (Kit)
                            </h3>
                            <ul className="space-y-3">
                                {replacedParts.map((part, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#9b9b9b]">
                                        <CheckCircle2 size={12} className="text-gold-racing/60" />
                                        {part}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Labor */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.7, delay: 0.5 }}
                            className="p-6 border border-white/5 bg-linear-to-b from-white/2 to-transparent"
                        >
                            <h3 className="text-lg font-black uppercase font-heading text-white tracking-widest mb-6 border-b border-gold-racing/20 pb-2">
                                Mão de Obra
                            </h3>
                            <ul className="space-y-2">
                                {laborWorkflow.map((item, i) => (
                                    <li key={i} className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#9b9b9b]">
                                        <span>{item}</span>
                                        <div className="h-px flex-1 mx-3 bg-white/5" />
                                        <span className="text-gold-racing font-bold">STND</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>

                {/* Footer statement */}
                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="inline-block px-10 py-5 border border-gold-racing/20 bg-radial from-gold-racing/5 to-transparent">
                        <span className="text-lg md:text-xl font-bold uppercase tracking-[0.3em] font-heading text-gold-racing">
                            Recuperações, Usinagem e Retífica em Geral
                        </span>
                    </div>
                </motion.div>
            </div>

            {/* Bottom decorative border */}
            <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #CFB53B, transparent)' }} />
        </section>
    )
}
