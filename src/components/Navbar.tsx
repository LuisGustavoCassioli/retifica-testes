import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
            style={{
                background: scrolled
                    ? 'rgba(5,5,5,0.97)'
                    : 'linear-gradient(180deg, rgba(5,5,5,0.8) 0%, transparent 100%)',
                borderBottom: scrolled ? '1px solid rgba(207,181,59,0.2)' : 'none',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
            }}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <div
                        className="w-9 h-9 flex items-center justify-center font-black text-xl transition-all duration-300 group-hover:scale-110"
                        style={{
                            background: 'linear-gradient(135deg, #CFB53B, #9A8420)',
                            fontFamily: "'Rajdhani', 'Impact', sans-serif",
                            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                        }}
                    >
                        B
                    </div>
                    <span
                        className="text-xl font-black tracking-[0.2em] uppercase transition-colors duration-300"
                        style={{
                            fontFamily: "'Rajdhani', 'Impact', sans-serif",
                            color: '#e0e0e0',
                        }}
                    >
                        LESSED
                    </span>
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm tracking-widest uppercase transition-all duration-200 relative group"
                            style={{ color: '#9b9b9b' }}
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLAnchorElement).style.color = '#e0e0e0')
                            }
                            onMouseLeave={(e) =>
                                ((e.currentTarget as HTMLAnchorElement).style.color = '#9b9b9b')
                            }
                        >
                            {l.label}
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                                style={{ background: '#CFB53B' }}
                            />
                        </a>
                    ))}
                    <a
                        href="#contato"
                        className="px-5 py-2 text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, #CFB53B, #9A8420)',
                            color: '#111111',
                            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                        }}
                    >
                        Orçamento
                    </a>
                </nav>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <motion.div
                    className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
                    style={{ background: 'rgba(5,5,5,0.98)' }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm tracking-widest uppercase py-2 border-b"
                            style={{ color: '#9b9b9b', borderColor: '#1a1a1d' }}
                            onClick={() => setOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.header>
    )
}
