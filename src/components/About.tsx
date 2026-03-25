import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
    const imgY = useTransform(scrollYProgress, [0, 1], ['-5%', '5%'])

    return (
        <section
            id="sobre"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: '#050505' }}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image side */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Decorative frame */}
                        <div
                            className="absolute -inset-3 z-0"
                            style={{ border: '1px solid rgba(207,181,59,0.15)' }}
                        />
                        <div
                            className="absolute -top-3 -left-3 w-16 h-16 z-0 border-t-4 border-l-4 border-gold-racing"
                        />
                        <div
                            className="absolute -bottom-3 -right-3 w-16 h-16 z-0 border-b-4 border-r-4 border-gold-racing"
                        />

                        <motion.div className="relative z-10 overflow-hidden" style={{ y: imgY }}>
                            <img
                                src="/workshop.png"
                                alt="Oficina Blessed Retífica"
                                className="w-full h-80 lg:h-[460px] object-cover"
                                style={{ filter: 'brightness(0.85)' }}
                                width="800"
                                height="460"
                            />
                            {/* Red tint overlay */}
                            <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(135deg, rgba(207,181,59,0.05), transparent 60%)' }}
                            />
                        </motion.div>

                        {/* Badge */}
                        <motion.div
                            className="absolute -bottom-6 -right-6 z-20 p-5 text-center bg-linear-to-br from-gold-racing to-[#9A8420]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                            <div
                                className="text-4xl font-black font-heading text-[#111111]"
                            >
                                8
                            </div>
                            <div className="text-xs tracking-wider uppercase mt-1" style={{ color: 'rgba(0,0,0,0.65)' }}>
                                Anos de<br />Excelência
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Text side */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-px w-10 bg-gold-racing" />
                            <span className="text-xs tracking-[0.4em] uppercase font-semibold text-gold-racing">
                                Quem somos
                            </span>
                        </div>

                        <h2
                            className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight font-heading tracking-wider text-[#e0e0e0]"
                        >
                            Engenharia de<br />
                            <span className="text-gold-racing">
                                Alta Precisão
                            </span>
                        </h2>

                        <p className="text-base leading-relaxed mb-5" style={{ color: '#9b9b9b' }}>
                            A <span style={{ color: '#e0e0e0', fontWeight: 700 }}>Blessed Retífica</span> nasceu da
                            paixão por motores e da obsessão por precisão. Somos referência regional em reconstrução
                            de motores, combinando anos de experiência com tecnologia de última geração.
                        </p>

                        <p className="text-base leading-relaxed mb-8" style={{ color: '#9b9b9b' }}>
                            Cada motor que passa por nossas mãos é tratado como uma obra de engenharia.
                            Nosso compromisso: entregar potência máxima com durabilidade absoluta.
                        </p>

                        {/* KPI list */}
                        <div className="space-y-3 mb-10">
                            {[
                                'Metrologia com equipamentos de qualidade (Súbitos, Micrômetros, Paquímetros)',
                                'Técnicos certificados com especialização contínua',
                                'Peças com procedência e garantia documentada',
                                'Prazo respeitado. Qualidade sem concessões.',
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="flex items-center gap-3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                >
                                    <div className="w-6 h-px flex-shrink-0 bg-gold-racing" />
                                    <span className="text-sm text-[#c8c8c8]">{item}</span>
                                </motion.div>
                            ))}
                        </div>

                        <a
                            href="#contato"
                            className="group inline-flex items-center gap-3 px-7 py-4 font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 bg-linear-to-br from-gold-racing to-[#9A8420] text-[#111111] shadow-[0_0_25px_rgba(207,181,59,0.3)]"
                            style={{
                                clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                            }}
                        >
                            Fale Conosco
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
