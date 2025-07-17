import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function PaperSub() {

    const [fileName, setFileName] = useState('Click to Upload Paper');

    // const handleFileChange = (e) => {
    //     if (e.target.files.length > 0) {
    //         setFileName(e.target.files[0].name);
    //     }
    // };

    const [formData, setFormData] = useState({
        Paper_Title: '',
        Author_FUll_Name: '',
        Email_Address: '',
        Institution_Name: '',
        Paper_Track: '',
        Paper_File: null,
        Mobile_Number: "",
    });
    const [status, setStatus] = useState('');

    // const handleChange = (e) => {
    //     if (e.target.type === 'file') {
    //         setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    //     } else {
    //         setFormData({ ...formData, [e.target.name]: e.target.value });
    //     }
    // };

    const handleFileInputChange = (e) => {
        const { name, type, files, value } = e.target;

        // For file preview display
        if (files && files.length > 0) {
            setFileName(files[0].name); // update UI
            setFormData((prev) => ({
                ...prev,
                [name]: files[0], // update actual form data
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Paper_Title', formData.Paper_Title);
            formDataToSend.append('Author_FUll_Name', formData.Author_FUll_Name);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Institution_Name', formData.Institution_Name);
            formDataToSend.append('Paper_Track', formData.Paper_Track);
            formDataToSend.append('Mobile_Number', formData.Mobile_Number);


            if (formData.Paper_File) {
                formDataToSend.append('Paper_File', formData.Paper_File);
            }

            const response = await fetch('http://192.168.1.29/ICCSCT/Iccsct/mail.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    Paper_Title: '',
                    Author_FUll_Name: '',
                    Email_Address: '',
                    Institution_Name: '',
                    Paper_Track: '',
                    Paper_File: null,
                    Mobile_Number: '',
                });
                // document.getElementById('Paper_File').value = '';
                toast.success("Paper submitted successfully!");
            } else {
                setStatus('Failed to send submission. Please try again.');
                toast.error('Failed to send submission. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('An error occurred. Please try again.');
            toast.error('An error occurred. Please try again.');
        }
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
                            <div className="px-4 py-1 bg-transparent rounded-full text-white">Paper Submission</div>
                        </div>
                        <p className="inter-medium text-[25px] text-white">Be a Part of ICCSCT 2025</p>
                        <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">We invite researchers, academics, and industry professionals to submit original and high-quality papers to ICCSCT 2025. </p>
                        <p className="flex space-x-2 text-gray-200   mt-4">

                            <Link to="/" className="inter-regular  text-[16px]">
                                Home
                            </Link>

                            <p className="text-white text-[16px] inter-regular ">/</p>
                            <p className="text-[16px]  inter-regular">Paper Submission</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:max-w-[1300px]  md:max-w-[920px] px-4 mx-auto lg:mt-10 mt-8">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Share your latest research, case studies, and technological advancements that align with the conference themes of computational systems and cloud technologies.
                </p>
                <div className="lg:mt-5 mt-5 border-gray-200 shadow-sm border rounded-lg">
                    <div className="bg-white rounded-lg h-full  p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 place-items-stretch">
                            <div>
                                <div className="flex flex-col gap-5">
                                    <div className="bg-white text-center  rounded-lg p-2 border-l-5 border-l-[#025DFB] shadow-[0_0_10px_rgba(0,0,0,0.1)]"><p className="inter-semibold text-lg lg:text-[18px]">Submission Guidelines</p></div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide the title of your paper, which should be descriptive and concise.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the full name of the first author as it appears on the paper.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter a valid mobile number (10-15 digits, country code optional).</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Provide a working email address for the first author to receive notifications.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Enter the name of the institution the first author is affiliated with.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Choose the relevant category for the first author.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Ensure your paper is in PDF or DOC format and does not exceed 5MB in size.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col gap-5">
                                    <div className="bg-white text-center rounded-lg p-2 border-l-5 border-l-[#025DFB] shadow-[0_0_10px_rgba(0,0,0,0.1)]"><p className="inter-semibold text-lg lg:text-[18px]">Important Notes</p></div>
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">All papers undergo a double-blind peer review process.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">At least one author must register for the conference.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Plagiarism checks will be performed.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Multiple submissions are not allowed.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Authors must present accepted papers at the conference.</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-2 h-2 rounded-full flex-shrink-0"></span>
                                            <p className="inter-regular text-gray-800 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Papers will be published in the conference proceedings.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:mt-8 mt-5 border-gray-200 shadow-sm border rounded-lg">
                    <div className="bg-white rounded-lg h-full  p-6">
                        <div className="bg-white text-center  rounded-lg p-2 border-l-5 border-l-[#025DFB] shadow-[0_0_10px_rgba(0,0,0,0.1)]"><p className="inter-semibold text-lg lg:text-[18px]">Submission Form</p><p className="">Please fill in all required fields to submit your paper</p></div>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                                <div className="space-y-2">
                                    <label for="Paper_Title" className="block text-sm font-medium text-gray-700">Paper Title
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='Paper_Title'
                                        value={formData.Paper_Title}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Your Paper Title"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#025DFB]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label for="Institution_Name" className="block text-sm font-medium text-gray-700">Institution Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='Institution_Name'
                                        value={formData.Institution_Name}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Your Institution Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#025DFB]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label for="Author_FUll_Name" className="block text-sm font-medium text-gray-700">Author Full Name
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='Author_FUll_Name'
                                        value={formData.Author_FUll_Name}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Author’s Full Name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#025DFB]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label for="Mobile_Number" className="block text-sm font-medium text-gray-700">Mobile Number
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name='Mobile_Number'
                                        value={formData.Mobile_Number}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter your Mobile Number"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#025DFB]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label for="Email_Address" className="block text-sm font-medium text-gray-700">Email
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name='Email_Address'
                                        value={formData.Email_Address}
                                        onChange={handleFileInputChange}
                                        required
                                        placeholder="Enter Author’s Email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#025DFB]"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label for="Paper_Track" className="block text-sm font-medium text-gray-700">Paper Track
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <select name='Paper_Track' value={formData.Paper_Track} onChange={handleFileInputChange}
                                        required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#025DFB]">
                                        <option>Select Your Category</option>
                                        <option>AI</option>
                                        <option>Machine Learning</option>
                                        <option>Data Science</option>
                                    </select>
                                </div>
                                <div className="space-y-2 lg:col-span-2">
                                    <label for="Paper_File" className="block text-sm font-medium text-gray-700">Paper File
                                        <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative w-full px-4 py-6 border border-gray-300 rounded-lg focus:outline-none  focus:border-[#025DFB] flex flex-col items-center justify-center text-center text-gray-500 overflow-hidden cursor-pointer">
                                        <input
                                            name='Paper_File'
                                            // onChange={handleChange}
                                            accept=".pdf,.doc,.docx"
                                            type="file"
                                            onChange={handleFileInputChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer z-10"
                                        />
                                        <FiUploadCloud className="text-3xl text-[#025DFB] mb-2 z-0" />
                                        <p className="z-0">{fileName || "Click to Upload Paper"}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    disabled={status === 'Sending...'}
                                    className="w-fit bg-gradient-to-r from-[#025DFB] to-[#04C1F3] text-white px-3 py-2 rounded-lg  cursor-pointer transition duration-300 inter-semibold mt-6"
                                >
                                    {status === 'Sending...' ? 'Submitting...' : 'Submit Your Paper'}
                                </button>
                            </div>
                            <div className="mt-3 text-center text-sm text-gray-500">Need help? Contact <a href="mailto:info.iccsct@gmail.com" className="text-[#025DFB]">info.iccsct@gmail.com</a></div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
