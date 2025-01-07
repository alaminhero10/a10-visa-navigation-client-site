import { IoIosArrowDroprightCircle } from "react-icons/io";
import serviceimg1 from "../../assets/service-img1.jpg"
import serviceimg2 from "../../assets/service-img2.jpg"
import serviceimg3 from "../../assets/service-img3.jpg"
import serviceimg4 from "../../assets/service-img4.jpg"



const ServicesProvide = () => {

    return (
        <div className="mb-14">
            <div className="text-center">
                <h3 className="text-base font-semibold text-green-600 my-3">SERVICE WE PROVIDE</h3>
                <h1 className="text-5xl font-bold">Explore Our Visa Citizenship <br /> & Immigration Services</h1>
            </div>
            {/* ---Service-Card--- */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14">
                {/* ---Card-01--- */}
                <div className="bg-white p-5 rounded-xl shadow-xl">
                    <h1 className="text-2xl font-semibold">Student Visa</h1>
                    <div className="divider divider-accent"></div>
                    <p className="text-gray-500 my-5">A student visa is a type of visa issued to individuals who wish to study in a foreign country. It allows international students to reside in a host country for the duration of their academic program.</p>
                    <img className="w-[350px] h-[230px]" src={serviceimg1} alt="" />
                    <button className="flex items-center justify-center text-lg font-medium mt-7">Read More <IoIosArrowDroprightCircle className="size-6 mt-1 ml-2 text-red-600" /> </button>
                </div>
                {/* ---Card-02--- */}
                <div className="bg-white p-5 rounded-xl shadow-xl">
                    <h1 className="text-2xl font-semibold">Business Visa</h1>
                    <div className="divider divider-accent"></div>
                    <p className="text-gray-500 my-5">A Business Visa is a type of visa that allows individuals to travel to a foreign country for purposes related to their professional or business activities. This visa is typically issued to business owners.</p>
                    <img className="w-[350px] h-[230px]" src={serviceimg2} alt="" />
                    <button className="flex items-center justify-center text-lg font-medium mt-7">Read More <IoIosArrowDroprightCircle className="size-6 mt-1 ml-2 text-red-600" /> </button>
                </div>
                {/* ---Card-03--- */}
                <div className="bg-white p-5 rounded-xl shadow-xl">
                    <h1 className="text-2xl font-semibold">Work Visa</h1>
                    <div className="divider divider-accent"></div>
                    <p className="text-gray-500 my-5">A Work Visa is a type of visa that allows individuals to enter and reside in a foreign country to engage in paid employment. These visas are essential for individuals seeking to work.</p>
                    <img className="w-[350px] h-[230px]" src={serviceimg3} alt="" />
                    <button className="flex items-center justify-center text-lg font-medium mt-7">Read More <IoIosArrowDroprightCircle className="size-6 mt-1 ml-2 text-red-600" /> </button>
                </div>
                {/* ---Card-04--- */}
                <div className="bg-white p-5 rounded-xl shadow-xl">
                    <h1 className="text-2xl font-semibold">Tourist Visa</h1>
                    <div className="divider divider-accent"></div>
                    <p className="text-gray-500 my-5">A Tourist Visa is a type of visa issued to individuals who wish to travel to a foreign country for leisure, vacation, or sightseeing purposes. It is one of the most common visa types and is intended.</p>
                    <img className="w-[350px] h-[230px]" src={serviceimg4} alt="" />
                    <button className="flex items-center justify-center text-lg font-medium mt-7">Read More <IoIosArrowDroprightCircle className="size-6 mt-1 ml-2 text-red-600" /> </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesProvide;