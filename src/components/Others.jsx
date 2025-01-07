
import { ToastContainer } from "react-toastify";

const Others = () => {
    return (
        <>
            {/* ------------------Apply Modal------------- */}

            {/* ------------------------------------------ */}
            {/* ------------------------------------------ */}


            {/* ------------------Apply Modal------------- */}
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* ---Cancel Button--- */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* -----Form----- */}
                    <div>
                        <div className="hero mt-3">
                            <div className="card bg-base-100 w-full max-w-xl shrink-0">
                                {/* <form onSubmit={handleLogInSubmit} className="card-body">  */}
                                <form className="card-body">
                                    <h2 className="text-2xl font-semibold text-center">Apply Form</h2>
                                    <div className="divider"></div>
                                    {/* ---First Name--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">First Name</span>
                                        </label>
                                        <input
                                            name="firstName"
                                            type="name"
                                            // ref={emailRef}
                                            placeholder="First Name"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Last Name--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Last Name</span>
                                        </label>
                                        <input
                                            name="lastName"
                                            type="name"
                                            // ref={emailRef}
                                            placeholder="Last Name"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Your Email--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Your Email</span>
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            // ref={emailRef}
                                            placeholder="Your Email"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Applied Date--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Applied Date</span>
                                        </label>
                                        <input
                                            name="date"
                                            type="date"
                                            // ref={emailRef}
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Fee--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Fee</span>
                                        </label>
                                        <input
                                            name="fee"
                                            type="number"
                                            placeholder="Fee"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Apply Button--- */}
                                    <div className="form-control mt-5">
                                        <button className="text-xl bg-[#015CB5] py-3 px-7 font-medium text-white rounded-lg hover:bg-[#4caf50]">Apply</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>

            {/* ------------------------------------------ */}
            {/* ------------------Apply Modal------------- */}
            {/* ------------------------------------------ */}

            {/* ------------------Apply Modal------------- */}
            <div className="card bg-base-100 w-full max-w-2xl mx-auto shrink-0 shadow-2xl mt-14 mb-16">
                <h2 className="text-2xl font-semibold text-center mt-10">Update Visa Information</h2>
                <div className="divider w-11/12 mx-auto"></div>
                {/* <form onSubmit={handleAddVisa}> */}
                <form>
                    <div className="grid grid-cols-2">
                        <div className="hero">
                            <div className="card bg-base-100 w-full shrink-0">
                                {/* <form onSubmit={handleRegisterSubmit} className="card-body"> */}
                                <div className="card-body py-0">
                                    {/* ---Country Name--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Country Name</span>
                                        </label>
                                        <input
                                            name="countryName"
                                            type="name"
                                            placeholder="Country Name"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Processing Time--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Processing Time</span>
                                        </label>
                                        <input
                                            name="time"
                                            type="text"
                                            placeholder="Processing Time"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Visa Type--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Visa Type</span>
                                        </label>
                                        <select name="select" className="select select-bordered w-full">
                                            <option disabled selected>Select Visa Type</option>
                                            <option value="Tourist Visa">Tourist Visa</option>
                                            <option value="Student Visa">Student Visa</option>
                                            <option value="Official Visa">Official Visa</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            {/* <ToastContainer></ToastContainer> */}
                        </div>
                        {/* --------------------------------- */}
                        <div className="hero">
                            <div className="card bg-base-100 w-full shrink-0">
                                {/* <form onSubmit={handleRegisterSubmit} className="card-body"> */}
                                <div className="card-body py-0">
                                    {/* ---Country Image--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Country Image</span>
                                        </label>
                                        <input
                                            name="photo"
                                            type="photo"
                                            placeholder="Country Image"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Application Method--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Application Method</span>
                                        </label>
                                        <input
                                            name="applicationMethod"
                                            type="text"
                                            placeholder="Application Method"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                    {/* ---Validity--- */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-lg">Validity</span>
                                        </label>
                                        <input
                                            name="validity"
                                            type="text"
                                            placeholder="Validity"
                                            className="input input-bordered"
                                            required />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ---Payment--- */}
                    <div className="form-control w-6/12 mx-auto mt-5">
                        <label className="label">
                            <span className="label-text text-xl mx-auto">Fee</span>
                        </label>
                        <input
                            name="fee"
                            type="number"
                            placeholder="Fee"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="flex items-center justify-center my-10">
                        <button className="bg-[#015CB5] py-3 px-7 text-lg font-medium text-white rounded-md hover:bg-[#4caf50] tracking-widest">UPDATE</button>
                    </div>
                </form>
            </div>

        </>
    );
};

export default Others;