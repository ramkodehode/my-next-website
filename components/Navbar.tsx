import Image from 'next/image';
import Link from 'next/link';
import Maldives from '../img/maldives.jpg';

function Navbar() {
  return (
    <>
      <nav className="flex justify-center mt-5 space-x-4 ">
        <Link
          href="/"
          className="px-4 py-2 font-bold rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="px-3 py-2 font-bold rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          About us
        </Link>
        <Link
          href="/Service"
          className="px-3 py-2 font-bold rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          Service
        </Link>
        <Link
          href="/contact"
          className="px-3 py-2 font-bold rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        >
          Contact us
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
