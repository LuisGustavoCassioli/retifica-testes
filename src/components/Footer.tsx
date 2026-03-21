import { Instagram, Facebook, Youtube } from 'lucide-react'

const quickLinks = [
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre nós' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
]

export default function Footer() {
    return (
        <footer className="relative pt-16 pb-8" style={{ background: '#030303', borderTop: '1px solid rgba(207,181,59,0.15)' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div
                                className="w-9 h-9 flex items-center justify-center font-black text-xl"
                                style={{
                                    background: 'linear-gradient(135deg, #CFB53B, #9A8420)',
                                    fontFamily: "'Rajdhani', 'Impact', sans-serif",
                                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                                    color: '#111111',
                                }}
                            >
                                B
                            </div>
                            <span
                                className="text-xl font-black tracking-[0.2em] uppercase"
                                style={{ fontFamily: "'Rajdhani', 'Impact', sans-serif", color: '#e0e0e0' }}
                            >
                                LESSED
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-6" style={{ color: '#9b9b9b' }}>
                            Retífica e reconstrução de motores com padrão de engenharia de alto desempenho.
                            Potência reconstruída. Precisão absoluta.
                        </p>
                        {/* Social */}
                        <div className="flex gap-3">
                            {[
                                { icon: Instagram, href: '#' },
                                { icon: Facebook, href: '#' },
                                { icon: Youtube, href: '#' },
                            ].map(({ icon: Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-9 h-9 flex items-center justify-center border transition-all duration-300 hover:border-yellow-600 hover:bg-[rgba(207,181,59,0.1)]"
                                    style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#9b9b9b' }}
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4
                            className="text-sm font-bold tracking-[0.3em] uppercase mb-6"
                            style={{ color: '#e0e0e0' }}
                        >
                            Links Rápidos
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        className="text-sm transition-colors duration-200 group flex items-center gap-2"
                                        style={{ color: '#9b9b9b' }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = '#e0e0e0')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = '#9b9b9b')}
                                    >
                                        <span
                                            className="w-4 h-px transition-all duration-300"
                                            style={{ background: '#CFB53B' }}
                                        />
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact info */}
                    <div>
                        <h4
                            className="text-sm font-bold tracking-[0.3em] uppercase mb-6"
                            style={{ color: '#e0e0e0' }}
                        >
                            Contato
                        </h4>
                        <div className="space-y-3 text-sm" style={{ color: '#9b9b9b' }}>
                            <p><a href='https://maps.app.goo.gl/UBouxczrVWGdDNG69'>📍 Rua Pinoguaçu, 191 <br /><span className="ml-6">Vila Lar Nacional, São Paulo – SP</span></a></p>
                            <p>💬 WhatsApp:<a href='https://wa.me/message/JSRGDYDZBLGGI1'>(11) 99637-3477</a> / <a href='https://wa.me/5511985596077'>(11) 98559-6077</a></p>
                            <p>🕐 Seg–Sex: 07:30–18:00 | Sáb: 07:30–12:00</p>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#9b9b9b' }}
                >
                    <span>© {new Date().getFullYear()} Blessed Retífica de Motores. Todos os direitos reservados.</span>
                    <span>
                        Desenvolvido com{' '}
                        <span style={{ color: '#CFB53B' }}>♥</span>
                        {' '}e precisão
                    </span>
                </div>
            </div>
        </footer>
    )
}
