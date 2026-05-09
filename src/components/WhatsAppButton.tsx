import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
    const whatsappUrl = 'https://wa.me/message/JSRGDYDZBLGGI1'

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-transform duration-300 hover:scale-110"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5, type: 'spring' }}
            whileHover={{ y: -5 }}
            aria-label="Contato via WhatsApp"
        >
            <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-25" />
            <MessageCircle size={32} className="relative z-10" />
        </motion.a>
    )
}
