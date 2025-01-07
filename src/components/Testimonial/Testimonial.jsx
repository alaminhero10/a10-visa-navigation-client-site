import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaQuoteLeft } from "react-icons/fa";
import boy1 from "../../assets/boy1.jpg";
import boy2 from "../../assets/boy2.jpg";
import boy3 from "../../assets/boy3.jpg";


const Testimonial = () => {
    return (
        <div className="grid gap-10 lg:grid-cols-2 items-center my-28">
            <div className="max-w-md md:max-w-2xl mx-h-md">
                <iframe className="w-full h-[360px]" src="https://www.youtube.com/embed/ZM3rS0TJvzc?si=A5TNjAf3OYg01_pV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="">
                <h3 className="text-lg font-medium border-l-4 border-solid border-green-600"><span className="ml-3">Testimonial</span> </h3>
                <h1 className="text-4xl font-bold my-3">What Our Customer Say</h1>
                {/* md */}
                <div className="rating rating-md mt-7">
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-7"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                </div>
                {/* -----Carousel----- */}
                <div className="max-w-sm md:max-w-xl">
                <Carousel
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    showStatus={false}
                    stopOnHover
                    emulateTouch>
                    {/* ---Banner Carousel Image--- */}
                    {/* ---Carousel-01--- */}
                    <div className="mt-5">
                        <div>
                            <p>Best Reviewing adherence to the legal and policy requirements of the destination country, such as financial capability or intent to return to the home country.</p>
                        </div>
                        <div className="flex float-end">
                            <FaQuoteLeft className="size-8 text-yellow-400 my-14" />
                        </div>
                        <div className="flex items-center gap-5 mt-14">
                            <div className="w-20 h-20 rounded-full">
                                <img className="w-20 h-20 rounded-full" src={boy1} alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-xl font-semibold">Anderson</h3>
                                <p className="text-base">Customer</p>
                            </div>
                        </div>
                    </div>
                    {/* ---Carousel-02--- */}
                    <div className="mt-5">
                        <p>For rejected applications, a visa review may involve reconsideration or appeal, where the applicant submits additional evidence or clarifications.</p>
                        <div className="flex float-end">
                            <FaQuoteLeft className="size-8 text-yellow-400 my-14" />
                        </div>
                        <div className="flex items-center gap-5 mt-14">
                            <div className="w-20 h-20 rounded-full">
                                <img className="w-20 h-20 rounded-full bg-contain" src={boy2} alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-xl font-semibold">Anderson</h3>
                                <p className="text-base">Customer</p>
                            </div>
                        </div>
                    </div>
                    {/* ---Carousel-03--- */}
                    <div className="mt-5">
                        <p>Ensuring the stated purpose of the visit aligns with the visa category. Cross-checking supporting documents like invitation letters, travel itineraries, or employment offers.</p>
                        <div className="flex float-end">
                            <FaQuoteLeft className="size-8 text-yellow-400 my-14" />
                        </div>
                        <div className="flex items-center gap-5 mt-14">
                            <div className="w-20 h-20 rounded-full">
                                <img className="w-20 h-20 rounded-full bg-contain" src={boy3} alt="" />
                            </div>
                            <div className="">
                                <h3 className="text-xl font-semibold">Anderson</h3>
                                <p className="text-base">Customer</p>
                            </div>
                        </div>
                    </div>
                </Carousel>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;