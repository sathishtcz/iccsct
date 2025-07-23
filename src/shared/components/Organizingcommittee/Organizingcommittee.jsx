import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaAward, FaUser } from 'react-icons/fa';

export default function Organizingcommittee() {

  const teamMembers = [
    ["Chairman", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
    ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
    ["Coordinator", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
    ["Convenors", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
    ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
    ["Members", "Dr John Smith", "Principal", "M.E., Ph.D.", "Chennai"],
  ];

  const getRoleColor = (role) => {
    const colors = {
      'Chairman': 'from-purple-500 to-indigo-600',
      'Convenors': 'from-blue-500 to-cyan-600',
      'Coordinator': 'from-green-500 to-teal-600',
      'Members': 'from-orange-500 to-red-600'
    };
    return colors[role] || 'from-gray-500 to-gray-600';
  };

  return (
    <>
      <div className="relative bg-cover bg-center flex items-center pt-7 lg:pt-20 md:pt-14 sm:pt-10  sm:h-[400px] md:h-[380px] lg:h-[380px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
        {/* Centered Content */}
        <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-3 lg:mt-0 mt-5 z-10 pt-10 pb-4 md:pb-10  ">
          <div className="space-y-3">
            <div className="border-white border-2 rounded-full w-fit">
              <div className="px-4 py-1 bg-transparent rounded-full text-white">Organizing Committee</div>
            </div>
            <p className="inter-medium text-[25px] text-white">Pillars of Coordination</p>
            <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The success of ICCSCT 2025 is made possible by a dedicated Organizing Committee composed of distinguished academics, experienced industry professionals, and passionate coordinators. Together, they bring expertise, vision, and commitment to ensure the conference delivers exceptional value for every participant.</p>
            <p className="flex space-x-2 text-gray-200   mt-4">

              <Link to="/" className="inter-regular  text-[16px]">
                Home
              </Link>

              <p className="text-white text-[16px] inter-regular ">/</p>
              <p className="text-[16px]  inter-regular">Organizing Committee</p>
            </p>
          </div>
        </div>
      </div>



      <div className="bg-[#CDF0FE] px-3 py-8">
        <h3 className="inter-semibold lg:text-[30px] text-[25px] text-center">The Backbone of ICCSCT 2025</h3>
        <div className="xl:max-w-[1450px] md:max-w-[920px] mx-auto mt-3  px-3">
          <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mb-10 ">Our Organizing Committee is dedicated to creating an engaging, inclusive, and impactful conference experience for every delegate, speaker, and partner. Through thoughtful planning, meticulous coordination, and a shared commitment to academic excellence, the team ensures that ICCSCT 2025 serves as a dynamic platform for meaningful exchange of ideas, cross-disciplinary collaboration, and global networking.</p>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map(([role, name, position, qualification, location], index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${getRoleColor(role)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <div className="absolute top-4 right-4 z-10">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getRoleColor(role)} shadow-md`}>
                    {role}
                  </span>
                </div>

                <div className="relative p-8">
                  <div className="flex justify-center mb-6">
                    <div className="relative">
                      <div className={`absolute inset-0 bg-gradient-to-br ${getRoleColor(role)} rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <img
                        src="/assets/images/Speaker.png"
                        alt={name}
                        className="relative w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {name}
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <FaUser className="w-4 h-4 mr-3 text-blue-500" />
                      <span className="text-sm">
                        <span className="font-medium">Role:</span> {position}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <FaAward className="w-4 h-4 mr-3 text-green-500" />
                      <span className="text-sm">
                        <span className="font-medium">Qualification:</span> {qualification}
                      </span>
                    </div>

                    <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                      <FaMapMarkerAlt className="w-4 h-4 mr-3 text-red-500" />
                      <span className="text-sm">
                        <span className="font-medium">Location:</span> {location}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

    </>
  )
}
