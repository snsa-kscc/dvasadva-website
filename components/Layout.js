import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className="text-gray-700 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/">
          <a className="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
            <Image alt="dvasadva d.o.o." src="/2s2.jpg" width={177} height={100} />
            <span className="ml-3 text-xl">dvasadva</span>
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto">
          <Link href="/about">
            <a className={asPath === "/about" ? "font-black text-black" : "hover:text-gray-900"}>About Us</a>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="text-gray-700 body-font">
    <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      <div className="flex-shrink-0 w-64 mx-auto mt-10 text-center md:mx-0 md:text-left md:mt-0">
        <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <Image alt="dvasadva d.o.o." src="/2s2.jpg" width={88} height={50} />
          <span className="ml-3 text-xl">dvasadva d.o.o.</span>
        </a>
        <p className="mt-2 text-sm text-gray-500">Motion graphics agency which harneses power of deep neural networks.</p>
      </div>
    </div>
    <div className="bg-gray-200">
      <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
        <p className="text-sm text-center text-gray-500 sm:text-left">© 2022 dvasadva d.o.o.</p>
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href="https://linkedin.com/company/dvasadva" className="ml-3 text-gray-500">
            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
              <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </footer>
);

export default Layout;
