import axios from 'axios';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import loginImage from '/images/login/login.svg';

const Login = () => {
    const location = useLocation();
    const { createLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createLogin(email, password)
            .then(() => {
                const user = { email };
                axios.post('http://localhost:8080/jwt',user)
                .then(res=>{
                    console.log(res.data);
                    if (location.state) {
                        navigate(location.state);
                    } else {
                        navigate('/');
                    }
                })
                .catch(err=>{
                    console.log(err);
                })

            })
            .catch((err) => {
                console.log(err.code);
            });
    };
    return (
        <div className="container mx-auto py-5 px-3">
            <div className="flex justify-evenly items-center gap-5">
                <div className="w-1/2">
                    <img className="py-10" src={loginImage} alt="" />
                </div>

                <div className="border rounded-xl p-5 w-1/2">
                    <h3 className="text-dark_02 text-4xl font-bold text-center">
                        Login
                    </h3>
                    <form onSubmit={handleLogin}>
                        <div className="py-2">
                            <label className="block py-1.5" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="border outline-none rounded-lg px-3 py-2.5 w-full"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="py-2">
                            <label className="block py-1.5" htmlFor="email">
                                Password
                            </label>
                            <input
                                className="border outline-none rounded-lg px-3 py-2.5 w-full"
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Your Password"
                            />
                        </div>
                        <button className="btn btn-primary w-full my-5">
                            Login
                        </button>
                    </form>
                    <h4 className="text-dark_02 text-lg text-center font-medium">
                        Or Sign Up with
                    </h4>
                    <div className="flex justify-center py-2">
                        <span className="bg-slate-200 rounded-lg p-2">
                            <FcGoogle size={25} />
                        </span>
                    </div>
                    <h4 className="text-dark_03 text-lg text-center">
                        Don&apos;t Have an account?{' '}
                        <Link to="/register" className="text-primary font-bold">
                            Sign Up
                        </Link>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Login;
