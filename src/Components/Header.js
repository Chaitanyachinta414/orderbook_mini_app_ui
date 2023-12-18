import Navbar from "./Navbar"
import { TbDatabaseSearch } from "react-icons/tb";
import { GiBookAura } from "react-icons/gi";
import { Link} from 'react-router-dom';


const Header = () => {

    return (
        <div className='table-wrapper'>
        <div className="Navbar-Section">
        <div className='width-adjust'>
            <div className='logo-adjust'>
                <span className="icon-adjustment book-icon"><GiBookAura /></span>
                <h2 className='header'>Orderbook</h2>
            </div>
            <div><Navbar /></div>
            <Link to="/search" className="icon-adjustment search-icon"><TbDatabaseSearch /></Link>
        </div>
    </div>
    </div>
    )

}

export default Header