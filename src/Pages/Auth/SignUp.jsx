import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginImage from '/images/login/login.svg';
const SignUp = () => {
    return (
        <div className="container mx-auto py-5 px-3">
            <div className="flex justify-evenly items-center gap-5">
                <div className='w-1/2'>
                <img className='py-10' src={loginImage} alt="" />
                </div>
                
                <div className="border rounded-xl p-5 w-1/2">
                    <h3 className='text-dark_02 text-4xl font-bold text-center'>Sign Up</h3>
                    <form>
                        <div className='py-2'>
                            <label className='block py-1.5' htmlFor="name">Name</label>
                            <input className='border outline-none rounded-lg px-3 py-2.5 w-full' type="text" name="name" id="name" placeholder='Your name'/>
                        </div>
                        <div className='py-2'>
                            <label className='block py-1.5' htmlFor="email">Email</label>
                            <input className='border outline-none rounded-lg px-3 py-2.5 w-full' type="email" name="email" id="email" placeholder='Your Email'/>
                        </div>
                        <div className='py-2'>
                            <label className='block py-1.5' htmlFor="email">Password</label>
                            <input className='border outline-none rounded-lg px-3 py-2.5 w-full' type="password" name="password" id="password" placeholder='Your Password'/>
                        </div>
                        <button className='btn btn-primary w-full my-5'>Sign Up</button>
                    </form>
                    <h4 className='text-dark_02 text-lg text-center font-medium'>Or Sign Up with</h4>
                    <div className='flex justify-center py-2'>
                        <span className="bg-slate-200 rounded-lg p-2"><FcGoogle size={25}/></span>
                    </div>
                    <h4 className='text-dark_03 text-lg text-center'>Already have an account? <Link to='/login' className="text-primary font-bold">Login</Link></h4>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
