import { PiCalendar, PiMapPinLineBold, PiPhoneCall } from "react-icons/pi";

const ContactInfo = () => {
    return (
        <section className="container mx-auto py-5 px-3">
            <div className="bg-dark_01 rounded-xl flex flex-col lg:flex-row justify-evenly items-center gap-5 py-10">
                <div className="inline-flex justify-between items-center gap-3">
                    <PiCalendar className="text-primary" size={45}/>
                    <div className="text-white">
                        <h4 className="font-medium">We are open monday-friday</h4>
                        <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
                    </div>
                </div>
                <div className="inline-flex justify-between items-center gap-3">
                    <PiPhoneCall className="text-primary" size={45}/>
                    <div className="text-white">
                        <h4 className="font-medium">Have a question?</h4>
                        <h3 className="text-2xl font-bold">+2546 251 2658</h3>
                    </div>
                </div>
                <div className="inline-flex justify-between items-center gap-3">
                    <PiMapPinLineBold className="text-primary" size={45}/>
                    <div className="text-white">
                        <h4 className="font-medium">Need a repair? our address</h4>
                        <h3 className="text-2xl font-bold">Liza Street, New York</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;