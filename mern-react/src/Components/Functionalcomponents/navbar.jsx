import { Link } from 'react-router-dom';
import '../css/navbar.css'
// import UseEffect from './Hooks/UseEffect.jsx'
import { useState } from 'react';

const Navbar = () =>{
    var [dropdown,showDropdown] = useState(false)
    return(
        <header>
            <nav>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Gallery'>Gallery</Link></li>
                <div class ="dropdown" onClick={()=>showDropdown(!dropdown)}>
                <li><Link><a>Hooks</a></Link>
                {dropdown && (<ul class="dropdown-menu">
                    <li><Link to='/UseState'>Use State</Link></li>
                    <li><Link to='/UseEffect'>Use Effect</Link></li>
                    <li><Link to='/UseEffectAPI'>Use Effect API</Link></li>
                    <li><Link to='/UseRef'>Use Ref</Link></li>
                    <li><Link to='/UseMemo'>Use Memo</Link></li>
                    <li><Link to='/UseCallBack'>Use CallBack</Link></li>
                    <li><Link to='/UseMemoize'>Use Memoize</Link></li>
                </ul>)}
                </li>
                </div>
                <div class ="dropdown" onClick={()=>showDropdown(!dropdown)}>
                <li><Link><a>Memoisation</a></Link>
                {dropdown && (<ul class="dropdown-menu">
                    <li><Link to='/Memo'>Memo</Link></li>
                    <li><Link to='/LazyLoading'>LazyLoading</Link></li>
                </ul>)}
                </li>
                </div>
                <li><Link to='/hoc'>HOC's</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
                <li><Link to='/Login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Navbar;