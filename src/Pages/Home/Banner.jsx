import { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

const Banner = () => {
    const slides = [
        {
            url: 'https://i.ibb.co/tZFGRfb/1-min.jpg',
        },
        {
            url: 'https://i.ibb.co/PhvZnv8/2-min.jpg',
        },
        {
            url: 'https://i.ibb.co/bRVbhWY/3-min.jpg',
        },
        {
            url: 'https://i.ibb.co/HtdgRhD/4-min.jpg',
        },
        {
            url: 'https://i.ibb.co/8KQ6PpV/5-min.jpg',
        },
        {
            url: 'https://i.ibb.co/jg3Pp0t/6-min.jpg',
        },
    ];
    const [currentImage, setCurrentImage] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentImage === 0;
        const newSlide = isFirstSlide ? slides.length - 1 : currentImage - 1;
        setCurrentImage(newSlide);
    };
    const nextSlide = () => {
        const isLastSlide = currentImage === slides.length - 1;
        const newSlide = isLastSlide ? 0 : currentImage + 1;
        setCurrentImage(newSlide);
    }; 
    return (
        <div className="container w-full mx-auto my-5 px-3 lg:px-0">
            <div className="relative group">
                <img
                    className="w-full h-[580px] rounded-xl"
                    src={slides[currentImage].url}
                    alt=""
                />
                <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className="text-white space-y-7 pl-12 w-1/2">
                        <h2 className="text-2xl md:text-6xl font-bold">
                            Affordable Price For Car Servicing
                        </h2>
                        <p>
                            There are many variations of passages of available,
                            but the majority have suffered alteration in some
                            form
                        </p>
                        <div className='flex flex-col md:flex-row gap-3'>
                            <button className="btn btn-primary mr-5">
                                Discover More
                            </button>
                            <button className="btn btn-outline-white">
                                Latest Project
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hidden group-hover:block absolute bottom-16 -translate-x-0 translate-y-1/2 right-24 text-2xl rounded-full p-2 bg-white/20 text-white cursor-pointer">
                    <BsChevronCompactLeft
                        onClick={prevSlide}
                        size={30}></BsChevronCompactLeft>
                </div>
                <div className="hidden group-hover:block absolute bottom-16 -translate-x-0 translate-y-1/2 right-10 text-2xl rounded-full p-2 bg-primary text-white cursor-pointer">
                    <BsChevronCompactRight
                        onClick={nextSlide}
                        size={30}></BsChevronCompactRight>
                </div>
            </div>
        </div>
    );
};

export default Banner;
