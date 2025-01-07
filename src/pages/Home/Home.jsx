import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import ServicesProvide from "../../components/ServicesProvide/ServicesProvide";
import Testimonial from "../../components/Testimonial/Testimonial";
import LatestHomeVisaCard from "../../components/LatestHomeVisaCard/LatestHomeVisaCard";

const Home = () => {

    const allVisa = useLoaderData();

    return (
        <div>
            {/* ---Banner--- */}
            <section>
                <Banner></Banner>
            </section>
            {/* ---Testimonial--- */}
            <section className="w-11/12 mx-auto mb-14">
                <Testimonial></Testimonial>
            </section>
            {/* ---Services Provide--- */}
            <section className="bg-gradient-to-r from-sky-50 via-slate-100 to-slate-50">
                <div className="w-10/12 mx-auto py-14">
                    <ServicesProvide></ServicesProvide>
                </div>
            </section>
            {/* ---Latest Home Visa--- */}
            <section className="w-10/12 mx-auto mb-24">
            <div className="w-96 bg-gray-50 shadow-lg text-center py-2 my-14 rounded-xl mx-auto">
                <h1 className="text-5xl font-semibold">See All Visa</h1>
            </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 mt-16 mb-20">
                    {
                        allVisa.slice(0,6).map((visa) => <LatestHomeVisaCard key={visa._id} visa={visa}></LatestHomeVisaCard>)
                    }
                </div>
                {/* See All-Button */}
                <div className="text-center my-5">
                    <Link to="/allVisas" className="bg-[#13af42] py-4 px-10 text-xl font-medium text-white hover:bg-[#015CB5]">See All Visa</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;