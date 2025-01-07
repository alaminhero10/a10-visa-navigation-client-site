import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();

    return (
        <div className="text-center my-96">
            {
                error.status === 404 ? <div>
                    <h2 className="text-3xl lg:text-5xl font-bold text-red-600">Something went wrong 404</h2>
                    <div className="mt-14">
                        <NavLink to="/" className="text-xl text-white border border-solid border-slate-300 bg-[#5E529B] px-14 py-3 rounded-md cursor-pointer shadow-2xl mt-20"> Back to Home</NavLink>
                    </div>
                </div> : ""
            }

        </div>
    );
};

export default ErrorPage;