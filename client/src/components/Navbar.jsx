import { useNavigate, Link } from "react-router-dom"

const Navbar = () => {

    

    return (
        <div>
            <div className="flex items-center">
                <div>
                    <Link to='/'>
                    <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>                    
                    </Link>    
                </div>
                <span className="text-xl">Habit Tracker</span>         
            </div>
            
            {/* <Link to='/lists'> Lists</Link> */}
        </div>
    )
}

export default Navbar