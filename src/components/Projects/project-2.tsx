import Typwriter from "typewriter-effect";


const Project2 = () => {
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
            <Typwriter
          options={{
            strings: ["$ npm install Project-2"],
            autoStart: true,
            loop: true,
            delay: 25,
            deleteSpeed: 40,
          }}
        /></p>
          <p className="text-white">Pagina Web</p>
          <p className="text-white">React - Next.js</p>
          <p className="text-green-400">$</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxKtdLfAXl8cuSQZPMuBa4pu2G3e_ZgY5lg&s"
            alt="Proyecto 2"
            className="w-100 h-100 mx-auto mb-4"
          />
        </div>
      </aside>
    );
  };
  
  export default Project2;
  