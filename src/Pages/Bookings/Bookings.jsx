import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Loading from '../../components/Loading';
import checkoutBg from '/images/checkout/checkout.png';

const Bookings = () => {
    const { user, isLoading: loading } = useContext(AuthContext);
    const url = `http://localhost:8080/checkout`;
    const {
        data: bookings,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['bookingss'],
        queryFn: async () => {
            const response = await axios(url, {
                params: {
                    email: user?.email,
                },
            });
            return response.data;
        },
    });

    if (loading) {
        return <Loading></Loading>;
    }
    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleDelete = (id) => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:8080/checkout/${id}`, {
                method: 'DELETE',
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        refetch();
                    }
                });
        }
    };

    const handleBookingConfirm = (id) => {
        fetch(`http://localhost:8080/checkout/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ status: 'confirm' }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    refetch();
                }
            });
    };
    return (
        <div className="container mx-auto py-5 px-3">
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%] relative rounded-xl h-36 md:h-64">
                <img
                    className="w-full h-full rounded-xl object-cover absolute mix-blend-overlay"
                    src={checkoutBg}
                    alt=""
                />
                <div className="px-5 py-14 md:px-10 md:py-28">
                    <h3 className="text-white text-3xl md:text-4xl font-bold px-10">
                        My Bookings
                    </h3>
                </div>
            </div>
            <div className="overflow-x-auto w-full py-5">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>Action</label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((booking) => (
                            <tr key={booking._id}>
                                <th>
                                    <button
                                        onClick={() =>
                                            handleDelete(booking._id)
                                        }
                                        className="btn btn-outline-primary">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded w-24 h-24">
                                            {booking.img && (
                                                <img
                                                    src={booking.img}
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </td>
                                <td>{booking.service}</td>
                                <td>${booking.price}</td>
                                <th>
                                    {booking.status === 'confirm' ? (
                                        <span className="font-bold text-primary">
                                            Confirmed
                                        </span>
                                    ) : (
                                        <button
                                            onClick={() =>
                                                handleBookingConfirm(
                                                    booking._id,
                                                )
                                            }
                                            className="btn btn-primary">
                                            Please Confirm
                                        </button>
                                    )}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;
