import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Home, FolderGit2 } from "lucide-react";
import { NavLink } from "react-router-dom";

interface NavBarProps {
  className?: string;
}
function Navbar({ className }: NavBarProps) {
  return (
    <nav
      className={`
      ${className}
      fixed top-5 left-1/2 -translate-x-1/2
      z-50
      flex items-center gap-2
      rounded-full
      border border-white/10
      bg-black/30
      px-3 py-2
      backdrop-blur-xl
      shadow-lg
      p-3
    `}
    >
      <NavLink
        to="/"
        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <Home size={18} />
        Home
      </NavLink>

      <NavLink
        to="/projects"
        className="flex items-center gap-2 rounded-full px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <FolderGit2 size={18} />
        Projects
      </NavLink>

      <div className="mx-1 h-5 w-px bg-white/15" />

      <a
        href="https://github.com/euphorie7"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <FaGithub size={19} />
      </a>

      <a
        href="https://www.linkedin.com/in/hamza-laouni/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
      >
        <FaLinkedin size={19} />
      </a>
    </nav>
  );
}

export default Navbar;
