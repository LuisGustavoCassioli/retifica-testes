import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

// Gallery uses placeholder engine-related images from Unsplash (no API needed)
const galleryItems = [
    { id: 1, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=70&auto=format', label: 'Motor V8 Reconstruído' },
    { id: 2, src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&q=70&auto=format', label: 'Usinagem de Precisão' },
    { id: 3, src: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&q=70&auto=format', label: 'Diagnóstico Avançado' },
    { id: 4, src: 'https://images.unsplash.com/photo-1542736143-29a8432162bc?w=600&q=70&auto=format', label: 'Componentes Premium' },
    { id: 5, src: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=600&q=70&auto=format', label: 'Motor de Alta Performance' },
    { id: 6, src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=70&auto=format', label: 'Resultado Final' },
]

export default function Gallery() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-100px' })
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <section
            id="galeria"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{ background: '#070707' }}
        >
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-racing/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-gold-racing" />
                        <span className="text-xs tracking-[0.4em] uppercase font-semibold text-gold-racing">
                            Nosso trabalho
                        </span>
                        <div className="h-px w-12 bg-gold-racing" />
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-black uppercase font-heading text-[#e0e0e0] tracking-wider"
                    >
                        Galeria
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-[#9b9b9b]">
                        Conheça alguns dos motores que já passaram pelo nosso processo de reconstrução e preparação.
                    </p>
                </motion.div>

                {/* Gallery grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            className="group relative overflow-hidden cursor-pointer"
                            style={{ aspectRatio: '4/3' }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.08 }}
                            onMouseEnter={() => setHovered(item.id)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <img
                                src={item.src}
                                alt={item.label}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                style={{ filter: 'brightness(0.6) saturate(0.7)' }}
                                loading="lazy"
                                width="400"
                                height="300"
                            />

                            <motion.div
                                className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-t from-gold-racing/60 to-black/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hovered === item.id ? 1 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ZoomIn size={32} color="white" className="mb-3 opacity-90" />
                                <span
                                    className="text-sm font-bold tracking-widest uppercase text-white font-heading"
                                >
                                    {item.label}
                                </span>
                            </motion.div>

                            <div
                                className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-300 ${hovered === item.id ? 'bg-gold-racing' : 'bg-transparent'}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-gold-racing/50 to-transparent" />
        </section>
    )
}
