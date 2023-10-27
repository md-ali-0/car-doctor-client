import { Link, NavLink } from 'react-router-dom';
import logo from '/logo.svg';

const Header = () => {
    return (
        <header className="container mx-auto px-3">
            <nav className="flex flex-wrap justify-between items-center py-3">
                <img className='w-16' src={logo} alt="Car Doctor" />
                
                <ul className="flex flex-col order:3 md:flex-row justify-between items-center text-dark_02 font-medium gap-5">
                    <li><NavLink to='/' className={({isActive})=>isActive?'text-primary':''}>Home</NavLink></li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <button className="btn btn-outline-primary order-2"><Link to='/login'>Appointment</Link></button>
            </nav>
        </header>
    );
};

export default Header;
