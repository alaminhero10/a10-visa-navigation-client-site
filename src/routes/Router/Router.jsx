import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import AddVisa from "../../pages/AddVisa/AddVisa";
import MyAddedVisas from "../../pages/MyAddedVisas/MyAddedVisas";
import MyVisaApplications from "../../pages/MyVisaApplications/MyVisaApplications";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AllVisas from "../../pages/AllVisas/AllVisas";
import VisaCard from "../../components/VisaCard/VisaCard";
import CardDetails from "../../components/CardDetails/CardDetails";
import ApplyForm from "../../components/ApplyForm/ApplyForm";
import PrivetRoute from "../../components/PrivetRoute/PrivetRoute";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import HomeVisaCard from "../../components/HomeVisaCard/HomeVisaCard";
import Others from "../../components/Others";
import MyVisaUpdateModal from "../../components/MyVisaUpdateModal/MyVisaUpdateModal";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/visa`),
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/visa`)
            },
            {
                path: "/allVisas",
                element: <AllVisas></AllVisas>,
                loader: () => fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/visa`)
            },
            {
                path: "/homeVisaCard",
                element: <HomeVisaCard></HomeVisaCard>,
            },
            {
                path: "/cardDetails/:id",
                element: <PrivetRoute>
                    <CardDetails></CardDetails>
                </PrivetRoute>,
                loader: async ({ params }) => {
                    const res = await fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/visa`)
                    const allData = await res.json()
                    const singleData = allData.find((data) => data._id == params.id)
                    return singleData
                }
            },
            {
                path: "/addVisa",
                element: <PrivetRoute>
                    <AddVisa></AddVisa>
                </PrivetRoute>,
            },
            {
                path: "/myAddedVisas",
                element: <PrivetRoute>
                    <MyAddedVisas></MyAddedVisas>
                </PrivetRoute>,
                loader: () => fetch("https://visa-navigator-projects-server-site-a10.vercel.app/visa")
            },
            {
                path: "/updateModal/:id",
                element: <PrivetRoute>
                    <MyVisaUpdateModal></MyVisaUpdateModal>
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/visa/${params.id}`)
            },
            {
                path: "/myVisaApplications",
                element: <PrivetRoute>
                    <MyVisaApplications></MyVisaApplications>
                </PrivetRoute>,
                loader: async () => {
                    const allVisaData = await fetch("https://visa-navigator-projects-server-site-a10.vercel.app/visa")
                    const visaData = await allVisaData.json();

                    return visaData
                    // const visaApply = await fetch("https://visa-navigator-projects-server-site-a10.vercel.app/visaApply")
                    // const visaApplyData = await visaApply.json();

                    // return { visaData, visaApplyData }
                }
            },
            {
                path: "/visaCard",
                element: <VisaCard></VisaCard>
            },

            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/applyForm",
                element: <ApplyForm></ApplyForm>
            },
            {
                path: "/others",
                element: <Others></Others>
            }
        ],
    },
])

export default Router;