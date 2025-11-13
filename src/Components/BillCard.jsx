import { Link } from "react-router";

const BillCard = ({ bill }) => {
    const { title, category, location, date, image, _id } = bill;

    return (
        <div className="bg-base-100 rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col">
            <div className="p-4 pb-0">
                <img src={image} alt={title} className="w-full h-40 object-cover rounded-lg" />
            </div>

            <div className="px-4 pt-4 pb-6 flex flex-col justify-between grow">
                <div>
                    <h3 className="text-lg font-semibold text-[#8559ff] mb-1">{title}</h3>
                    <p className="text-sm text-base-content  mb-1">
                        Category: <span className="bg-[#f3edff] border border-purple-200 px-2 rounded-lg text-sm font-semibold text-center text-[#8559ff]">{category}</span>
                    </p>
                    <p className="text-sm text-base-content mb-1">Location: {location}</p>
                    <p className="text-sm text-base-content mb-3">Date: {date}</p>
                </div>

                <Link to={`/billsDetails/${bill._id}`} className="btn btn-sm bg-[#f3edff] text-black mt-4">
                    See Details
                </Link>
            </div>
        </div>
    );
};

export default BillCard;
