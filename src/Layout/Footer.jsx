import logo from '/logo.svg';

const Footer = () => {
    return (
        <footer className="bg-dark_01 text-white py-10 px-3">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-5">
                    <div>
                        <img className='w-16 py-2' src={logo} alt="" />
                        <p className="text-dark_05">
                            Edwin Diaz is a software and web <br /> technologies
                            engineer, a life coach <br /> trainer who is also a
                            serial .
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold py-3">About</h3>
                        <ul className='text-dark_07'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold py-3">Company</h3>
                        <ul className='text-dark_07'>
                            <li>Why Car Doctor</li>
                            <li>About</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold py-3">Support</h3>
                        <ul className='text-dark_07'>
                            <li>Support Center</li>
                            <li>Feedback</li>
                            <li>Accesbility</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
