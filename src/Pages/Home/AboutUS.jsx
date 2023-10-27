import parts from '/images/about_us/parts.jpg';
import person from '/images/about_us/person.jpg';
const AboutUS = () => {
    return (
        <section className="container mx-auto py-5 px-3">
            <div className="flex flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img className='w-3/4 rounded-lg' src={person} alt="person" />
                    <img className='w-1/2 absolute border-8 border-white rounded-lg top-1/2 right-5' src={parts} alt="parts" />
                </div>
                <div className='lg:w-1/2'>
                    <h3 className='text-2xl font-bold text-primary my-2'>About Us</h3>
                    <h2 className='text-4xl text-dark_01 font-bold my-5'>We are qualified <br /> & of experience <br /> in this field</h2>
                    <p className='py-1 text-dark_03'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <p className='py-1 text-dark_03'>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
                    <button className='btn btn-primary my-2'>Get More Info</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUS;