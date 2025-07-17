import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { GrUploadOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


export default function Contactus() {

    const [formData, setFormData] = useState({
        Firstname: '',
        Lastname: '',
        Mobile_Number: '',
        Email_Address: '',
        Message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        if (e.target.type === 'file') {
            setFormData({ ...formData, [e.target.name]: e.target.files[0] });
        } else {
            setFormData({ ...formData, [e.target.name]: e.target.value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('Firstname', formData.Firstname);
            formDataToSend.append('Lastname', formData.Lastname);
            formDataToSend.append('Mobile_Number', formData.Mobile_Number);
            formDataToSend.append('Email_Address', formData.Email_Address);
            formDataToSend.append('Message', formData.Message);

            // if (formData.Paper_File) {
            //     formDataToSend.append('Paper_File', formData.Paper_File);
            // }

            const response = await fetch('http://192.168.1.29/ICCSCT/Iccsct/contact.php', {
                method: 'POST',
                body: formDataToSend,
            });

            if (response.ok) {
                const result = await response.text();
                setStatus(result);
                setFormData({
                    Firstname: '',
                    Lastname: '',
                    Mobile_Number: '',
                    Email_Address: '',
                    Message: '',
                });
                toast.success("Form submitted successfully!");
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
                            <div className="px-4 py-1 bg-transparent rounded-full text-white">Contact Us</div>
                        </div>
                        <p className="inter-medium text-[25px] text-white">Reach Out to Us</p>
                        <p className="inter-regular text-gray-200 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">For any questions regarding ICCSCT 2025, paper submissions, registration, sponsorship, or partnership opportunities, our organizing team is here to help.</p>
                        <p className="flex space-x-2 text-gray-200   mt-4">

                            <Link to="/" className="inter-regular  text-[16px]">
                                Home
                            </Link>

                            <p className="text-white text-[16px] inter-regular ">/</p>
                            <p className="text-[16px]  inter-regular">Contact Us</p>
                        </p>
                    </div>
                </div>
            </div>

            <div className="xl:max-w-[1450px]  md:max-w-[920px] px-4 mx-auto mt-8 lg:mt-10 ">
                <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px] ">Reach out to us via email or phone — we’ll ensure you get the information and support you need to make your participation smooth and rewarding.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-10  max-w-[65rem] mx-auto px-3">
                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full  p-6 relative ">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><BiSolidPhoneCall className="text-white text-xl lg:text-2xl" /></div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">Phone</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">+91-123-456-7890</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full  p-6 relative ">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><IoIosMail className="text-white text-xl lg:text-2xl" /></div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">Email</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">info.iccsct@gmail.com</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-b from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                        <div className="bg-white rounded-lg h-full  p-6 relative ">
                            <div className="absolute -top-5 -left-5 bg-gradient-to-b from-[#025DFB] to-[#04C1F3] w-11 h-11 rounded-full flex items-center justify-center text-white text-xl inter-medium"><FaLocationDot className="text-white text-xl lg:text-2xl" /></div>
                            <h3 className="inter-semibold text-lg mb-2 text-gray-900 ">Location</h3>
                            <p className="inter-regular text-gray-700 sm:text-base md:text-lg lg:text-[16px] text-justify leading-[30px]">Chennai, Tamil Nadu</p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[65rem] mx-auto mt-10 bg-gradient-to-r from-[#025DFB] to-[#04C1F3] p-[2px] rounded-lg ">
                    <div className="bg-white rounded-lg h-full p-6">
                        <h4 className="text-2xl font-bold text-[#025DFB] mb-6 text-center">Get in touch with us</h4>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                                <div>
                                    <label className="block text-gray-700 text-base font-medium mb-2">First Name  <span className="text-red-500">*</span></label>
                                    <input type="text" name="Firstname"
                                        onChange={handleChange}
                                        value={formData.Firstname}
                                        required className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#025DFB]" placeholder="Your first name" />
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-base font-medium mb-2">Last Name  <span className="text-red-500">*</span></label>
                                    <input type="text" name="Lastname"
                                        onChange={handleChange}
                                        value={formData.Lastname}
                                        required className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#025DFB]" placeholder="Your last name" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 text-base font-medium mb-2">Email  <span className="text-red-500">*</span></label>
                                <input type="email" required
                                    name="Email_Address"
                                    onChange={handleChange}
                                    value={formData.Email_Address} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#025DFB]" placeholder="Your email address" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-base font-medium mb-2">Phone No  <span className="text-red-500">*</span></label>
                                <input type="tel" required
                                    name="Mobile_Number"
                                    onChange={handleChange}
                                    value={formData.Mobile_Number} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#025DFB]" placeholder="Your phone number" />
                            </div>
                            <div>
                                <label className="block text-gray-700 text-base font-medium mb-2">Message  <span className="text-red-500">*</span></label>
                                <textarea required
                                    name="Message"
                                    onChange={handleChange}
                                    value={formData.Message} className="w-full p-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#025DFB] h-28 " placeholder="Your message here"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="w-fit bg-gradient-to-r from-[#025DFB] to-[#04C1F3] text-white px-3 py-2 rounded-lg  cursor-pointer transition duration-300 inter-semibold">{status === 'Sending...' ? 'Sending...' : 'Send Your Message'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}


