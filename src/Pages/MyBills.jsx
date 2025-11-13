import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyBills = () => {
    const { user } = use(AuthContext);
    const [myBills, setMyBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedBill, setSelectedBill] = useState(null)

    const totalAmount = myBills.reduce((sum, bill) => sum + Number(bill.amount), 0);

    const openUpdateModal = (bill) => {
    setSelectedBill(bill);
    document.getElementById("update_modal").showModal();
  };

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/payments?email=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    setMyBills(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log("fetcherror,", err.message);
                    setLoading(false);
                });
        }
    }, [user]);
    
    const handleUpdate = (e) =>{
        e.preventDefault()
        const updateBill = {
            amount: e.target.amount.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            date: e.target.date.value,
        }

        fetch(`http://localhost:3000/payments/${selectedBill._id}`,{
            method: "PUT",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(updateBill)
        })
            .then(res => res.json())
            .then(() => {
                document.getElementById("update_modal").close();
                Swal.fire("Updated","Bill updated successfully", "success")
                setMyBills(prev => prev.map(b => (b._id === selectedBill._id ? {...b, ...updateBill} : b)))
            })
    }
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">My Paid Bills</h2>

            <div className="mb-4 flex justify-between items-center">
                <p className="font-bold">Total Bill Paid: ({myBills.length})</p>
                <p className="mb-4 flex items-center">
                    <strong className="text-gray-700">Total Amount:</strong>
                    <span className="flex items-center gap-1 px-3 py-1 rounded-lg text-base font-semibold text-gray-700">
                        <FaBangladeshiTakaSign className="text-gray-600" />
                        <span className="bg-[#f7ff85] border border-purple-200 px-2 rounded-md text-gray-700">{totalAmount}</span>
                    </span>
                </p>
            </div>

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
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myBills.map((bill) => (
                                <tr key={bill._id}>
                                    <td>{bill.username}</td>
                                    <td>{bill.email}</td>
                                    <td>
                                        <span className="flex items-center gap-1 px-3 py-1 rounded-lg text-base font-semibold text-gray-700">
                                            <FaBangladeshiTakaSign className="text-gray-600" />
                                            {bill.amount}
                                        </span>
                                    </td>
                                    <td>{bill.address}</td>
                                    <td>{bill.phone}</td>
                                    <td>{bill.date}</td>
                                    <td>
                                        <span className={"px-2  rounded-l-full rounded-r-full text-white bg-green-500"}>{bill.status}</span>
                                    </td>
                                    <td className="flex gap-2">
                                        <button onClick={() => openUpdateModal(bill)} className="btn btn-sm btn-info">
                                            Update
                                        </button>
                                        <button className="btn btn-sm btn-error">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <dialog id="update_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg mb-4">Update Bill</h3>
                    <form onSubmit={handleUpdate} className="space-y-4">
                        <input name="amount" defaultValue={selectedBill?.amount} className="input input-bordered w-full" />
                        <input name="address" defaultValue={selectedBill?.address} className="input input-bordered w-full" />
                        <input name="phone" defaultValue={selectedBill?.phone} className="input input-bordered w-full" />
                        <input name="date" type="date" defaultValue={selectedBill?.date} className="input input-bordered w-full" />

                        <button type="submit" className="btn btn-primary w-full">
                            Update
                        </button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-outline w-full">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default MyBills;
