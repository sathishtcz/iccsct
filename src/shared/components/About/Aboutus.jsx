import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";


function Aboutus() {
    return (
        <>
            <div className="relative bg-cover bg-center flex items-center pt-7 lg:pt-20 md:pt-14 sm:pt-10  sm:h-[400px] md:h-[380px] lg:h-[380px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-3 lg:mt-0 mt-5 z-10 pt-10 pb-4 md:pb-10  ">
                    <div className="space-y-3">
                        <div className="border-white border-2 rounded-full w-fit">
                            <div className="px-4 py-1 bg-transparent rounded-full text-white">About Us</div>
                        </div>
                        <p className="inter-medium text-[25px] text-white">Empowering Cloud & Computing Futures</p>
                        <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">ICCSCT is dedicated to shaping the future of digital infrastructure and intelligent computing. Join us to spark collaboration, unlock new possibilities, and build resilient solutions that empower industries and communities in the cloud-driven era.</p>
                        <p className="flex space-x-2 text-gray-200   mt-4">

                            <Link to="/" className="inter-regular  text-[16px]">
                                Home
                            </Link>

                            <p className="text-white text-[16px] inter-regular ">/</p>
                            <p className="text-[16px]  inter-regular">About us</p>
                        </p>
                    </div>
                </div>
            </div>


            {/* About the Conference */}
            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 mt-6">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Computational Systems and Cloud Technologies  is a dynamic platform that brings together leading academics, industry professionals, and researchers to exchange the latest advancements in computational systems, cloud computing, and emerging digital infrastructure. This conference aims to foster collaboration, present cutting-edge research, and explore innovative solutions that address real-world challenges in scalable computing, distributed systems, data security, and cloud-native applications.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center lg:gap-10 gap-10 lg:mt-10 mt-6">
                    <div className="lg:block hidden ">
                        <div>
                            <img src="/assets/images/About.jpg" alt="Aboutimage" className='w-[580px]' loading="lazy"/>
                        </div>
                    </div>

                    <div>
                        <p className="inter-semibold text-[20px] lg:text-[30px] ">Exploring Computational Systems & Cloud Innovation</p>
                        <div className="lg:hidden block mt-5">
                            <div className="flex justify-center">
                                <img src="/assets/images/About.jpg" alt="Aboutimage" className='w-full max-w-md ' loading="lazy" />
                            </div>
                        </div>

                        <div className="mt-4 lg:mt-5">
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICCSCT encourages thought-provoking discussions, practical demonstrations, and meaningful connections that drive progress in areas such as edge computing, distributed networks, and  security.</p>
                        </div>

                        <div className="mt-4 lg:mt-5 flex flex-col gap-6">
                            <p className="inter-medium text-[16px]">Here are a few key highlights of our conference:</p>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3 lg:gap-2 ">
                                    <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span class="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>Data Storage & Management</li></ul>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ml-[16px] leading-[30px] text-justify">Solutions for big data handling, secure storage, and efficient data management frameworks.</p>
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-2 ">
                                    <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span class="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>High-Performance Computing</li></ul>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ml-[16px]">Addressing advanced computational models, parallel processing, and supercomputing applications.</p>
                                </div>
                            </div>
                            <Link to="/about" className=" flex justify-center">
                                <div className="flex items-center gap-2 group bg-gradient-to-r from-[#025DFB] to-[#04C1F3] cursor-pointer px-3 py-2 rounded-md w-fit  ">
                                    <button className="inter-medium md:text-lg text-white cursor-pointer">Read More</button>
                                    <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 group-hover:rotate-45" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#CDF0FE] px-3 py-8 lg:mt-15 mt-5">
                <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto">
                    <div>
                        <div className="flex flex-col gap-5">
                            <h3 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold text-center">Why to be a part of ICCSCT </h3>
                            <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-center mx-auto  leading-[30px] max-w-[67rem]">The International Conference on Computational Systems and Cloud Technologies is more than just a conference — it’s a launchpad for ideas, collaborations, and future-ready solutions. Here’s why you should be part of this transformative gathering:</p>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                                    <h3 className="inter-semibold text-lg mb-2">1. Connect with Global Pioneers</h3>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Engage with distinguished researchers, thought leaders, and industry innovators driving the next wave of computational and cloud advancements.</p>
                                </div>
                                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                                    <h3 className="inter-semibold text-lg mb-2">2. Showcase Your Research</h3>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Present your groundbreaking work to an international audience and get valuable feedback, recognition, and opportunities for publication.</p>
                                </div>
                                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                                    <h3 className="inter-semibold text-lg mb-2">3. Future Collaborations</h3>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Build meaningful partnerships and collaborative projects with academia, research institutions, and industry leaders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutus