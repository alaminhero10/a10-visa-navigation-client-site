
const MyVisaApplicationCard = ({ applyData }) => {

    const { _id, countryName, time, fee, photo, application_method, validity, select } = applyData;

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
                <div className="flex items-center justify-end gap-5 text-center mt-7">
                    <button className="text-[#015CB5] py-2 px-5 text-base font-medium hover:text-white border border-solid border-[#015CB5] hover:border-[#f31717] rounded-xl hover:bg-[#f31717]">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MyVisaApplicationCard;