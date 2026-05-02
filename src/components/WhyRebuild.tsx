import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Zap, Fuel, Wind, Heart, ShieldCheck } from 'lucide-react'

const benefits = [
    {
        icon: <Zap className="text-gold-racing" size={32} />,
        title: 'Recuperação de Potência',
        description: 'Restauramos as medidas originais para que o motor entregue toda a força de fábrica.'
    },
    {
        icon: <Fuel className="text-gold-racing" size={32} />,
        title: 'Economia Real',
        description: 'Redução drástica no consumo de óleo e combustível através de vedação perfeita.'
    },
    {
        icon: <Wind className="text-gold-racing" size={32} />,
        title: 'Menor Emissão',
        description: 'Motor regulado e retificado polui menos e atende aos padrões ambientais.'
    },
    {
        icon: <Heart className="text-gold-racing" size={32} />,
        title: 'Vida Útil Estendida',
        description: 'Processos que garantem durabilidade para rodar milhares de quilômetros sem sustos.'
    },
    {
        icon: <ShieldCheck className="text-gold-racing" size={32} />,
        title: 'Segurança Total',
        description: 'Confiabilidade absoluta para você e sua família ou para o seu negócio.'
    }
]

export default function WhyRebuild() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section className="py-24 relative overflow-hidden" style={{ background: '#080808' }}>
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gold-racing rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold-racing rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    ref={ref}
                >
                    <span className="text-xs tracking-[0.4em] uppercase font-semibold text-gold-racing mb-4 block">
                        Vantagens Reais
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black uppercase font-heading text-[#e0e0e0] tracking-wider mb-6">
                        Por que fazer a <span className="text-gold-racing">Retífica?</span>
                    </h2>
                    <p className="text-[#9b9b9b] max-w-2xl mx-auto">
                        Com o tempo, o motor sofre desgaste natural. A retífica não é apenas um conserto, é a restauração completa da engenharia original do seu veículo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {benefits.map((benefit, i) => (
                        <motion.div
                            key={i}
                            className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-bold uppercase tracking-tight text-[#e0e0e0] mb-4 font-heading">
                                {benefit.title}
                            </h3>
                            <p className="text-sm text-[#888] leading-relaxed">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Slogan banner from the flyer */}
                <motion.div 
                    className="mt-20 p-1 bg-linear-to-r from-transparent via-gold-racing/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="bg-[#080808] py-6 text-center">
                        <p className="text-xl md:text-2xl font-heading font-black uppercase tracking-[0.2em] text-gold-racing italic">
                            "Precisão que garante desempenho!"
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
