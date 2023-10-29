import axios from 'axios';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../../components/Loading';
import checkoutBg from '/images/checkout/checkout.png';

const Checkout = () => {
    const loadedService = useLoaderData();
    const { title, price } = loadedService;
    const { user, isLoading } = useContext(AuthContext);
    
    const HandleCheckOut = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const img = loadedService.img;
        const service = form.service.value;
        const price = form.price.value;
        const status = 'pending'

        axios.post('http://localhost:8080/add-service', {name, phone, email, img, service, price, status})
          .then(()=> {
            alert('success')
          })
          .catch((error)=>{
            console.log(error);
          });
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="container mx-auto py-5 px-3">
            <div>
                <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] relative rounded-xl h-36 md:h-64">
                    <img
                        className="w-full h-full rounded-xl object-cover absolute mix-blend-overlay"
                        src={checkoutBg}
                        alt=""
                    />
                    <div className="px-5 py-14 md:px-10 md:py-28">
                        <h3 className="text-white text-3xl md:text-4xl font-bold px-10">
                            Checkout
                        </h3>
                    </div>
                </div>
                <div className="bg-dark_07 rounded-xl my-5 p-16">
                    <form onSubmit={HandleCheckOut}>
                        <div className="flex flex-col md:flex-row gap-5 py-2">
                            <input
                                className="bg-white outline-none rounded-lg px-5 py-2.5 w-full"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Name"
                                defaultValue={user.displayName}
                            />
                            <input
                                className="bg-white outline-none rounded-lg px-5 py-2.5 w-full"
                                type="text"
                                name="price"
                                id="price"
                                placeholder="Price"
                                defaultValue={price}
                            />
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 py-2">
                            <input
                                className="bg-white outline-none rounded-lg px-5 py-2.5 w-full"
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Your Phone"
                            />
                            <input
                                className="bg-white outline-none rounded-lg px-5 py-2.5 w-full"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Your Email"
                                defaultValue={user.email}
                            />
                        </div>
                        <div className="py-2">
                            <input
                                className="bg-white outline-none rounded-lg px-5 py-2.5 w-full"
                                type="text"
                                name="service"
                                id="service"
                                placeholder="Your Service"
                                defaultValue={title}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary w-full">
                            Order Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
