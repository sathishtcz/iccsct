import { TbCircleArrowRightFilled } from "react-icons/tb"
import { Link } from "react-router-dom"


function Register() {
    return (
        <>
            <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 mt-15 mb-15">
                <div className="bg-[url('/assets/images/Pattern.png')] bg-contain    bg-[#181D8A]  rounded-xl p-7">
                    <div className="lg:flex justify-between lg:gap-15 ">
                        <div className="flex flex-col">
                            <p className="hanuman-semibold text-white lg:text-[30px] text-[25px]">Ready to Join the Innovation?</p>
                            <p className="inter-regular text-gray-300 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] max-w-[60rem]">Register now and secure your spot today to connect with global experts, explore emerging technologies, and be part of shaping the future of Computer Science.</p>
                        </div>
                        <div className="flex items-center mt-4 lg:mt-0">
                            <Link to="/about">
                                <div className="flex items-center gap-2 group bg-gradient-to-r from-[#025DFB] to-[#04C1F3] cursor-pointer px-3 py-2 rounded-md">
                                    <button className="inter-medium md:text-lg text-white cursor-pointer">Read Now</button>
                                    <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 group-hover:rotate-45" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register



