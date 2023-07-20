import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="p-10 font-mono text-xl">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between text-center items-center gap-5">
        <h1 className="text-white font-bold uppercase">Armando Alvarez</h1>
        <div className="flex flex-col justify-end sm:flex-row gap-2">
            <Link to='/projects' className="text-white font-bold uppercase mx-5">
            Projects
            </Link>
            <Link to='/about' className="text-white font-bold uppercase mx-5">
            About Me
            </Link>
            <Link to='/contact' className="text-white font-bold uppercase mx-5">
            Contact Me
            </Link>
            <Link to='/resume' className="text-white font-bold uppercase mx-5">
            Resume
            </Link>
        </div>
      </nav>
    </header>
  )
}
