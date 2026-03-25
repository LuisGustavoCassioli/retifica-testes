import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Quote } from 'lucide-react'

const testimonials = [
    {
        name: 'Ricardo Alves',
        role: 'Proprietário de Frota',
        text: 'A Blessed reconstruiu 3 motores da nossa frota. Qualidade impecável, prazo cumprido e os caminhões continuam rodando perfeitamente 2 anos depois. Recomendo sem hesitar.',
        rating: 5,
    },
    {
        name: 'Carlos Mendes',
        role: 'Piloto Amador',
        text: 'Mandei preparar o motor do meu fusca de pista. O resultado ultrapassou minhas expectativas. Potência consistente, acabamento perfeito. Equipe extremamente técnica.',
        rating: 5,
    },
    {
        name: 'Fernanda Costa',
        role: 'Oficina Parceira',
        text: 'Parceria de anos com a Blessed. Enviamos nossos clientes com confiança. A transparência no diagnóstico e a qualidade da entrega são incomparáveis na região.',
        rating: 5,
    },
    {
        name: 'Marcos Oliveira',
        role: 'Colecionador Automotivo',
        text: 'Motor original do meu carro clássico, restaurado. A Blessed respeitou cada detalhe original. Um trabalho artesanal de altíssimo nível. Valeu cada centavo.',
        rating: 5,
    },
]

export default function Testimonials() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section
            id="depoimentos"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, #050505 0%, #080808 50%, #050505 100%)',
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none bg-radial from-gold-racing/4 to-transparent via-70%"
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gold-racing" />
                        <span className="text-xs tracking-[0.4em] uppercase font-semibold text-gold-racing">
                            Quem confia em nós
                        </span>
                        <div className="h-px w-12 bg-gold-racing" />
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-black uppercase font-heading text-[#e0e0e0] tracking-wider"
                    >
                        Depoimentos
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            className="group relative p-8 border transition-all duration-500"
                            style={{
                                background: 'linear-gradient(145deg, #0e0e10, #111113)',
                                borderColor: 'rgba(255,255,255,0.05)',
                            }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{
                                borderColor: 'rgba(207,181,59,0.25)',
                                boxShadow: '0 4px 30px rgba(207,181,59,0.08)',
                            }}
                        >
                            <Quote
                                size={36}
                                className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300 text-gold-racing"
                            />

                            {/* Stars */}
                            <div className="flex gap-1 mb-5">
                                {Array.from({ length: t.rating }).map((_, si) => (
                                    <span key={si} className="text-gold-racing text-sm">★</span>
                                ))}
                            </div>

                            {/* Text */}
                            <p className="text-sm leading-relaxed mb-6 italic" style={{ color: '#c8c8c8' }}>
                                "{t.text}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-10 h-10 flex items-center justify-center font-black text-sm bg-linear-to-br from-gold-racing to-[#9A8420] font-heading text-[#111111]"
                                >
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <div className="text-sm font-bold" style={{ color: '#e0e0e0' }}>{t.name}</div>
                                    <div className="text-xs tracking-wider uppercase" style={{ color: '#9b9b9b' }}>{t.role}</div>
                                </div>
                            </div>

                            <div
                                className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 bg-linear-to-r from-gold-racing to-transparent"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
