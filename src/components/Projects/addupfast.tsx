import Typewriter from "typewriter-effect";

const AddUpFast = () => {
    return (
      <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <a
            className="group relative inline-block text-sm font-medium text-green-400 focus:ring-3 focus:outline-hidden"
            href="#"
          >
            <span className="absolute inset-0 translate-x-0 translate-y-0 bg-green-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
            <span className="relative block border border-current bg-black px-5 py-3">View</span>
          </a>
        </div>
        <div className="mt-4">
          <p className="text-green-400">
          <Typewriter
          options={{
            strings: ["$ npm install AddUpFast!"],
            autoStart: true,
            loop: true,
            delay: 28,
            deleteSpeed: 40,
          }}
        /></p>
          <p className="text-white">App Movil</p>
          <p className="text-white">Dart - Flutter</p>
          <p className="text-green-400">$</p>
          <img
            src="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2023/01/mercado-de-sitios-web-empire-flippers.png"
            alt="Proyecto 1"
            className="w-30 h-30 mx-auto mb-4"
          />
        </div>
      </aside>
    );
  };
  
  export default AddUpFast;
  