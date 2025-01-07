import { useContext, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { handleLogIn, handleGoogleLogin, handleForgotPassword } = useContext(AuthContext)

    const [error, setError] = useState();
    const emailRef = useRef();

    const navigate = useNavigate();

    const handleLogInSubmit = (event) => {
        event.preventDefault();
        toast("Your Log in Successfully")

        // --- Get form data ---
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Firebase Auth Provider:
        handleLogIn(email, password)
            .then(result => {
                navigate("/")

                // Update Last Login Time:
                const lastSignInTime = result?.user?.metadata?.lastSignInTime;
                const logInInfo = { email, lastSignInTime };

                // fetch:
                fetch(`https://visa-navigator-projects-server-site-a10.vercel.app/users`, {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(logInInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
            })
            .catch(error => {
                setError(error.message)
            })

        // ---Password Validation---
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            setError("Password must be contains at least one Uppercase, one Lowercase, and length has to be at least 6 characters")
            return;
        }
    }

    // -----Google Login Handler-----
    const googleLoginHandler = (email) => {
        toast("Google Log in Successfully")
        handleGoogleLogin()
            .then(result => {
                navigate("/")
            })
            .catch(error => {
                setError(error.message)
            })
    }

    // -----Forgot Password Handler-----
    const ForgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if (!email) {
            toast("Please provide a valid email address")
        }
        else {
            handleForgotPassword(email)
                .then(() => {
                    toast("Password reset email sent, Please check your email")
                })
        }
    }

    // ----------Return----------
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
                    <form onSubmit={handleLogInSubmit} className="card-body">
                        <h2 className="text-2xl font-semibold text-center">Login your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                ref={emailRef}
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
                            <label onClick={ForgotPasswordHandler} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            {
                                error &&
                                <p className="label text-red-600">
                                    {error}
                                </p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <p className="mt-3 text-center">Don’t have an Account ? <NavLink to="/register" className="text-green-600 mt-3">Register</NavLink> </p>
                        </div>
                    </form>
                    <div className="text-center mb-5">
                        <button onClick={googleLoginHandler} className=""><FcGoogle className="size-10" /></button>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
            ></ToastContainer>
        </div>
    );
};

export default Login;