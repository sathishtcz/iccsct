import { GrUploadOption } from "react-icons/gr";
import { IoLocationSharp, IoNewspaperOutline } from "react-icons/io5";
import { MdAccountBalance, MdDateRange, MdOutlineNotificationsActive, MdOutlineNumbers } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Link } from "react-router-dom";

export default function Keydates() {
  return (
    <>
      <div className="relative bg-cover bg-center flex items-center pt-7 lg:pt-20 md:pt-14 sm:pt-10  sm:h-[400px] md:h-[380px] lg:h-[380px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
        {/* Centered Content */}
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-3 lg:mt-0 mt-5 z-10 pt-10 pb-4 md:pb-10  ">
          <div className="space-y-3">
            <div className="border-white border-2 rounded-full w-fit">
              <div className="px-4 py-1 bg-transparent rounded-full text-white">Key Dates</div>
            </div>
            <p className="inter-medium text-[25px] text-white">Countdown to ICCSCT 2025</p>
            <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Stay on track and plan ahead! Mark these important deadlines to make the most of your participation at the International Conference on Computational Systems and Cloud Technologies</p>
            <p className="flex space-x-2 text-gray-200   mt-4">

              <Link to="/" className="inter-regular  text-[16px]">
                Home
              </Link>

              <p className="text-white text-[16px] inter-regular ">/</p>
              <p className="text-[16px]  inter-regular">Key Dates</p>
            </p>
          </div>
        </div>
      </div>

      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
        <p className="inter-semibold text-[20px] lg:text-[30px]">Stay Ahead with Important Deadlines</p>
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3 ">Keep these dates handy and ensure your contributions reach us on time. We look forward to your participation!</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-15 mt-10 px-4">
          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><GrUploadOption className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">August 10, 2025</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Abstract Submission Deadline</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><IoNewspaperOutline className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">August 10, 2025</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Full Paper Submission Deadline</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><MdOutlineNotificationsActive className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">September 15, 2025</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Notification of Acceptance</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><IoNewspaperOutline className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">September 30, 2025</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Final Paper Submission</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><TfiWrite className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">September 15, 2025</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Registration Deadline</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><MdDateRange className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">October 24–26, 2025</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Conference Dates</p>
            </div>
          </div>

        </div>
      </div>


      <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
        <p className="inter-semibold lg:text-[30px] text-[25px]">Registration Details</p>
        <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mt-3 ">Join a dynamic community of researchers, technologists, and industry pioneers at ICCSCT 2025. Our seamless registration process secures your spot at one of the leading conferences in computational systems and cloud technologies. </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-15 mt-10 px-4">
          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><MdAccountBalance className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">ICRAIS Conference</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Account Name</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><MdOutlineNumbers className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">123456789</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Account Number</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><IoLocationSharp className="text-white text-xl lg:text-2xl" /></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">xxxxxx</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Branch</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><p className="text-white inter-semibold text-xl lg:text-2xl">IF</p></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">ABCD03000045</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">IFSC Code</p>
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
            <div className="bg-white rounded-lg h-full  p-6 relative ">
              <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><p className="text-white inter-semibold text-xl lg:text-2xl">MI</p></div>
              <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">123456789</h3>
              <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">MICR</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}
