import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="p-10">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between text-center items-center gap-5">
        <h1 className="text-white font-bold uppercase">Portfolio Armando Alvarez</h1>
        <Link to='/projects' className="text-white font-bold uppercase md:flex-row">
          Projects
        </Link>
        <Link to='/about' className="text-white font-bold uppercase">
          About Me
        </Link>
        <Link to='/contact' className="text-white font-bold uppercase">
          Contact Me
        </Link>
        <Link to='/resume' className="text-white font-bold uppercase">
          Resume
        </Link>
      </nav>
    </header>
  )
}
