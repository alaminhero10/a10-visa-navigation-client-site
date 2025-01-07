import Swal from "sweetalert2";

const VisaApplyModal = () => {

    // ----- Handle Apply Form -----
    const handleApplyForm = (event) => {
        event.preventDefault();

        // -----Form-----
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const email = form.email.value;
        const date = form.date.value;
        const visaFee = form.visaFee.value;

        const visaApply = { firstName, lastName, email, date, visaFee }
        console.log(visaApply)

        // Send Data to the Server:
        fetch('https://visa-navigator-projects-server-site-a10.vercel.app/visaApply', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(visaApply)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Visa Apply Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    }


    // -----RETURN-----
    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-8/12 max-w-2xl">
                    {/* ---Cancel Button--- */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    {/* -----Form----- */}
                    <div>
                        <div className="hero mt-3">
                            <div className="card bg-base-100 w-full max-w-xl shrink-0">
                                <form onSubmit={handleApplyForm} className="">
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
                                            name="visaFee"
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
                    <div className="modal-action">
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default VisaApplyModal;