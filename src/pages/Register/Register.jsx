import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Register = () => {

    // ----- UseContext -----
    const { handleRegister, manageUpdateProfile, handleGoogleLogin } = useContext(AuthContext)
    const [error, setError] = useState();
    const navigate = useNavigate();


    // ----- Handle Register Submit -----
    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        toast("Your Log in Successfully")

        // ---Get Form Data---
        const name = event.target.name.value
        const photo = event.target.photo.value
        const email = event.target.email.value
        const password = event.target.password.value

        // ---Password Validation---
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            toast("Your Log in Password not Valid")
            setError("Password must be contains at least one Uppercase, one Lowercase, and length has to be at least 6 characters")
            return;
        }
        setError("")

        // ----- Handle Register Submit -----
        handleRegister(email, password)
            .then(result => {
                const createAt = result?.user?.metadata?.creationTime;
                const newUser = { name, email, createAt };
                // Save new user info to the database:
                fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/users`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'success!',
                                text: 'Your name and eamil Successfully',
                                icon: 'success',
                                confirmButtonText: 'Cool'
                            })
                        }
                    })
                manageUpdateProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/");
                    })
                    .catch(error => {
                        alert("Update profile error")
                    })
            })
    }

    // -----Google Login Handler-----
    const googleLoginHandler = () => {
        toast("Google Log in Successfully")
        handleGoogleLogin()
            .then(res => {
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                <form onSubmit={handleRegisterSubmit} className="card-body">
                    <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input
                            name="name"
                            type="name"
                            placeholder="Name"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            name="photo"
                            type="photo"
                            placeholder="Your Photo"
                            className="input input-bordered"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name="password"
                            type="text"
                            placeholder="Password"
                            className="input input-bordered"
                            required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        {
                            error && <p className="text-red-600">{error}</p>
                        }
                        <div className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                className="checkbox" />
                            <p>Accept Term & Conditions</p>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                        <p className="text-center my-3">Already have an Account. Please <NavLink to="/login" className="text-green-600">Login</NavLink> </p>
                    </div>
                    {/* ---Google LogIn--- */}
                    <div className="text-center">
                        <button onClick={googleLoginHandler} className=""><FcGoogle className="size-10" /></button>
                    </div>
                </form>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={5000}
            ></ToastContainer>
        </div>
    );
};

export default Register;