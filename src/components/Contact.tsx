import { useRef, useState, type FormEvent } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, MapPin, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })
    const [sent, setSent] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const name = (form.elements.namedItem('name') as HTMLInputElement).value
        const phone = (form.elements.namedItem('phone') as HTMLInputElement).value
        const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value
        const text = encodeURIComponent(`Olá! Me chamo ${name} (${phone}).\n\n${message}`)
        window.open(`https://wa.me/5511996373477?text=${text}`, '_blank')
        setSent(true)
        setTimeout(() => setSent(false), 5000)
        form.reset()
    }

    const inputBase: React.CSSProperties = {
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: '#e0e0e0',
        padding: '14px 16px',
        width: '100%',
        fontSize: '14px',
        outline: 'none',
        transition: 'border-color 0.3s',
    }

    return (
        <section
            id="contato"
            ref={ref}
            className="relative py-28 overflow-hidden"
            style={{
                background: 'linear-gradient(160deg, #050505 0%, #0a0505 50%, #050505 100%)',
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none bg-radial from-gold-racing/6 to-transparent via-70%"
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
                            Fale conosco
                        </span>
                        <div className="h-px w-12 bg-gold-racing" />
                    </div>
                    <h2
                        className="text-4xl md:text-6xl font-black uppercase font-heading text-[#e0e0e0] tracking-wider"
                    >
                        Solicite seu Orçamento
                    </h2>
                    <p className="mt-4 text-base max-w-xl mx-auto text-[#9b9b9b]">
                        Descreva o problema do seu motor. Nossa equipe retorna com diagnóstico e orçamento em até 24 horas.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#9b9b9b' }}>Nome</label>
                                    <input
                                        name="name"
                                        type="text"
                                        required
                                        placeholder="Seu nome completo"
                                        style={inputBase}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(207,181,59,0.5)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#9b9b9b' }}>Telefone</label>
                                    <input
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder="(11) 99999-9999"
                                        style={inputBase}
                                        onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(207,181,59,0.5)')}
                                        onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#9b9b9b' }}>Veículo / Motor</label>
                                <input
                                    name="vehicle"
                                    type="text"
                                    placeholder="Ex: Ford F-250 Motor 2.8 Turbo"
                                    style={inputBase}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(207,181,59,0.5)')}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                />
                            </div>

                            <div>
                                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: '#9b9b9b' }}>Descrição do problema</label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Descreva os sintomas, ruídos, perdas de potência..."
                                    style={{ ...inputBase, resize: 'none' }}
                                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(207,181,59,0.5)')}
                                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                                />
                            </div>

                            <button
                                type="submit"
                                className="group w-full py-4 font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] bg-linear-to-br from-gold-racing to-[#9A8420] text-[#111111] shadow-[0_0_30px_rgba(207,181,59,0.35)]"
                                style={{
                                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                                }}
                            >
                                <Send size={16} className="transition-transform group-hover:translate-x-1" />
                                {sent ? 'Abrindo WhatsApp...' : 'Solicitar Orçamento via WhatsApp'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Info cards */}
                    <motion.div
                        className="lg:col-span-2 flex flex-col gap-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        {[
                            {
                                icon: Phone,
                                title: 'Telefone',
                                lines: ['(11) 99637-3477', '(11) 98559-6077'],
                            },
                            {
                                icon: MessageCircle,
                                title: 'WhatsApp',
                                lines: ['(11) 99637-3477', '(11) 98559-6077'],
                            },
                            {
                                icon: MapPin,
                                title: 'Localização',
                                lines: ['Rua Pinoguaçu, 191', 'Vila Lar Nacional, São Paulo – SP'],
                            },
                        ].map((info) => {
                            const Icon = info.icon
                            return (
                                <div
                                    key={info.title}
                                    className="group p-6 border flex gap-4 items-start transition-all duration-300 hover:border-[rgba(207,181,59,0.3)]"
                                    style={{
                                        background: 'linear-gradient(145deg, #0e0e10, #111113)',
                                        borderColor: 'rgba(255,255,255,0.05)',
                                    }}
                                >
                                    <div
                                        className="w-10 h-10 flex items-center justify-center flex-shrink-0 bg-gold-racing/10 border border-gold-racing/20"
                                    >
                                        <Icon size={18} className="text-gold-racing" />
                                    </div>
                                    <div>
                                        <div className="text-xs tracking-widest uppercase mb-1 text-gold-racing">
                                            {info.title}
                                        </div>
                                        {info.lines.map((l, li) => (
                                            <div key={li} className="text-sm" style={{ color: li === 0 ? '#e0e0e0' : '#9b9b9b' }}>
                                                {l}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        })}

                        {/* Hours */}
                        <div
                            className="p-6 border mt-2"
                            style={{
                                background: 'linear-gradient(135deg, rgba(207,181,59,0.08), rgba(154,132,32,0.05))',
                                borderColor: 'rgba(207,181,59,0.2)',
                            }}
                        >
                            <div className="text-xs tracking-widest uppercase mb-3 text-gold-racing">
                                Horário de Atendimento
                            </div>
                            <div className="space-y-1">
                                {[
                                    ['Seg – Sex', '07:30 – 18:00'],
                                    ['Sábado', '07:30 – 12:00'],
                                ].map(([day, hours]) => (
                                    <div key={day} className="flex justify-between text-sm">
                                        <span style={{ color: '#9b9b9b' }}>{day}</span>
                                        <span style={{ color: '#e0e0e0', fontWeight: 600 }}>{hours}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
