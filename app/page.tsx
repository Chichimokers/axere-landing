"use client";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white font-sans" >
      <Head>
        <title>AXERE Vibes - Música Moderna</title>
        <meta name="description" content="Sitio oficial de AXERE Vibes, un músico moderno que rompe esquemas." />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
          integrity="sha512-Fo3rlrZj/k7ujTnHq6xY9pC1q5qvS3u2cD7npdph1b4K0a3YgZ9bqSThD7C6+9Cj3K7z6c7E7k3T9v2zK9F8Eg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      {/* Hero Section */}
      <header className="relative h-screen bg-cover bg-center flex items-center justify-center herosection">
        
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-wider animate-fade-in">
            AXERE Vibes
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in">Música Moderna • AXERE Urbano</p>
          <div className="flex justify-center space-x-6 text-2xl animate-fade-in">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram hover:text-pink-500 transition-colors"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter hover:text-blue-400 transition-colors"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube hover:text-red-500 transition-colors"></i>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>
          <p className="text-lg leading-relaxed">
            AXERE Vibes es un artista que rompe esquemas, fusionando ritmos urbanos con una energía única y provocativa.
            Su estilo moderno y disruptivo lo ha convertido en una figura relevante dentro de la escena musical actual.
          </p>
        </div>
      </section>

      {/* Music Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Música</h2>
          <div className="flex justify-center">
            <iframe
              src="https://open.spotify.com/embed/artist/4MJFBEDWGVl1rL6EnxGNOm"
              width="300"
              height="380"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Videos</h2>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/AmmE9kk7Azk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Próximos Eventos</h2>
          <ul className="space-y-4 text-xl">
            <li>15 de marzo 2025 - New York, NY</li>
            <li>10 de abril 2025 - Los Angeles, CA</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-8 md:px-16 bg-gray-800">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl font-bold text-center mb-6">Contacto</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Tu Nombre"
                className="p-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500 transition"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Tu Email"
                className="p-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500 transition"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                placeholder="Tu Mensaje"
                className="p-4 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-pink-500 transition"
                rows={4}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded transition duration-300"
              >
                Enviar Mensaje
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-center">
        <p>&copy; 2025 AXERE Vibes. Todos los derechos reservados.</p>
      </footer>

      {/* Estilos globales */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Montserrat", sans-serif;
        }
        .hero {
          background-image: url('/path-to-your-image.jpg');
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
      `}</style>
    </div>
  );
}
