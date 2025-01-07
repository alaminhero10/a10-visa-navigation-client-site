
import { Link } from "react-router-dom";

const VisaCard = ({ visa }) => {

    const { _id, countryName, time, fee, photo, application_method, validity, select } = visa;


    return (
        <div className="border border-solid border-gray-50 rounded-md p-5 bg-base-100 w-96 shadow-lg">
            <img src={photo} className="w-full h-[200px] rounded-md" alt="" />
            <div className="divider"></div>
            <div className="">
                <h1 className="text-xl font-medium text-center">{countryName}</h1>
                <div className="mt-3">
                    <p className="text-lg font-medium">Visa Type: {select}</p>
                    <p className="text-lg font-medium">Processing Time: {time}</p>
                </div>
                <div className="">
                    <p className="text-lg font-medium">Application Method: {application_method}</p>
                    <p className="text-lg font-medium">Validity: {validity}</p>
                </div>
                <div className="">
                    <p className="text-lg font-medium">Fee: {fee}</p>
                </div>
                <div className="text-center mt-7 mb-3">
                    <Link to={`/cardDetails/${visa._id}`} className="bg-[#015CB5] py-3 px-5 text-base font-medium text-white rounded-lg hover:bg-[#13af42]">See Details</Link>
                </div>
            </div>
        </div>
    );
};

export default VisaCard;