import { useLoaderData } from "react-router-dom";
import MyVisaApplicationCard from "../../components/MyVisaApplicationCard/MyVisaApplicationCard";
import { useEffect, useState } from "react";

const MyVisaApplications = () => {

    const visaData = useLoaderData();

    // const remaining = visaData.filter(visa => visa.email == visaApplyData.email);
    // console.log(remaining)

    const [visasData, setVisaData] = useState(visaData);
    console.log(visasData)

    // -----Search-----
    const [search, setSearch] = useState("");

    useEffect(() => {
        fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/visa?searchParams=${search}`)
            .then(res => res.json())
            .then(data => {
                setVisaData(data)
            })
    }, [search]);



    return (
        <div className="w-10/12 mx-auto mt-10 mb-20">
            <div className="w-3/12 mx-auto ">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        name="search"
                        className="grow"
                        placeholder="Search" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
            </div>
            <div className="text-center mt-10">
                <span className="text-4xl font-semibold text-white bg-[#24247e] rounded-sm px-5 py-1 shadow-xl">My Visa Applications</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                {
                    visasData.map((applyData) => <MyVisaApplicationCard key={applyData._id} applyData={applyData}></MyVisaApplicationCard>)
                }
            </div>
        </div>
    );
};

export default MyVisaApplications;