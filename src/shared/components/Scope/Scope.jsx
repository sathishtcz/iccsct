import { TbCircleArrowRightFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function Scope() {
    return (
        <>
            <div className="relative bg-cover bg-center flex items-center pt-7 lg:pt-20 md:pt-14 sm:pt-10  sm:h-[400px] md:h-[380px] lg:h-[380px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-3 lg:mt-0 mt-5 z-10 pt-10 pb-4 md:pb-10  ">
                    <div className="space-y-3">
                        <div className="border-white border-2 rounded-full w-fit">
                            <div className="px-4 py-1 bg-transparent rounded-full text-white">Our Scope</div>
                        </div>
                        <p className="inter-medium text-[25px] text-white">Areas We Explore</p>
                        <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">At ICCSCT, we explore cutting-edge advancements across core domains including computational systems, scalable cloud infrastructures, big data management, distributed computing, and emerging cloud-native applications.  Our conference is dedicated to pushing the boundaries of modern computing.</p>
                        <p className="flex space-x-2 text-gray-200   mt-4">

                            <Link to="/" className="inter-regular  text-[16px]">
                                Home
                            </Link>

                            <p className="text-white text-[16px] inter-regular ">/</p>
                            <p className="text-[16px]  inter-regular">Our Scope</p>
                        </p>
                    </div>
                </div>
            </div>


            {/* Scope of  the Conference */}
            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 mt-6">
                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Computational Systems and Cloud Technologies aims to bring together leading researchers, industry practitioners, and academic experts to exchange and advance knowledge in key areas that drive modern computation and cloud innovations. This conference serves as a dynamic platform to explore emerging trends, share innovative solutions, and address real-world challenges faced in computational systems, cloud infrastructure, and their diverse applications.</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center lg:gap-10 gap-10 lg:mt-12 mt-6">
                    <div>
                        <p className="inter-semibold text-[20px] lg:text-[30px] ">Our Research and Innovation Scope</p>
                        <div className="lg:hidden block mt-5">
                            <div className="flex justify-center">
                                <img src="/assets/images/Scope.jpg" alt="Aboutimage" className='w-full max-w-md ' />
                            </div>
                        </div>

                        <div className="mt-4 lg:mt-5">
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICCSCT encourages discussions and contributions that span both theoretical frameworks and practical implementations. We aim to bring together leading academics, industry experts, and practitioners to address critical challenges, exchange cutting-edge research, and inspire advancements that shape the next generation of computational systems and scalable cloud solutions.</p>
                        </div>

                        <div className="mt-4 lg:mt-5 flex flex-col gap-6">
                            <p className="inter-medium text-[16px]">Here are a few key highlights of our conference:</p>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3 lg:gap-2 ">
                                    <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span class="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>Emerging Technologies</li></ul>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ml-[16px] leading-[30px] text-justify">Innovations such as serverless computing, blockchain applications in the cloud, and hybrid or multi-cloud strategies.</p>
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-2 ">
                                    <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span class="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>IoT and Smart Environments</li></ul>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ml-[16px]">Integration of Internet of Things (IoT) devices with cloud backends to enable smart cities, homes, and industries.</p>
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

                    <div className="lg:block hidden ">
                        <div>
                            <img src="/assets/images/Scope.jpg" alt="Aboutimage" className='w-[580px]' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#CDF0FE] px-3 py-8 lg:mt-15 mt-5">
                <div className="xl:max-w-[1450px]  md:max-w-[920px] px-3 mx-auto">
                    <div>
                        <div className="flex flex-col gap-3">
                            <h3 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold text-center">Key Research Areas</h3>
                            <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-center mx-auto  leading-[30px] max-w-[67rem]">At ICCSCT, we spotlight critical and emerging research areas that shape the future of computational systems and cloud technologies. Our key focus areas include:</p>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                                    <h3 className="inter-semibold text-lg mb-2">High-Performance Computing</h3>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Advancing algorithms, architectures, and applications for complex computations and simulations.</p>
                                </div>
                                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                                    <h3 className="inter-semibold text-lg mb-2">Big Data Analytics</h3>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Harnessing massive datasets for actionable insights, predictive modeling, and intelligent decision-making.</p>
                                </div>
                                <div className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
                                    <h3 className="inter-semibold text-lg mb-2">Emerging Cloud Applications</h3>
                                    <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Enabling cloud-native development, IoT integration, and next-gen digital services across industries.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

