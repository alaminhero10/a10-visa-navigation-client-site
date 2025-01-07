
import Swal from "sweetalert2";
import MyVisaUpdateModal from "../MyVisaUpdateModal/MyVisaUpdateModal";


const MyAddedVisaCard = ({ visa, visas, setVisas }) => {

    const { _id, countryName, time, fee, photo, application_method, validity, select } = visa;

    // ------Handle Delete Operation------
    const handleDelete = (_id) => {

        // Sweetalert2
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                // -----Client Site Delete-----
                fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/visa/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted.",
                                icon: "success"
                            });
                            const remaining = [...visas].filter(visa => visa._id !== _id);
                            setVisas(remaining);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <div className="border border-solid border-gray-50 rounded-md p-5 bg-base-100 w-96 shadow-lg">
                <img src={photo} className="w-full h-[200px] rounded-md" alt="" />
                <div className="divider"></div>
                <div className="">
                    <h1 className="text-xl font-medium text-center">{countryName}</h1>
                    <div className="mt-3">
                        <p className="text-lg font-medium">Visa Type: {select}</p>
                        <p className="text-lg font-medium">Processing Time: {time}</p>
                    </div>
                    <div className="">
                        <p className="text-lg font-medium">Application Method: {application_method}</p>
                        <p className="text-lg font-medium">Validity: {validity}</p>
                    </div>
                    <div className="">
                        <p className="text-lg font-medium">Fee: {fee}</p>
                    </div>
                    <div className="flex items-center justify-center gap-5 text-center mt-7 mb-3">
                        <button onClick={() => document.getElementById('my_modal_4').showModal()}
                            className="bg-[#015CB5] py-3 px-5 text-base font-medium text-white rounded-lg hover:bg-[#13af42]">Update</button>
                        <button onClick={() => handleDelete(_id)} className="bg-[#015CB5] py-3 px-5 text-base font-medium text-white rounded-lg hover:bg-[#13af42]">Delete</button>
                    </div>
                </div>
            </div>
            <MyVisaUpdateModal></MyVisaUpdateModal>
        </div>
    );
};

export default MyAddedVisaCard;