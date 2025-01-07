import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import VisaCard from "../../components/VisaCard/VisaCard";
import 'react-toastify/dist/ReactToastify.css';
import HomeVisaCard from "../../components/HomeVisaCard/HomeVisaCard";

const MainLayout = () => {
    return (
        <div>
            {/* ---Navbar--- */}
            <div className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </div>
            {/* ---Outlet--- */}
            <div>
                <Outlet>
                    <div>
                        <VisaCard></VisaCard>
                    </div>
                    <div>
                        <HomeVisaCard></HomeVisaCard>
                    </div>
                </Outlet>
            </div>
            {/* ---Footer--- */}
            <div className="bg-slate-800">
                <div className="w-11/12 mx-auto">
                    <Footer></Footer>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;