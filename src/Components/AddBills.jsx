import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const AddBills = () => {
    const { user } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleAddBill = (e) => {
        e.preventDefault();
        const form = e.target;

        const newBill = {
            title: form.title.value,
            category: form.category.value,
            amount: parseFloat(form.amount.value),
            location: form.location.value,
            description: form.description.value,
            image: form.image.value,
            date: form.date.value,
            addedBy: user?.email, // ✅ track which user added the bill
        };

        fetch("http://localhost:3000/bills", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newBill),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                Swal.fire("Success!", "Bill added successfully", "success");
                form.reset();
            })
            .catch((err) => {
                setError(err.message);
                Swal.fire("Error!", "Failed to add bill", "error");
            });
    };

    return (
        <div className="max-w-3xl mx-auto p-6 shadow-lg bg-base-100 rounded mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#8559ff]">Add New Bill</h2>
            <form onSubmit={handleAddBill} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="font-bold">Title:</label>
                    <input type="text" name="title" placeholder="Bill Title" className="input input-bordered w-full" required />

                    <label className="font-bold">Category:</label>
                    <select name="category" className="select select-bordered w-full" required>
                        <option>Water</option>
                        <option>Electricity</option>
                        <option>Gas</option>
                        <option>Internet</option>
                    </select>

                    <label className="font-bold">Amount:</label>
                    <input type="number" name="amount" placeholder="Amount" className="input input-bordered w-full" required />

                    <label className="font-bold">Location:</label>
                    <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" required />
                </div>

                <div className="space-y-2">
                    <label className="font-bold">Description:</label>
                    <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required></textarea>

                    <label className="font-bold">Image URL:</label>
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" required />

                    <label className="font-bold">Date:</label>
                    <input type="date" name="date" className="input input-bordered w-full" required />
                </div>

                {/* Submit Button */}
                <div className="col-span-1 md:col-span-2">
                    <button type="submit" className="btn bg-[#8559ff] text-white w-full">
                        Add Bill
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </div>
            </form>
        </div>
    );
};

export default AddBills;
