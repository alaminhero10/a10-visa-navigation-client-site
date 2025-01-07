// import { NavLink } from "react-router-dom";

// const LatestVisaCard = ({ visaData }) => {

//     const { country, image, visa_type, processing_time, fee, validity, application_method } = visaData;

//     console.log(visaData)


//     return (
//         <div className="border border-solid border-gray-50 rounded-md p-5 bg-base-100 w-96 shadow-lg">
//             <img src={image} className="w-full h-[200px] rounded-md" alt="" />
//             <div className="divider"></div>
//             <div className="">
//                 <h1 className="text-xl font-medium">{country}</h1>
//                 <p className="text-base font-medium">{visa_type}</p>
//                 <div className="flex justify-between items-center">
//                     <p className="text-base font-medium">{fee}</p>
//                     <p className="text-base font-medium">{processing_time}</p>
//                 </div>
//                 <div className="flex justify-between items-center">
//                     <p className="text-base font-medium">{application_method}</p>
//                     <p className="text-base font-medium">{validity}</p>
//                 </div>
//                 <div className="text-center mt-5">
//                     <NavLink to={`/cardDetails/${visaData.id}`} className="btn btn-primary">See Details</NavLink>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default LatestVisaCard;