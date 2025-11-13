import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyBills = () => {
    const {user} = use(AuthContext)
    const [myBills, setMyBills] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(user?.email){
            fetch(`http://localhost:3000/payments?email=${user.email}`)
                .then(res => res.json())
                .then(data =>{

                    setMyBills(data)
                    setLoading(false)
                })
                .catch(err => {
                    console.log("fetcherror,", err.message)
                    setLoading(false)
                })
        }
    },[user])
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">My Paid Bills</h2>

            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <span className="loading loading-bars loading-xl scale-150"></span>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Amount</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myBills.map((bill) => (
                                <tr key={bill._id}>
                                    <td>{bill.username}</td>
                                    <td>{bill.email}</td>
                                    <td>৳{bill.amount}</td>
                                    <td>{bill.address}</td>
                                    <td>{bill.phone}</td>
                                    <td>{bill.date}</td>
                                    <td className="flex gap-2">
                                        <button className="btn btn-sm btn-info">Update</button>
                                        <button className="btn btn-sm btn-error">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyBills;