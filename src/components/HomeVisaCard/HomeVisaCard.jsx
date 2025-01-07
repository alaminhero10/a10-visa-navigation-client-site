import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import LatestHomeVisaCard from "../LatestHomeVisaCard/LatestHomeVisaCard";

const HomeVisaCard = () => {

    const latestVisa = useLoaderData();

    const [visas, setVisas] = useState(latestVisa);

    return (
        <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
                {
                    visas.map((visa) => <LatestHomeVisaCard key={visa._id} visa={visa}></LatestHomeVisaCard>)
                }
            </div>
        </div>
    );
};

export default HomeVisaCard;