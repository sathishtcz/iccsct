import React from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbCircleArrowRightFilled } from "react-icons/tb";

function Homepage() {

  return (
    <>
      <div className="bg-[url('/assets/images/Bgimage.jpg')] bg-cover bg-right xl:h-screen  flex items-center ">
        <div className="xl:max-w-[1450px] md:max-w-[920px] mx-auto px-3 lg:mt-[70px] xl:mt-16 mt-20">
          <div className="grid 2xl:grid-cols-2 grid-cols-1 gap-4 place-items-center py-5   ">
            <div>
              <div className="flex flex-col lg:gap-12 gap-5 items-center xl:items-start">
                <div className="space-y-3">
                  <p className="inter-semibold lg:text-[18px] text-[16px] text-white">Building the Next-Gen Cloud Era</p>
                  <h1 className="inter-semibold lg:text-[42px] md:text-[25px] text-[20px] text-white">International Conference on Computational Systems and Cloud Technologies</h1>
                  <div className="block 2xl:hidden flex  justify-center lg:mt-10 mt-4">
                    <img src="/assets/images/Hero2.jpg" alt="Cloud Tech" className="xl:w-[450px] rounded-lg" loading="lazy" />
                  </div>
                </div>
                <div className="space-y-8">
                  <p className="inter-regular sm:text-base md:text-lg lg:text-[16px] text-gray-300 leading-[30px] text-justify">
                    Join pioneering researchers, industry experts, and technology leaders at ICCSCT to delve into the evolving world of computational systems and cloud technologies.
                  </p>
                  <div className="flex sm:flex-row flex-col gap-5 w-fit">
                    <Link to="/paper-submission">
                      <div className="flex items-center gap-2 group bg-gradient-to-r from-[#025DFB] to-[#04C1F3] cursor-pointer px-3 py-3 rounded-md">
                        <button className="inter-medium md:text-lg text-white cursor-pointer">Register Now</button>
                        <TbCircleArrowRightFilled className="text-white text-2xl transform transition-all duration-300 group-hover:rotate-45" />
                      </div>
                    </Link>
                    <div className="flex items-center gap-1 px-3 py-2 rounded-md border-2 border-white">
                      <IoLocationSharp className="text-white text-2xl" />
                      <button className="inter-regular md:text-lg text-white">Singapore</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="hidden 2xl:block  ">
              <img
                src="/assets/images/ICCSCThero.png"
                alt="cloud tech"
                className="absolute right-0 bottom-32 max-w-[50rem] object-contain"
              />
            </div>
          </div>
        </div>
      </div>


      {/* About the Conference */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-4 items-center justify-center">
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" loading="lazy"/>
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:block hidden">About the Conference</h2>
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:hidden block">About Us</h2>
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" loading="lazy"/>
          </div>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Computational Systems and Cloud Technologies  is a dynamic platform that brings together leading academics, industry professionals, and researchers to exchange the latest advancements in computational systems, cloud computing, and emerging digital infrastructure. This conference aims to foster collaboration, present cutting-edge research, and explore innovative solutions that address real-world challenges in scalable computing, distributed systems, data security, and cloud-native applications.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center lg:gap-10 gap-10 lg:mt-12 mt-6">
          <div className="lg:block hidden ">
            <div>
              <img src="/assets/images/About.jpg" alt="Aboutimage" className='w-[580px]' loading="lazy" />
            </div>
          </div>

          <div>
            <p className="inter-semibold text-[20px] lg:text-[30px] ">Exploring Computational Systems & Cloud Innovation</p>
            <div className="lg:hidden block mt-5">
              <div className="flex justify-center">
                <img src="/assets/images/About.jpg" alt="Aboutimage" className='w-full max-w-md ' loading="lazy"/>
              </div>
            </div>

            <div className="mt-4 lg:mt-5">
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICCSCT encourages thought-provoking discussions, practical demonstrations, and meaningful connections that drive progress in areas such as edge computing, distributed networks, and  security.</p>
            </div>

            <div className="mt-4 lg:mt-5 flex flex-col gap-6">
              <p className="inter-medium text-[16px]">Here are a few key highlights of our conference:</p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3 lg:gap-2 ">
                  <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span className="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>Data Storage & Management</li></ul>
                  <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ml-[16px] leading-[30px] text-justify">Solutions for big data handling, secure storage, and efficient data management frameworks.</p>
                </div>
                <div className="flex flex-col gap-3 lg:gap-2 ">
                  <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span className="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>High-Performance Computing</li></ul>
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



      {/* Our mission */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-4 items-center justify-center">
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" loading="lazy"/>
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:block hidden">Scope of Our Conference</h2>
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:hidden block">Our Scope</h2>
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" loading="lazy"/>
          </div>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The International Conference on Computational Systems and Cloud Technologies aims to bring together leading researchers, industry practitioners, and academic experts to exchange and advance knowledge in key areas that drive modern computation and cloud innovations. This conference serves as a dynamic platform to explore emerging trends, share innovative solutions, and address real-world challenges faced in computational systems, cloud infrastructure, and their diverse applications.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center place-items-center lg:gap-10 gap-10 lg:mt-12 mt-6">
          <div>
            <p className="inter-semibold text-[20px] lg:text-[30px] ">Our Research and Innovation Scope</p>
            <div className="lg:hidden block mt-5">
              <div className="flex justify-center">
                <img src="/assets/images/Scope.jpg" alt="Aboutimage" className='w-full max-w-md ' loading="lazy"/>
              </div>
            </div>

            <div className="mt-4 lg:mt-5">
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">ICCSCT encourages discussions and contributions that span both theoretical frameworks and practical implementations. We aim to bring together leading academics, industry experts, and practitioners to address critical challenges, exchange cutting-edge research, and inspire advancements that shape the next generation of computational systems and scalable cloud solutions.</p>
            </div>

            <div className="mt-4 lg:mt-5 flex flex-col gap-6">
              <p className="inter-medium text-[16px]">Here are a few key highlights of our conference:</p>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-3 lg:gap-2 ">
                  <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span className="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>Emerging Technologies</li></ul>
                  <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px]  ml-[16px] leading-[30px] text-justify">Innovations such as serverless computing, blockchain applications in the cloud, and hybrid or multi-cloud strategies.</p>
                </div>
                <div className="flex flex-col gap-3 lg:gap-2 ">
                  <ul className="list-disc list-inside "><li className="flex items-center inter-medium"><span className="w-2 h-2 bg-[#025DFB] rounded-full mr-2"></span>IoT and Smart Environments</li></ul>
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
              <img src="/assets/images/Scope.jpg" alt="Aboutimage" className='w-[580px]' loading="lazy"/>
            </div>
          </div>
        </div>
      </div>



      {/* <div className="px-3 lg:mt-15 mt-10 bg-[#CDF0FE]">
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto py-10">
          <div className="flex gap-4 items-center justify-center">
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" />
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:block hidden">Our Event Speaker</h2>
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:hidden block">Our Speaker</h2>
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" />
          </div>
          <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3">At ICCSCT, we are honored to host distinguished speakers who are trailblazers in the fields of computational systems and cloud technologies. Our featured speakers include visionary researchers, influential academicians, and leading industry professionals whose work is shaping the future of cloud computing, big data, AI integration, and scalable infrastructures. They bring with them decades of experience, groundbreaking research insights, and practical knowledge that bridge the gap between theory and real-world application.</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2  lg:gap-15 gap-10 mt-10 lg:max-w-[70rem] mx-auto">
            <div className="flex flex-col items-center">
              <div className="overflow-hidden z-10">
                <img
                  src="/assets/images/Speaker.png"
                  alt="Speaker"
                  className="w-52 "
                />
              </div>
              <div className="-mt-[131px] w-full  bg-gradient-to-t from-[#025DFB] to-[#04C1F3] rounded-lg py-5">
                <div className="flex flex-col items-center pt-[125px] gap-2">
                  <p className="text-white inter-medium text-[18px] text-center">John Mathews</p>
                  <p className="text-white inter-regular text-[16px] text-center">Senior Research Analyst</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="overflow-hidden z-10">
                <img
                  src="/assets/images/Speaker.png"
                  alt="Speaker"
                  className="w-52 "
                />
              </div>
              <div className="-mt-[131px] w-full  bg-gradient-to-t from-[#025DFB] to-[#04C1F3] rounded-lg py-5">
                <div className="flex flex-col items-center pt-[125px] gap-2">
                  <p className="text-white inter-medium text-[18px]">John Mathews</p>
                  <p className="text-white inter-regular text-[16px] text-center">Senior Research Analyst</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="overflow-hidden z-10">
                <img
                  src="/assets/images/Speaker.png"
                  alt="Speaker"
                  className="w-52 "
                />
              </div>
              <div className="-mt-[131px] w-full  bg-gradient-to-t from-[#025DFB] to-[#04C1F3] rounded-lg py-5">
                <div className="flex flex-col items-center pt-[125px] gap-2">
                  <p className="text-white inter-medium text-[18px]">John Mathews</p>
                  <p className="text-white inter-regular text-[16px] text-center">Senior Research Analyst</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div> */}



      {/* Join Us at ICCSCT 2025 */}
      <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto px-3 lg:mt-15 mt-10">
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-4 items-center justify-center">
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" loading="lazy"/>
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:block hidden">Join Us at ICCSCT 2025</h2>
            <h2 className="text-[#025DFB] lg:text-[28px] text-[25px] hanuman-bold lg:hidden block">ICCSCT 2025</h2>
            <img src="/assets/images/star.png" alt="staricon" className="mb-2" loading="lazy"/>
          </div>
          <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Be part of the International Conference on Computational Systems and Cloud Technologies and connect with a global community of innovators, researchers, and industry experts. Whether you’re presenting pioneering research, exploring advanced computational models, or discovering the latest in cloud infrastructures, ICCSCT 2025 is your platform to exchange ideas and accelerate progress. Don’t miss this opportunity to expand your network and help shape the future of scalable, intelligent systems.</p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 place-items-center mt-10 mx-auto gap-5 h-full max-w-[70rem]">
          <div className="bg-[#181D8A] py-5 px-7 border-b-5 border-b-[#04C1F3] rounded-t-full min-w-[134px]   h-full">
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-white rounded-full w-15 h-15  flex items-center justify-center">
                <img src="/assets/images/stat1.png" alt="stats1" className="flex-shrink-0 w-11" loading="lazy"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="inter-semibold text-[28px] text-white text-center">500+</p>
                <p className="inter-medium text-[16px] text-white">Attendees</p>
              </div>
            </div>
          </div>

          <div className="bg-[#181D8A] py-5 px-7 border-b-5 border-b-[#04C1F3] rounded-t-full min-w-[134px]  h-full">
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-white rounded-full w-15 h-15  flex items-center justify-center">
                <img src="/assets/images/stat1.png" alt="stats1" className="flex-shrink-0 w-11" loading="lazy"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="inter-semibold text-[28px] text-white text-center">50+</p>
                <p className="inter-medium text-[16px] text-white">Speakers</p>
              </div>
            </div>
          </div>

          <div className="bg-[#181D8A] py-5 px-7 border-b-5 border-b-[#04C1F3] rounded-t-full  min-w-[134px] h-full ">
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-white rounded-full w-15 h-15  flex items-center justify-center">
                <img src="/assets/images/stat1.png" alt="stats1" className="flex-shrink-0 w-11" loading="lazy"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="inter-semibold text-[28px] text-white text-center">100+</p>
                <p className="inter-medium text-[16px] text-white">Papers</p>
              </div>
            </div>
          </div>

          <div className="bg-[#181D8A] py-5 px-7 border-b-5 border-b-[#04C1F3] rounded-t-full min-w-[134px]  h-full">
            <div className="flex flex-col gap-1 items-center">
              <div className="bg-white rounded-full w-15 h-15  flex items-center justify-center">
                <img src="/assets/images/stat1.png" alt="stats1" className="flex-shrink-0 w-11" loading="lazy"/>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="inter-semibold text-[28px] text-white text-center">5</p>
                <p className="inter-medium text-[16px] text-white">Days</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Homepage