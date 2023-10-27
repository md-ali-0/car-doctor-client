import checkoutBg from '/images/checkout/checkout.png';

const Checkout = () => {
    const HandleCheckOut = (e) => {
        e.preventDefault();
        const form = e.target
        const fullName = `${form.fname.value} ${form.lname.value}`
        const phone = form.phone.value;
        const email = form.email.value;
        const massage = form.massage.value;
        console.log(fullName, phone, email,massage)
    };
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
                                name="fname"
                                id="fname"
                                placeholder="First Name"
                            />
                            <input
                                className="bg-white outline-none rounded-lg px-5 py-2.5 w-full"
                                type="text"
                                name="lname"
                                id="lname"
                                placeholder="Last Name"
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
                            />
                        </div>
                        <div className="py-2">
                            <textarea
                                className="bg-white outline-none rounded-lg px-5 py-2.5 w-full"
                                name="massage"
                                id="massage"
                                cols="30"
                                rows="10"
                                placeholder="Your Massage"></textarea>
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
