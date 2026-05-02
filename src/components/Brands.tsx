import { motion } from 'framer-motion'

const brands = [
    'Chevrolet', 'Fiat', 'Volkswagen', 'Ford', 'Renault', 'Peugeot', 'Citroën', 'Toyota', 'Honda', 'Hyundai'
]

export default function Brands() {
    return (
        <section className="py-12 bg-[#050505] border-y border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
                <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-gold-racing/50">
                    Atendemos Toda a Linha Nacional e Importada
                </span>
            </div>
            
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {Array(4).fill(brands).flat().map((brand, i) => (
                        <span 
                            key={i} 
                            className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-white/20 mx-12 hover:text-gold-racing/40 transition-colors cursor-default font-heading"
                        >
                            {brand}
                        </span>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 40s linear infinite;
                }
            `}} />
        </section>
    )
}
