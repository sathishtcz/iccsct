import { Link } from "react-router-dom";

export default function ConferenceTracks() {
    return (
        <>
            <div className="relative bg-cover bg-center flex items-center pt-7 lg:pt-20 md:pt-14 sm:pt-10  sm:h-[400px] md:h-[380px] lg:h-[380px] 2xl:h-[400px]" style={{ backgroundImage: "url('/assets/images/Banner.jpg')" }} >
                {/* Overlay */}
                <div className="absolute inset-0 bg-[#000000] opacity-50"></div>
                {/* Centered Content */}
                <div className="xl:max-w-[1450px]  md:max-w-[920px] mx-auto w-full px-3 lg:mt-0 mt-5 z-10 pt-10 pb-4 md:pb-10  ">
                    <div className="space-y-3">
                        <div className="border-white border-2 rounded-full w-fit">
                            <div className="px-4 py-1 bg-transparent rounded-full text-white">Conference Tracks</div>
                        </div>
                        <p className="inter-medium text-[25px] text-white">The Core Tracks</p>
                        <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">ICCSCT is designed to cover a wide spectrum of specialized tracks that highlight the diverse facets of computational systems and cloud technologies. Our carefully curated tracks provide participants with in-depth discussions, hands-on insights, and opportunities to share innovative research.</p>
                        <p className="flex space-x-2 text-gray-200   mt-4">

                            <Link to="/" className="inter-regular  text-[16px]">
                                Home
                            </Link>

                            <p className="text-white text-[16px] inter-regular ">/</p>
                            <p className="text-[16px]  inter-regular">Conference Tracks</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Whether you are an academic researcher, industry professional, or technology enthusiast, our conference tracks ensure there’s something impactful for everyone: The following ensure that ICCSCT 2025 empowers every participant to share ideas, solve challenges, and build the future of digital technologies together.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-15 mt-10 px-5">
                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full  p-6 relative ">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">01</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">Parallel Computing</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Dive into architectures, algorithms, and applications that enable faster processing and large-scale simulations for complex problems.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">02</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">Cloud Infrastructure</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Discover advancements in cloud architecture, containerization, and virtualization technologies that power modern scalable services.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">03</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">Big Data Analytics & Processing</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Discuss frameworks and techniques for handling massive data sets, real-time analytics, and intelligent decision-making.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">04</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">Distributed & Edge Computing</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Examine solutions for low-latency computing at the network edge and distributed systems that extend cloud capabilities.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">05</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">Cloud Security & Privacy</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Explore emerging strategies to protect data integrity, ensure privacy, and strengthen trust in cloud environments.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">06</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">AI & ML in Cloud</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Analyze how cloud infrastructure empowers AI models, training workflows, and deployment at scale.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">07</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">IoT & Smart Systems</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Understand how cloud platforms enable the Internet of Things, smart cities, and interconnected intelligent devices.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">08</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">Green Cloud Technologies</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Learn about energy-efficient data centers, green computing strategies, and sustainability practices in cloud operations.</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full p-6 relative">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium">09</div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900">Trends in Computational Systems</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Discuss next-generation research directions, disruptive technologies, and evolving standards shaping the future of the cloud.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
