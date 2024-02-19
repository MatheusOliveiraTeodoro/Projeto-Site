import { Link } from "react-router-dom"


const Navbar = () => {
    return(
        <nav>
            <Link to="/">Home</Link>
            <Link to="/SobreMim">SobreMim</Link>
            <Link to="profissionais/">Profissionais</Link>
            <Link to="portifolio">Portifolios</Link>
        </nav>   
    )
}

export default Navbar