import { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, serServices] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:8080/services');
                const data = await res.json();
                serServices(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <section className="container mx-auto py-3 px-5">
            <div className="text-center space-y-2">
                <h3 className="text-primary text-2xl font-bold">Service</h3>
                <h2 className="text-4xl text-dark_01 font-bold">
                    Our Service Area
                </h2>
                <p className="text-lg text-dark_03 max-w-3xl mx-auto">
                    the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don&apos;t look
                    even slightly believable.{' '}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service) => (
                    <ServiceCard
                        key={service._id}
                        service={service}></ServiceCard>
                ))}
            </div>
            <div className='text-center py-5'>
                <button className="btn btn-outline-primary">
                    More Services
                </button>
            </div>
        </section>
    );
};

export default Services;
