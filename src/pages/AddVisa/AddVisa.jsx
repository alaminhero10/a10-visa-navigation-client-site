import Swal from "sweetalert2";


const AddVisa = () => {

    // -----Handle Add Visa-----
    const handleAddVisa = (event) => {
        event.preventDefault();

        // -----Form-----
        const form = event.target;
        const countryName = form.countryName.value;
        const email = form.email.value;
        const age = form.age.value;
        const time = form.time.value;
        const fee = form.fee.value;
        const photo = form.photo.value;
        const applicationMethod = form.applicationMethod.value;
        const description = form.description.value;
        const validity = form.validity.value;
        const select = form.select.value;
        // const checkbox = form.checkbox.value;

        const newCoffee = { countryName, email, age, time, fee, photo, applicationMethod, description, validity, select };

        // Send Data to the Server:
        fetch('https://visa-navigator-projects-server-site-a10.vercel.app/visa', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    // ----- RETURN -----
    return (
        <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl mt-14 mb-16">
            <h2 className="text-2xl font-semibold text-center mt-5">Apply for the Visa</h2>
            <form onSubmit={handleAddVisa}>
                <div className="grid grid-cols-2">
                    {/* ---Form-02--- */}
                    <div className="hero">
                        <div className="card bg-base-100 w-full shrink-0">
                            <div className="card-body">
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
                                {/* ---Age--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Your Email</span>
                                    </label>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
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
                                        <option value="Visitor Visa">Visitor Visa</option>
                                        <option value="E-Visa">E-Visa</option>
                                        <option value="Work Visa">Work Visa</option>
                                        <option value="Business Visa">Business Visa</option>
                                        <option value="Working Holiday Visa">Working Holiday Visa</option>
                                    </select>
                                </div>
                                {/* ---Payment--- */}
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
                            </div>
                        </div>
                    </div>
                    {/* -----Form-02----- */}
                    <div className="hero">
                        <div className="card bg-base-100 w-full shrink-0">
                            <div className="card-body">
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
                                {/* ---Age--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Age</span>
                                    </label>
                                    <input
                                        name="age"
                                        type="number"
                                        placeholder="Your Age"
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
                                {/* ---Description--- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Description</span>
                                    </label>
                                    <input
                                        name="description"
                                        type="text"
                                        placeholder="Description"
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
                {/* ---Application Date--- */}
                <div>
                    <p className="text-xl font-medium ml-10 mb-3">Select any one</p>
                    <div className="flex items-center ml-9 gap-7 mb-14">
                        <label name="checkbox" className="flex items-center gap-2 cursor-pointer">
                            <input
                                name="validPassport"
                                type="checkbox"
                                className="checkbox checkbox-accent" />
                            <span className="label-text text-base">Valid Passport</span>
                        </label>
                        <label name="checkbox" className="flex items-center gap-2 cursor-pointer">
                            <input
                                name="validApplicationForm"
                                type="checkbox"
                                className="checkbox checkbox-accent" />
                            <span className="label-text text-base">Valid Application Form</span>
                        </label>
                        <label name="checkbox" className="flex items-center gap-2 cursor-pointer">
                            <input
                                name="recentPhoto"
                                type="checkbox"
                                className="checkbox checkbox-accent" />
                            <span className="label-text text-base">Recent Passport-Size Photograph</span>
                        </label>
                    </div>
                </div>
                {/* ---Add Visa Button--- */}
                <div className="form-control w-full max-w-52 mx-auto mt-6 mb-10">
                    <button className="bg-[#015CB5] py-3 px-7 text-xl font-semibold text-white rounded-lg hover:bg-[#4caf50]">Add Visa</button>
                </div>
            </form>
        </div>
    );
};

export default AddVisa;