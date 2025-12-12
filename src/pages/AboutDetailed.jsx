import ABFrame from "../assets/ABFrame1.png";
import ABFrame1 from "../assets/ABFrame2.png";
import ABFrame2 from "../assets/ABFrame3.png";
import ABFrame3 from "../assets/ABFrame4.png";
import ABFrame4 from "../assets/ABFrame5.png";
import ABFrame5 from "../assets/ABFrame6.png";

import { IoIosCheckmarkCircle } from "react-icons/io";
function AbtDetailed() {
    return (
        <div className="w-full  flex flex-col gap-10 md:gap-2 items-center justify-center py-14 px-4 mt-10">
            <div className="max-w-6xl py-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Education
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Ensuring every child has access to quality education
                        and the tools they need to succeed.
                    </h2>
                    <ul className="mt-6 space-y-3 md:space-y-4 text-[15px] md:text-[18px] text-gray-800">
                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Scholarships for underprivileged students</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Distribution of books, uniforms, and learning materials</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Mentorship and academic support programs</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Initiatives to reduce school dropout rates</span>
                        </li>
                    </ul>

                </div>
                <div className="flex justify-center">
                    <img
                        src={ABFrame}
                        alt="Children studying"
                        className=" shadow-xl w-full object-contain"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div className="hidden md:flex justify-center">
                    <img
                        src={ABFrame1}
                        alt="Children studying"
                        className=" shadow-xl w-full object-contain"
                    />
                </div>
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Nutrition & Health
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Bringing healthcare within reach of every community member,
                        regardless of circumstance.
                    </h2>
                    <ul className="mt-6 space-y-3 md:space-y-4 text-[15px] md:text-[18px] text-gray-800">
                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Free medical checkups and health camps</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Access to essential medicines and treatments</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Awareness programs on hygiene and disease prevention</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Support for maternal and child healthcare</span>
                        </li>
                    </ul>

                </div>
                <div className="flex justify-center md:hidden">
                    <img
                        src={ABFrame1}
                        alt="Children studying"
                        className=" shadow-xl w-full object-contain"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Development
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Building stronger, self-sufficient rural communities through sustainable development.
                    </h2>
                    <ul className="mt-6 space-y-3 md:space-y-4 text-[15px] md:text-[18px] text-gray-800">
                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Infrastructure improvements for villages</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Skill-development & livelihood training</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Women-led self-help group support</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Programs promoting agriculture & local entrepreneurship</span>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center">
                    <img
                        src={ABFrame2}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div className="hidden md:flex justify-center">
                    <img
                        src={ABFrame3}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Youth Empowerment
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Empowering young individuals with practical skills to build
                        confident and independent futures.
                    </h2>
                    <ul className="mt-6 space-y-3 md:space-y-4 text-[15px] md:text-[18px] text-gray-800">
                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Vocational & technical skill training</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Career guidance & personality development</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Communication & leadership workshops</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Job readiness training & employment support</span>
                        </li>
                    </ul>

                </div>
                <div className="flex justify-center md:hidden">
                    <img
                        src={ABFrame3}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">

                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Health Awareness
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Promoting healthier communities through education,
                        prevention, and accessible health knowledge.
                    </h2>
                    <ul className="mt-6 space-y-3 md:space-y-4 text-[15px] md:text-[18px] text-gray-800">
                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Awareness sessions on hygiene and nutrition</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Disease prevention and first-aid workshops</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Mental health and wellness guidance</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Family and community health counseling</span>
                        </li>
                    </ul>

                </div>
                <div className="flex justify-center">
                    <img
                        src={ABFrame4}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-10">
                <div className="hidden md:flex justify-center">
                    <img
                        src={ABFrame5}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
                <div>
                    <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                        Homeless Support
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-snug">
                        Providing care and essential support to individuals
                        facing homelessness and hardship.
                    </h2>
                    <ul className="mt-6 space-y-3 md:space-y-4 text-[15px] md:text-[18px] text-gray-800">
                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Food, clothing, and essential relief distribution</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Temporary assistance for vulnerable families</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Community outreach and support drives</span>
                        </li>

                        <li className="flex items-start gap-1 md:gap-2 leading-tight">
                            <IoIosCheckmarkCircle className="text-green-600 text-lg md:text-2xl shrink-0" />
                            <span>Programs fostering safety, care, and dignity</span>
                        </li>
                    </ul>

                </div>
                <div className="flex justify-center md:hidden">
                    <img
                        src={ABFrame5}
                        alt="Children studying"
                        className=" shadow-xl w-full object-cover"
                    />
                </div>
            </div>
        </div>
    )
}
export default AbtDetailed;