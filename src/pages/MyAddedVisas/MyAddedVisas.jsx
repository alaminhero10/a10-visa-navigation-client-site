import { useLoaderData } from "react-router-dom";
import MyAddedVisaCard from "../../components/MyAddedVisaCard/MyAddedVisaCard";
import { useState } from "react";

const MyAddedVisas = () => {

    const visaData = useLoaderData();

    const [visas, setVisas] = useState(visaData);


    return (
        <div className="w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 mb-16">
            {
                visas.map((visa) => <MyAddedVisaCard
                    key={visa.id}
                    visa={visa}
                    visas={visas}
                    setVisas={setVisas}>
                </MyAddedVisaCard>)
            }
        </div>
    );
};

export default MyAddedVisas;