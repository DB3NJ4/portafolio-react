import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects/Projects";
import ContactModal from "./components/ContactModal";
import fondoVideo from "./assets/fondoo.mp4";
import Typewriter from "typewriter-effect";


const App = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800">
      {/* VIDEO BACKGROUND */}
      <video className="video-background" autoPlay muted loop playsInline>
        <source src={fondoVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-0" />

      <Header />

      <main className="p-4 relative z-10">
        {/* HERO */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center text-center text-white"
        >
          <div>
            <h1 className="text-5xl font-bold">Hola, soy [Tu Nombre]</h1>
            <p className="text-xl mt-4">
              Desarrollador Full Stack y Analista de Datos apasionado por la
              tecnología.
            </p>
          </div>
        </section>

        {/* ABOUT */}
<section id="about" className="py-20 bg-transparent from-gray-900 to-black">
  <div className="flex justify-center items-center">
    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 max-w-3xl text-center shadow-2xl transition-transform duration-300 hover:scale-105">
      <h2 className="text-4xl font-extrabold text-white mb-6">
        <Typewriter
          options={{
            strings: ["Sobre Mí", "Acerca de mí", "¿Quién soy?"],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 40,
          }}
        />
      </h2>
      
      <p className="text-gray-300 leading-relaxed mb-8 animate-fade-in-up">
        <Typewriter
          options={{
            loop: false, // No repetir el texto
            delay: 25,
            deleteSpeed: 0, // No borrar el texto
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Soy Benjamín López un desarrollador Full Stack y Analista de Datos apasionado por la tecnología. Me encanta crear soluciones innovadoras y trabajar en proyectos desafiantes."
              )
              .start(); // Inicia la animación
          }}
        />
      </p>
      <div className="flex justify-center gap-4 animate-fade-in-up">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-md hover:bg-blue-600 transition"
        >
          Ver Proyectos
        </a>
        <a
          href="#contact"
          className="px-6 py-3 bg-gray-200 text-gray-900 rounded-xl shadow-md hover:bg-gray-300 transition"
        >
          Contáctame
        </a>
      </div>
    </div>
  </div>
</section>

        {/* PROJECTS */}
        <Projects />

        {/* CONTACT */}
        <section id="contact" className="py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Contacto</h2>
            <p className="text-white leading-relaxed max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡No dudes en contactarme!
            </p>
            <ContactModal />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
