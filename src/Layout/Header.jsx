import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import Loading from '../components/Loading';
import logo from '/logo.svg';

const Header = () => {
    const { user, isLoading, logOut } = useContext(AuthContext);

    if (isLoading) {
        return <Loading></Loading>;
    }
    const handleLogout = () => {
        logOut();
    };
    return (
        <header className="container mx-auto px-3">
            <nav className="flex flex-wrap justify-between items-center py-3">
                <img className="w-16" src={logo} alt="Car Doctor" />

                <ul className="flex flex-col order:3 md:flex-row justify-between items-center text-dark_02 font-medium gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'text-primary' : ''
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
                <div>
                    {user && <span className='text-xl font-medium text-dark_02 px-2'>{user.displayName}</span>}
                    {user ? (
                        <button
                            onClick={handleLogout}
                            className="btn btn-outline-primary">
                            Logout
                        </button>
                    ) : (
                        <button className="btn btn-outline-primary">
                            <Link to="/login">Login</Link>
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
