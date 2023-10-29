import PropTyes from 'prop-types';
import { PiArrowRightBold } from "react-icons/pi";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
    return (
        <div className="bg-white border rounded-xl p-3">
            <img className="rounded-lg h-64 mb-2" src={img} alt="" />
            <h3 className="text-dark_02 text-2xl font-bold">{title}</h3>
            <div className='flex justify-between'>
                <h4 className="text-primary text-xl font-semibold">Price: ${price}</h4>
                <Link to={`/checkout/${_id}`}><PiArrowRightBold className='text-primary' size={25}/></Link>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    service: PropTyes.object.isRequired,
};
export default ServiceCard;
