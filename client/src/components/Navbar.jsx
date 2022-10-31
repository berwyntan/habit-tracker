import { useNavigate, Link } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Link to='/'>Home | </Link>
            <Link to='/lists'> Lists</Link>
        </div>
    )
}

export default Navbar