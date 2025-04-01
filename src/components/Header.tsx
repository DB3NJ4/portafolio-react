const Header = () => {
  return (
    <header className="bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-300" href="#">
              <span className="sr-only">Home</span>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-lg">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-400 border-b-2 border-transparent hover:border-green-400"
                    href="#about"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-400 border-b-2 border-transparent hover:border-green-400"
                    href="#careers"
                  >
                    Careers
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-400 border-b-2 border-transparent hover:border-green-400"
                    href="#history"
                  >
                    History
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-400 border-b-2 border-transparent hover:border-green-400"
                    href="#services"
                  >
                    Services
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-400 border-b-2 border-transparent hover:border-green-400"
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-green-400 dark:text-white dark:hover:text-green-400 border-b-2 border-transparent hover:border-green-400"
                    href="#contact"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </nav>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
