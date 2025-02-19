import { Link } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
    return(
        <header>
            <nav>
                <li><Link> Home </Link></li>
                <li><Link> About</Link></li>
                <li><Link> Gallery</Link></li>
                <li><Link> Contact</Link></li>
                <li><Link> SignUp</Link></li>
            </nav>
        </header>
    )
}

export default Navbar;