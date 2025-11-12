const BillCardFull = ({ bill, onDetails }) => {
    const { title, category, location, date, image, amount, _id } = bill;

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col">
            {/* Image */}
            {image && (
                <div className="p-4 pb-0">
                    <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
                </div>
            )}

            {/* Content */}
            <div className="px-4 pt-4 pb-6 flex flex-col justify-between grow">
                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff] mb-1">{title}</h3>
                    <p className="text-sm text-gray-600 mb-1">
                        Category: <span className="bg-[#f3edff] border border-purple-200 px-2 rounded-lg text-sm font-semibold text-center text-[#8559ff]">{category}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-1">Location: {location}</p>
                    <p className="text-sm text-gray-600 mb-1">Amount: {amount} ৳</p>
                    <p className="text-sm text-gray-400 mb-3">Date: {date}</p>
                </div>

                <button onClick={onDetails ? onDetails : () => console.log("See details for:", _id)} className="btn btn-outline btn-sm text-[#8559ff] border-[#8559ff] mt-4">
                    See Details
                </button>
            </div>
        </div>
    );
};

export default BillCardFull;
