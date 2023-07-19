import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header>
      <nav className="flex flex-column md:flex-row justify-between p-10">
        <h1 className="text-white font-bold uppercase">Portfolio Armando Alvarez</h1>
        <Link to='/projects' className="text-white font-bold uppercase">
          Projects
        </Link>
        <Link to='/about' className="text-white font-bold uppercase">
          About Me
        </Link>
        <Link to='/projects' className="text-white font-bold uppercase">
          Resume
        </Link>
      </nav>
    </header>
  )
}
