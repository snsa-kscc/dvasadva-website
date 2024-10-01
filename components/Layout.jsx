import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { ReactLenis } from "@studio-freight/react-lenis";

const Layout = ({ children }) => {
  return (
    <ReactLenis root>
      <div className="flex flex-col min-h-screen" >
        <Head>
          <title>dvasadva</title>
          <meta name="description" content="Truth can only be found in one place: the code." />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        </Head>
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-zinc-50 h-10"></div>
        <Header />
        <main className="flex-1 bg-stone-800">{children}</main>
        <Footer />
      </div >
    </ReactLenis>
  );
};

const Header = () => {

  return (
    <header className="text-zinc-50 bg-stone-800 body-font">
      <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
        <Link href="/" legacyBehavior>
          <a className="flex items-center mb-4 font-medium title-font md:mb-0">
            <Image alt="dvasadva d.o.o." src="/2s2.png" width={177} height={100} />
          </a>
        </Link>
        <nav className="flex flex-wrap items-center justify-center space-x-4 text-base md:ml-auto">
          <Link href="/about" legacyBehavior>
            <button type="button" className="rounded bg-gradient-to-r from-green-400 to-blue-500 hover:-translate-y-1 hover:scale-110 p-4 transition-all ease-in-out duration-300">
              About Us
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-stone-800 body-font">
    <div className="container flex flex-col flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
      <div className="flex-shrink-0 mx-auto mt-10 md:mx-0 md:text-left md:mt-0">
        <div className="font-medium text-zinc-50">
          <Image alt="dvasadva d.o.o." src="/2s2.png" width={88} height={50} />
          <p className="text-xl">dvasadva d.o.o. <span className="text-xs">for services</span></p>
          <p className="text-xs">Zagrebačka 15, Varaždin, Croatia</p>
          <p className="text-xs">Reg: Commercial Court, Varaždin; No: 070142589</p>
          <p className="text-xs">IBAN: HR3524840081135414789, Raiffeisenbank Austria d.d.,</p>
          <p className="text-xs">Magazinska cesta 69, Zagreb, Croatia</p>
          <p className="text-xs">Base capital: 2,654.46 eur, fully paid</p>
          <p className="text-xs">Board member: Siniša Košćec</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-zinc-50">
      <div className="container flex flex-col flex-wrap px-5 py-4 mx-auto sm:flex-row">
        <p className="text-sm text-center text-zinc-50 sm:text-left">© 2024 dvasadva d.o.o.</p>
        <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
          <a href="https://linkedin.com/company/dvasadva" className="ml-3 text-zinc-50">
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

export default Layout