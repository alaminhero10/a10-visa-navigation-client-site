// import Swiper Slider
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import - Images
import sliderImg1 from "../../assets/image-1.jpg"
import sliderImg2 from "../../assets/image-2.jpg"
import sliderImg3 from "../../assets/image-3.jpg"

const Banner = () => {
    return (
        <div className="mb-14">
            {/* --- Swiper --- */}
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Swiper-Slide-01 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch">
                        <div>
                            <img className='w-full h-[600px]' src={sliderImg1} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl text-white md:text-5xl font-bold">Experience Comfort and Luxury Like Never Before</h1>
                                <p className="text-white mb-5">
                                    Welcome to Modern Hotel, your gateway to unforgettable stays. Whether you are traveling for leisure or business, our exquisite accommodations and top-notch services ensure a seamless and delightful experience. Book your stay today and let us redefine comfort for you.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-02 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[700px]' src={sliderImg2} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl text-white md:text-5xl font-bold">Escape to a World of Luxury and Relaxation</h1>
                                <p className="text-white mb-5">
                                    At Modern Hotel, we offer a perfect retreat where luxury meets tranquility. Whether for a weekend getaway or an extended stay, experience unmatched comfort and hospitality designed to rejuvenate your senses.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-03 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[700px]' src={sliderImg3} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl text-white md:text-5xl font-bold">Where Every Stay Feels Like Home</h1>
                                <p className="text-white mb-5">
                                    Step into Modern Hotel, where comfort meets elegance. Our thoughtfully designed rooms and personalized services make every guest feel at home, whether you are here for business or leisure.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-04 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[700px]' src={sliderImg1} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl text-white md:text-5xl font-bold">Your Journey to Comfort Begins Here</h1>
                                <p className="text-white mb-5">
                                    Modern Hotel is your ideal destination for a seamless and memorable stay. Discover a world of modern amenities, impeccable service, and an ambiance crafted for your utmost satisfaction.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* Swiper-Slide-05 */}
                <SwiperSlide>
                    <div className="hero place-items-stretch h-[600px]">
                        <div>
                            <img className='w-full h-[700px]' src={sliderImg2} alt="" />
                        </div>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content max-w-none text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl text-white md:text-5xl font-bold">Indulge in the Art of Hospitality</h1>
                                <p className="text-white mb-5">
                                    At Modern Hotel, we believe every guest deserves the best. From luxurious rooms to world-class dining, let us elevate your travel experience with unparalleled care and attention.
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;