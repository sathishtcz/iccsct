import { FaAward, FaMapMarkerAlt, FaUser, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Editorboard() {

    const teamMembers = [
        
        
        ["Dr.G. Vinodhini", "Annamalai University", "India"],
        ["Dr. Ahmed Alkhayyat", " The Islamic university", "Iraq"],
        ["Dr. Ashok Kumar", " Skyline university", " Nigeria"],
        ["Dr. Mujtaba Korai", " Gachon University", " South Korea"],
        ["Dr. Junaid Ahmed", " Zhengzhou University", " China"],
        ["Dr.K. Nehru", "SNS College of Technology", "India"],
        ["Dr.A. Gabriel", " Sharda University", "Uzbekistan"],
        ["Dr. Asad Aziz", "Geography University of Gujarat", "Pakistan"],
        ["Dr.S. Rathna", "United Institute of Technology", "India"],
        ["Dr. Saman Almufti", "Nawroz University", "Iraq"],
        ["Dr. Asma Sbeih", " Palestine Ahliya university", "Palestine"],
        ["Dr.S. Stewart Kirubakaran", "Karunya Institute of Technology and Sciences", "India"],
        ["Dr. Twana A. Hamad", " Harran University", "Türkiye"],
        ["Dr. Zhao Qianyi", " Jinan University", "China"],
        ["Dr. Nguyen Van Thieu", "PHENIKAA University", "Vietnam"],
        ["Dr.A.  Antonidoss", " Hindustan Institute of Technology", "India"],
        ["Dr. Asghar Ali Shah", "Bahria university", " Pakistan"],
        ["Dr. Ammar Amjad", " National Yang ming chiao tung university", "Taiwan"],
        ["Dr. Førsteamanuensis", " UiT The Arctic University of Norway", "Norway"],
        ["Dr.T. Ananth Kumar", " IFET College of Engineering ", "India"],
        ["Dr. Collins N. Udanor", "University of Nigeria", " Nigeria"],
        ["Dr. Tahir Abbas", " TIMES Institute", " Pakistan"],
        ["Dr.R. Veerandrakumar", " Panimalar Engineering College", "India"],
        ["Dr. Sutikno", "University of Diponegoro", " Indonesia"],
        // ["Dr.Hea Choon Ngo", " Universiti Teknikal Malaysia Melaka", " Malaysia"],
    ];

    const getRoleColor = (name) => {
        const colors = {
            'Manoj Kumar': 'from-purple-500 to-indigo-600',
            'Md Shohel Arman': 'from-blue-500 to-cyan-600',
            'Michael': 'from-green-500 to-teal-600',
            'Muhammad Abdul Rehman': 'from-green-500 to-teal-600'
        };
        return colors[name] || 'from-gray-500 to-gray-600';
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
                            <div className="px-4 py-1 bg-transparent rounded-full text-white">Editorial Board</div>
                        </div>
                        <p className="inter-medium text-[25px] text-white">Guiding Academic Excellence</p>
                        <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">The Editorial Board of ICCSCT 2025 plays a pivotal role in upholding the academic rigor and integrity of the conference. </p>
                        <p className="flex space-x-2 text-gray-200   mt-4">

                            <Link to="/" className="inter-regular  text-[16px]">
                                Home
                            </Link>

                            <p className="text-white text-[16px] inter-regular ">/</p>
                            <p className="text-[16px]  inter-regular">Editorial Board</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[#CDF0FE] px-3 py-8">
                <h3 className="inter-semibold lg:text-[30px] text-[25px] text-center">Academic Guardians of ICCSCT</h3>
                <div className="xl:max-w-[1450px] md:max-w-[920px] mx-auto mt-3  px-3">
                    <p className="inter-regular text-gray-900 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] mb-10 ">The Editorial Board of ICCSCT 2025 plays a pivotal role in upholding the academic rigor and integrity of the conference. Comprising distinguished scholars, seasoned researchers, and domain experts in computational systems, cloud technologies, and related interdisciplinary fields, our Editorial Board ensures that every paper and presentation meets the highest standards of quality and relevance.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map(([name, university, location], index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-xl shadow-[0_0_10px_rgba(0,0,0,0.15)] hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
                            >
                                {/* Gradient Background Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${getRoleColor(name)} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                                <div className="relative p-8">
                                    {/* Profile Image */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${getRoleColor(name)} rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                                            {/* <img
                                                src="/assets/images/Speaker.png"
                                                alt={name}
                                                className="relative w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover group-hover:scale-110 transition-transform duration-500"
                                            /> */}
                                             <FaUserAlt  className="text-4xl text-[#025DFB]" />
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                        {name}
                                    </h3>

                                    {/* Details */}
                                    <div className="space-y-3">

                                        <div className="flex items-center text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                                            <FaAward className="w-4 h-4 mr-3 text-green-500" />
                                            <span className="text-sm">
                                                <span className="font-medium">University:</span> {university}
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
                    </div>
                </div>
            </div>
        </>
    )
}
