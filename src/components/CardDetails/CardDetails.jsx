import { useLoaderData } from "react-router-dom";
import VisaApplyModal from "../VisaApplyModal/VisaApplyModal";

const CardDetails = () => {

    // Use Loader Data:
    const singleData = useLoaderData();

    const { countryName, age, time, fee, photo, application_method, description, validity, select } = singleData;

    // --- Return ---
    return (
        <div className="md:w-9/12 lg:w-5/12 mx-auto rounded-md px-7 py-9 shadow-lg my-20 bg-gradient-to-r from-blue-100 via-indigo-50 to-blue-100">
            <div className="md:flex items-center justify-center gap-24">
                <div className="">
                    <img src={photo} className="w-[410px] h-[210px] rounded-md" alt="" />
                    <h1 className="text-3xl font-semibold text-center bg-slate-50 rounded-md mt-7 shadow-sm py-1 ">{countryName}</h1>
                </div>
                <div className="flex flex-col gap-2 mt-10 md:mt-0">
                    <p className="text-base font-medium">Visa Type: {select}</p>
                    <p className="text-base font-medium">Fee: {fee}</p>
                    <p className="text-base font-medium">Processing Time: {time}</p>
                    <p className="text-base font-medium">Processing Time: {age}</p>

                    <p className="text-base font-medium">Application Method: {application_method}</p>
                    <p className="text-base font-medium">Validity: {validity}</p>
                    <p>{description}</p>
                    <div className="text-center my-5">
                        {/* <Link to="/applyForm" className="bg-[#2a508b] py-3 px-5 rounded-lg text-lg font-medium text-white hover:bg-[#087cf0]">Apply for the Visa</Link> */}
                        <button onClick={() => document.getElementById('my_modal_4').showModal()} className="bg-[#2a508b] py-3 px-5 rounded-lg md:text-lg font-medium text-white hover:bg-[#087cf0]">Apply for the Visa</button>
                    </div>
                </div>
                
            </div>
            <VisaApplyModal></VisaApplyModal>
        </div>
    );
};

export default CardDetails;