import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
      <nav
        className="
          flex items-center justify-between
          rounded-full
          border border-black/5
          bg-white/70
          px-6 py-3
          shadow-lg shadow-black/5
          backdrop-blur-2xl
        "
      >
        <Link
          to="/"
          className="text-sm font-semibold tracking-tight text-zinc-950"
        >
          NB.
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-600">
          <Link to="/projects" className="transition hover:text-black">
            Work
          </Link>

          <Link to="/about" className="transition hover:text-black">
            About
          </Link>

          <a
            href="https://github.com/euphorie7"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-black"
          >
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}