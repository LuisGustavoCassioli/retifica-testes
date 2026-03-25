import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Wrench, CheckCircle2, ChevronRight } from 'lucide-react'

const blockServices = [
    'Encamisamento',
    'Brunimento',
    'Abertura de cilindro',
    'Retífica de virabrequim',
    'Troca de retentores',
    'Teste de pressão de óleo',
    'Teste de compressão',
]

const headServices = [
    'Assentamento de válvulas',
    'Troca de vedadores',
    'Montagem',
    'Soldas de correção',
    'Enchimento de base',
    'Tratamento de sedes',
    'Troca de sedes (caso necessário)',
    'Mandrilhamento',
    'Teste de vácuo',
    'Teste de estanquidade',
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
                    <p className="text-lg md:text-xl font-medium text-[#e0e0e0] leading-relaxed italic">
                        "Após a desmontagem completa do motor, cada componente é rigorosamente medido e conferido com exatidão máxima para garantir o padrão Blessed."
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Block Services */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                            <div className="w-12 h-12 flex items-center justify-center bg-gold-racing/10 border border-gold-racing/30">
                                <Wrench size={24} className="text-gold-racing" />
                            </div>
                            <h3 className="text-2xl font-black uppercase font-heading text-white tracking-widest">
                                Serviços no Bloco
                            </h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {blockServices.map((service, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#9b9b9b] hover:text-white transition-colors group">
                                    <ChevronRight size={14} className="text-gold-racing group-hover:translate-x-1 transition-transform" />
                                    <span className="text-sm font-medium uppercase tracking-tight">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Head Services */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center gap-4 border-b border-white/5 pb-4 text-right lg:flex-row-reverse lg:text-left">
                            <div className="w-12 h-12 flex items-center justify-center bg-gold-racing/10 border border-gold-racing/30">
                                <CheckCircle2 size={24} className="text-gold-racing" />
                            </div>
                            <h3 className="text-2xl font-black uppercase font-heading text-white tracking-widest">
                                Serviços no Cabeçote
                            </h3>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {headServices.map((service, i) => (
                                <li key={i} className="flex items-center gap-3 text-[#9b9b9b] hover:text-white transition-colors group">
                                    <ChevronRight size={14} className="text-gold-racing group-hover:translate-x-1 transition-transform" />
                                    <span className="text-sm font-medium uppercase tracking-tight">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
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
