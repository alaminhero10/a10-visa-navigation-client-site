import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdEmail, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 py-20 items-center justify-center">
            {/* ---Section-01--- */}
            <div className="text-white">
                <h1 className="text-white text-3xl font-bold">VISA NAVIGATOR</h1>
                <p className="text-gray-300 mt-3">Contact us to know about the Visa <br /> or you can know about us through <br /> social media.</p>
                <div className="flex items-center gap-2 my-3">
                    <MdEmail className="size-6 text-orange-400" />
                    <h3>Email: abc@gmail.com</h3>
                </div>
                <div className="flex items-center gap-7 mt-1 mb-2">
                    <a href="https://www.facebook.com/">
                        <FaFacebookSquare className="size-7" />
                    </a>
                    <a href="https://x.com/">
                        <FaTwitter className="size-7" />
                    </a>
                    <a href="https://www.linkedin.com/">
                        <FaLinkedin className="size-7" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <FaSquareInstagram className="size-7" />
                    </a>
                </div>
            </div>
            {/* ---Section-02--- */}
            <div className="text-white">
                <h1 className="text-xl font-semibold">Explore</h1>
                <div className="flex flex-col gap-2 mt-5">
                    <Link to="/allVisas" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>All Visas</span>
                    </Link>
                    <Link to="/addVisa" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>Add Visa</span>
                    </Link>
                    <Link to="/myAddedVisas" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>My Added Visas</span>
                    </Link>
                    <Link to="/myVisaApplications" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>My Visa Applications</span>
                    </Link>
                    <Link to="/contact" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>Contact Us</span>
                    </Link>
                </div>
            </div>
            {/* ---Section-03--- */}
            <div className="text-white md:mt-10 lg:mt-0">
                <h1 className="text-xl font-semibold">Services</h1>
                <div className="flex flex-col gap-2 mt-5">
                    <Link to="/allVisas" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>Qatar</span>
                    </Link>
                    <Link to="/addVisa" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>Australia</span>
                    </Link>
                    <Link to="/myAddedVisas" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>United State</span>
                    </Link>
                    <Link to="/myVisaApplications" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>Malaysia</span>
                    </Link>
                    <Link to="/contact" className="flex items-center text-base text-gray-300">
                        <MdKeyboardDoubleArrowRight className="size-5" />
                        <span>Canada</span>
                    </Link>
                </div>
            </div>
            {/* ---Section-04--- */}
            <div className="text-white mt-0 md:mt-10 lg:mt-0">
                <div>
                    <h1 className="text-lg font-semibold">Address:</h1>
                    <p className="text-base text-gray-300 mt-5">775 5th Ave, Dhaka,</p>
                    <p className="text-base text-gray-300">BD 1205 Bangladesh</p>
                </div>
                <div className="mt-3">
                    <h1 className="text-lg font-semibold">Hours:</h1>
                    <p className="text-base text-gray-300 mt-2">9.30am - 6.30pm</p>
                    <p className="text-base text-gray-300">Saturday to Thursday</p>
                </div>

            </div>
        </div >
    );
};

export default Footer;