import { HiArrowSmDown } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { FaCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const LearningHub = () => {
  const [openSections, setOpenSections] = useState({
    academic: true, // First section open by default
    career: false,
    skills: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({

      [section]: !prev[section],
    }));
  };

  const transition = {
    duration: 0.4,
    delay: 0.1,
    ease: [0, 0.71, 0.2, 1.01],
  };

  return (
    <div className="w-full min-h-screen bg-[#D9FFED] scroll-smooth">
      <div className="wrapper max-w-6xl mx-auto my-24 p-4 xl:p-2 space-y-12">
        <div className="first space-y-10">
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-sans font-bold border-b-3 border-[#19D150] text-center">
              Learning Hub
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="flex items-center justify-center">
  <img
    src="./images/learningHub1.png"
    alt=""
    className="h-[70vh] w-auto object-contain"
  />
</div>

            <div className="flex items-center md:items-start gap-4 justify-center text-center md:text-start md:justify-around flex-col">
              <h3 className="text-3xl font-bold tracking-normal max-w-[450px]">
                Free education. Practical skills. Real opportunities.
              </h3>
              <p className="text-lg font-medium tracking-normal">
                The SSF Learning Hub is Swastik Srijan Foundation's initiative
                to provide free learning, guidance, and skill development to
                children, youth, and communities—ensuring that access to
                knowledge is never limited by background or financial
                constraints.
              </p>
              <img src="./images/learnText.svg" alt="" />
              <button
                onClick={() => {
                  document.getElementById("banner")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="cursor-pointer hover:scale-105 transition-all duration-300 flex items-center justify-center text-[#038129] gap-1 border-3 border-dashed border-[#19D150] w-full bg-[#ABFFD7] rounded-lg text-xl font-bold py-2 px-4"
              >
                <span>Know More</span>
                <HiArrowSmDown />
              </button>
            </div>
          </div>
        </div>

        <div id="banner" className="second">
          <img src="./images/learningHub2.png" alt="students learning" />
        </div>

        <div
          id="offer"
          className="third w-full grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-normal border-b-2 border-[#19D150] w-fit">
              What We Offer ?
            </h2>
            <p className="text-lg font-medium tracking-wide leading-8">
              Through structured academic support, career guidance, and
              skill-based workshops, we help learners build strong foundations
              and prepare for real-world challenges.
            </p>
          </div>
          <div className="bg-white border-2 border-[#19D150] rounded-4xl p-6">
            <div className="">
              {/* Academic Support */}
              <div className="border-b border-zinc-500 py-6 px-2 transition-all duration-300 ease-in-out">
                <h2
                  onClick={() => toggleSection("academic")}
                  className="flex items-center justify-between cursor-pointer text-2xl font-bold tracking-normal"
                >
                  <span>Academic Support</span>
                  <FaPlus
                    className={`text-[#19D150] text-3xl transition-transform duration-300 ease-in-out ${
                      openSections.academic ? "rotate-45" : ""
                    }`}
                  />
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.academic
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{
                      scale: openSections.academic ? 1 : 0.95,
                      opacity: openSections.academic ? 1 : 0,
                    }}
                    transition={transition}
                  >
                    <div className="py-3 my-2">
                      <h3 className="font-bold text-xl flex items-center gap-2 mb-2 text-zinc-800 tracking-wide">
                        <FaCircle className="w-2" /> Subjects Covered
                      </h3>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Mathematics
                        </h4>
                        <p className="">
                          From basic fundamentals to advanced problem-solving
                        </p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Science
                        </h4>
                        <p className="">
                          Physics, Chemistry, and Biology with conceptual
                          clarity
                        </p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          English
                        </h4>
                        <p className="">
                          Grammar, comprehension, and communication skills
                        </p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Specialized Subjects
                        </h4>
                        <p className="">
                          Advanced topics for high school and college students
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <h3 className="font-bold text-xl flex items-center gap-2">
                        <FaCircle className="w-2" /> Teaching Approach
                      </h3>
                      <p className="px-4 py-2">
                        Interactive and student-friendly sessions Concept-based
                        learning Experienced educators and mentors Practical
                        examples and visual tools
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Career Guidance & Mentorship */}
              <div className="border-b border-zinc-500 py-6 px-2 transition-all duration-300 ease-in-out">
                <h2
                  onClick={() => toggleSection("career")}
                  className="flex items-center justify-between cursor-pointer text-2xl font-bold tracking-normal"
                >
                  <span>Career Guidance & Mentorship</span>
                  <FaPlus
                    className={`text-[#19D150] text-3xl transition-transform duration-300 ease-in-out ${
                      openSections.career ? "rotate-45" : ""
                    }`}
                  />
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.career
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{
                      scale: openSections.career ? 1 : 0.95,
                      opacity: openSections.career ? 1 : 0,
                    }}
                    transition={transition}
                  >
                    <div className="py-3">
                      <h3 className="font-bold text-xl flex items-center gap-2 mb-2 text-zinc-800 tracking-wide">
                        <FaCircle className="w-2" /> What We Provide
                      </h3>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Personalized Counseling
                        </h4>
                        <p className="">
                          One-on-one sessions to assess interests and strengths
                        </p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Career Exploration
                        </h4>
                        <p className="">
                          Exposure to diverse career paths and opportunities
                        </p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Expert Webinars
                        </h4>
                        <p className="">Insights from industry professionals</p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Planning Resources
                        </h4>
                        <p className="">
                          Toolkits and learning resources to support
                          decision-making
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Skill Development Workshops */}
              <div className=" border-zinc-500 py-6 px-2 transition-all duration-300 ease-in-out mb-5">
                <h2
                  onClick={() => toggleSection("skills")}
                  className="flex items-center justify-between cursor-pointer text-2xl font-bold tracking-normal"
                >
                  <span>Skill Development Workshops</span>
                  <FaPlus
                    className={`text-[#19D150] text-3xl transition-transform duration-300 ease-in-out ${
                      openSections.skills ? "rotate-45" : ""
                    }`}
                  />
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openSections.skills
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{
                      scale: openSections.skills ? 1 : 0.95,
                      opacity: openSections.skills ? 1 : 0,
                    }}
                    transition={transition}
                  >
                    <div className="py-3">
                      <h3 className="font-bold text-xl flex items-center gap-2 mb-2 text-zinc-800 tracking-wide">
                        <FaCircle className="w-2" /> Workshop Areas
                      </h3>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-xl font-bold">
                          Digital Literacy
                        </h4>
                        <p className="">
                          Computer basics to advanced digital skills
                        </p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Graphic Design
                        </h4>
                        <p className="">Hands-on design training</p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Communication Skills
                        </h4>
                        <p className="">
                          Public speaking, confidence, and professional writing
                        </p>
                      </div>
                      <div className="space-y-2 px-4 py-2">
                        <h4 className="border-b-2 w-fit border-[#19D150] text-lg font-bold">
                          Life Skills
                        </h4>
                        <p className="">
                          Problem-solving, teamwork, and adaptability
                        </p>
                      </div>
                      <div className="">
                        <h3 className="font-bold text-lg flex items-center gap-2">
                          <FaCircle className="w-2" /> Format
                        </h3>
                        <p className="px-4 py-2 flex flex-col">
                          <span>Interactive sessions</span>
                          <span>Practical exercises</span>
                          <span>Real-world use cases</span>
                          <span>Beginner-friendly learning</span>
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="fourth space-y-10">
          <div className="flex items-center justify-center">
            <h2 className="font-sans text-2xl py-1 text-center font-bold tracking-normal border-b-2 border-[#19D150] w-fit">
              Join the Learning Movement
            </h2>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="f">
              <img src="./images/students_learn1.png" alt="" />
            </div>
            <div className="s">
              <img src="./images/student_learn2.png" alt="" />
            </div>
          </div>
        </div>

        <div className="fifth">
          <div className="flex gap-6 flex-col items-center justify-center">
            <h2 className="max-w-[400px] text-3xl text-center font-bold font-sans tracking-normal">
              Education <span className="text-[#05bc3c]"> changes</span> lives
              and you can be part of it.
            </h2>
            <p className="max-w-[650px] text-xl text-center">
              Whether you’re a learner seeking guidance, a volunteer wanting to
              teach, or a supporter helping us grow, the SSF Learning Hub
              welcomes you.
            </p>

            <div className="btns space-y-4 mt-10">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeBSYTnXA-kyra6iVT4WkAEeIq_ZKVWcMa39Ppae4_tUpO3DQ/viewform"
                target="_blank"
                className="bg-[#11A043] hover:scale-105 text-white drop-shadow-md drop-shadow-white font-bold text-xl px-10 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer active:scale-90 duration-200 transition-all"
              >
                <span>Join SSF Learning Hub</span>
                <FaArrowRightLong />
              </a>
              <a
                href="https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view"
                target="_blank"
                className="bg-[#005DFF] hover:scale-105 text-white drop-shadow-md drop-shadow-white font-bold text-xl px-10 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer active:scale-90 duration-200 transition-all"
              >
                <span>Support Education</span>
                <FaArrowRightLong />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningHub;
