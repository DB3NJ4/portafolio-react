const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="flex justify-center items-center">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 max-w-3xl text-center shadow-2xl transition-transform duration-300 hover:scale-105">
          <h2 className="text-4xl font-extrabold text-white mb-6">
          </h2>
          <p className="text-gray-300 leading-relaxed mb-8 animate-fade-in-up">
            Soy un desarrollador Full Stack y Analista de Datos apasionado por la tecnología. Me encanta crear soluciones innovadoras y trabajar en proyectos desafiantes.
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
  );
};

export default AboutSection;
