"use client";
import Head from "next/head";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-sans">
      <Head>
        <title>AXERE Vibes - Innovación Musical</title>
        <meta name="description" content="AXERE Vibes: Revolucionando la escena musical con sonidos urbanos disruptivos" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </Head>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/80 to-pink-900/50 backdrop-blur-sm"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4 space-y-8"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">
            AXERE
          </h1>
          <p className="text-2xl md:text-3xl font-light text-gray-200">Reinventando el sonido urbano</p>
          <div className="flex justify-center gap-8 text-3xl">
            {[
              { icon: 'instagram', color: 'hover:text-pink-400', link: 'https://instagram.com' },
              { icon: 'spotify', color: 'hover:text-green-400', link: 'https://spotify.com' },
              { icon: 'tiktok', color: 'hover:text-purple-400', link: 'https://tiktok.com' }
            ].map((social, i) => (
              <motion.a
                key={social.icon}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className={`${social.color} transition-colors duration-300`}
              >
                <i className={`fab fa-${social.icon}`} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </header>

      {/* About Section */}
      <section className="py-24 px-8 bg-gray-800/50 backdrop-blur-lg">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">
            Sobre el Proyecto
          </h2>
          <p className="text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto">
            Fusionando tecnología y arte sonoro, AXERE Vibes redefine los límites de la música urbana contemporánea. 
            Cada producción es una experiencia multisensorial que combina ritmos orgánicos con síntesis digital.
          </p>
        </motion.div>
      </section>

      {/* Discografía */}
      <section className="py-24 px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <h2 className="text-4xl font-bold text-gray-100">Lanzamientos</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['CYBERPUNK', 'NEON DREAMS', 'URBAN FUTURE'].map((album, i) => (
              <motion.div 
                key={album}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 space-y-6"
              >
                <div className="aspect-square bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg" />
                <h3 className="text-2xl font-bold text-gray-100">{album}</h3>
                <button className="bg-pink-600/50 hover:bg-pink-700/50 text-white px-6 py-3 rounded-full transition-all duration-300">
                  Escuchar ahora
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eventos */}
      <section className="py-24 px-8 bg-gray-800/50">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-4xl font-bold text-center text-gray-100">Próximas Experiencias</h2>
          <div className="space-y-6">
            {[
              { date: '15 MAR 2025', location: 'Brooklyn Mirage, NYC' },
              { date: '22 ABR 2025', location: 'Downtown LA, California' }
            ].map((event, i) => (
              <div key={event.date} className="flex justify-between items-center p-6 bg-gray-900/50 rounded-xl border border-gray-700 hover:border-pink-500 transition-all duration-300">
                <div className="space-y-1">
                  <p className="text-pink-400 font-medium">{event.date}</p>
                  <p className="text-xl text-gray-200">{event.location}</p>
                </div>
                <button className="bg-transparent border border-pink-500 text-pink-400 px-8 py-3 rounded-full hover:bg-pink-500/10 transition">
                  Tickets
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-24 px-8 bg-gray-900">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-2xl mx-auto space-y-16"
        >
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-300">
            Conexión Digital
          </h2>
          <form className="space-y-8">
            {['Nombre', 'Email', 'Mensaje'].map((field, i) => (
              <div key={field} className="relative">
                <input 
                  type={field === 'Email' ? 'email' : 'text'} 
                  placeholder=" "
                  className="w-full p-6 bg-gray-800/50 border border-gray-700 rounded-xl backdrop-blur-sm focus:border-pink-500 focus:ring-2 focus:ring-pink-500/30 transition-all peer"
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-pink-400 transition-all pointer-events-none peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-7 peer-focus:scale-90 peer-placeholder-shown:scale-100">
                  {field}
                </label>
              </div>
            ))}
            <div className="text-center">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-12 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
                Transmitir Mensaje
              </button>
            </div>
          </form>
        </motion.div>
      </section>

      <footer className="py-12 text-center border-t border-gray-800">
        <p className="text-gray-400">&copy; 2025 AXERE Vibes · Innovación Sonora</p>
      </footer>
    </div>
  );
}