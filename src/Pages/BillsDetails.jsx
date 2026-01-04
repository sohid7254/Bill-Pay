import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { Helmet } from "@dr.pogodin/react-helmet";

const BillsDetails = () => {
    const { id } = useParams();
    const [bill, setBill] = useState(null);
    const [isPaid, setIsPaid] = useState(false);

    const { user } = use(AuthContext);

    useEffect(() => {
        fetch(`https://assignment10-server-beta-weld.vercel.app/billsDetails/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setBill(data);
            })
            .catch((err) => console.error(err.message));

        // Check if user has already paid this bill
        if (user?.email) {
            fetch(`https://assignment10-server-beta-weld.vercel.app/payments?email=${user.email}`)
                .then((res) => res.json())
                .then((payments) => {
                    const hasPaid = payments.some((payment) => payment.billId === id);
                    setIsPaid(hasPaid);
                })
                .catch((err) => console.error("Error checking payment status:", err));
        }
    }, [id, user?.email]);

    if (!bill) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-bars loading-xl scale-150"></span>
            </div>
        );
    }

    const billMonth = new Date(bill.date).getMonth();
    const currentMonth = new Date().getMonth();
    const isCurrentMonth = billMonth === currentMonth;

    const handleSubmit = (e) => {
        e.preventDefault();
        const payData = {
            email: user?.email,
            billId: bill._id,
            amount: bill.amount,
            username: e.target.username.value,
            address: e.target.address.value,
            phone: e.target.phone.value,
            date: new Date().toISOString().split("T")[0],
            info: e.target.info.value,
            status: "Active",
        };

        fetch("https://assignment10-server-beta-weld.vercel.app/payments", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(payData),
        })
            .then((res) => res.json())
            .then(() => {
                document.getElementById("pay_modal").close();
                setIsPaid(true); // Update local state immediately
                Swal.fire("Success", "Bill Paid Successfully", "success");
            })
            .catch((err) => console.error(err));
    };
    return (
        <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative">
            <Helmet>
                <title>{bill.title}</title>
            </Helmet>
            {/* Left Side - Image */}
            {bill.image && (
                <div>
                    <img src={bill.image} alt={bill.title} className="w-full h-96 object-cover rounded-lg shadow-md" />
                </div>
            )}

            {/* Right Side - Details */}
            <div className="flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-2xl font-bold text-[#8559ff] mb-4">{bill.title}</h2>
                    <p className="mb-2">
                        <strong>Category:</strong> <span className="bg-[#f3edff] border border-purple-200 px-2 rounded-lg text-sm font-semibold text-center text-[#8559ff]">{bill.category}</span>
                    </p>
                    <p className="mb-2">
                        <strong>Location:</strong> {bill.location}
                    </p>
                    <p className="mb-4 flex items-center">
                        <strong className="text-base-content">Amount:</strong>
                        <span className="flex items-center gap-1 px-3 py-1 rounded-lg text-base font-semibold text-gray-700">
                            <FaBangladeshiTakaSign className="text-base-content" />
                            <span className="bg-[#f7ff85] border border-purple-200 px-2 rounded-md text-gray-700">{bill.amount}</span>
                        </span>
                    </p>

                    <p className="mb-2">
                        <strong>Date:</strong> {bill.date}
                    </p>
                    <p className="mt-4 text-base-content">{bill.description}</p>
                </div>

                {/* Pay Bill Button */}
                <div className="mt-6">
                    {isPaid ? (
                        <button disabled className="btn btn-disabled w-full md:w-auto bg-green-100 text-green-700 border-green-200">
                            Paid
                        </button>
                    ) : isCurrentMonth ? (
                        <button onClick={() => document.getElementById("pay_modal").showModal()} className="btn bg-[#f3edff] text-black w-full md:w-50 hover:bg-[#af85ff]">
                            Pay Bill
                        </button>
                    ) : (
                        <button disabled className="btn btn-disabled w-full md:w-auto">
                            Only current month bills can be paid
                        </button>
                    )}
                </div>
            </div>

            {/* Modal */}

            <dialog id="pay_modal" className="modal">
                <div className="modal-box max-w-3xl">
                    <h3 className="font-bold text-lg mb-4 text-center">Pay Bill</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="font-bold">Email:</label>
                            <input type="email" value={user?.email} readOnly className="input input-bordered w-full" />
                            <label className="font-bold">Bill ID:</label>
                            <input type="text" value={bill._id} readOnly className="input input-bordered w-full" />
                            <label className="font-bold">Bill Amount:</label>
                            <input type="text" value={bill.amount} readOnly className="input input-bordered w-full" />
                            <label className="font-bold">UserName:</label>
                            <input type="text" name="username" placeholder="Username" className="input input-bordered w-full" required />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-2">
                            <label className="font-bold">Address:</label>
                            <input type="text" name="address" placeholder="Address" className="input input-bordered w-full" required />
                            <label className="font-bold">Phone:</label>
                            <input type="text" name="phone" placeholder="Phone" className="input input-bordered w-full" required />
                            <label className="font-bold">Paid at:</label>
                            <input type="text" value={new Date().toISOString().split("T")[0]} readOnly className="input input-bordered w-full" />
                            <label className="font-bold">Info:</label>
                            <textarea name="info" placeholder="Additional info" className="textarea textarea-bordered w-full"></textarea>
                        </div>

                        {/* Submit Button Full Width */}
                        <div className="col-span-1 md:col-span-2">
                            <button type="submit" className="btn bg-[#8559ff] text-white w-full">
                                Submit Payment
                            </button>
                        </div>
                    </form>

                    <div className="modal-action">
                        <form method="dialog" className="w-full">
                            <button className="btn btn-outline w-full">Cancel</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BillsDetails;
