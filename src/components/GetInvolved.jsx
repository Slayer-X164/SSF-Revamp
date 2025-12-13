import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";

const GetInvolved = () => {
  return (
    <div id="join-us" className="w-full min-h-screen flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl min-h-96 mx-auto space-y-10">

        <div className="text-center space-y-2 flex items-center justify-center flex-col">
          <h1 className="font-black text-4xl italic">Get Involved - Swastik Srijan Foundation</h1>
          <p className="max-w-130 font-bold text-zinc-500">join us to create impact in education , health, woman empowerment, environment and more</p>
        </div>

        <div className="w-full bg-[#ECF9FF] flex items-center flex-col-reverse md:flex-row gap-10 p-6 rounded-2xl">
          <div className="f_content flex flex-col gap-4 justify-around w-full md:w-1/2">
            <h3 className="text-3xl font-black">Volunteer</h3>
            <p className="max-w-[380px] text-zinc-500 tracking-wide font-bold">Contribute your time and passion to make a difference. Work directly with communities and see your impact firsthand.</p>
            <div className="flex items-center flex-wrap gap-4 max-w-[300px]">
              <span className="bg-[#A7E1FF] py-1 px-4 rounded-md">Community Work</span>
              <span className="bg-[#A7E1FF] py-1 px-4 rounded-md">Teaching</span>
              <span className="bg-[#A7E1FF] py-1 px-4 rounded-md">Awareness Drives</span>
            </div>
            <Link to="/volunteer" className="bg-[#005DFF] text-white drop-shadow-md drop-shadow-white font-bold text-xl px-4 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer active:scale-95 duration-200 transition-all ease">
              <span>Explore</span> 
              <FaArrowRightLong />
            </Link>
          </div>
          <div className="s_content w-full md:w-1/2">
            <img src="./images/volunteers.png" alt="" />
          </div>
        </div>

        <div className="w-full bg-[#FFEDDC] grid grid-cols-1 md:grid-cols-2 gap-10 p-6 rounded-2xl">
          <div className="f_content">
            <img src="./images/members.png" alt="" />
          </div>
          <div className="s_content flex flex-col gap-4 justify-around">
            <h3 className="text-3xl font-black">Member</h3>
            <p className="max-w-[380px] text-zinc-500 tracking-wide font-bold">Join our growing family and be part of lasting change . As a member, you help sustain long-term projects and empower communities.</p>
            <div className="flex items-center flex-wrap gap-4 max-w-[300px]">
              <span className="bg-[#FFC898] py-1 px-4 rounded-md">Membership Benefit</span>
              <span className="bg-[#FFC898] py-1 px-4 rounded-md">Network</span>
              <span className="bg-[#FFC898] py-1 px-4 rounded-md">Impact Reports</span>
            </div>
            <button className="bg-[#FB7C1B] hover:bg-[#f7842c] drop-shadow-md drop-shadow-white text-white font-bold text-xl px-4 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer active:scale-95 duration-200 transition-all ease">
              <span>Explore</span> 
              <FaArrowRightLong />
            </button>
          </div>
          
        </div>

        <div className="w-full bg-[#E7FFF4] p-6 rounded-2xl grid grid-cols-1 gap-10">
          <div className="f_content">
            <img src="./images/learningHub.png" alt="" />
          </div>
          <div className="s_content flex flex-col items-center gap-4 justify-center text-center space-y-2">
            <h3 className="text-3xl font-black">SSF Learning Hub</h3>
            <p className="max-w-[660px] text-zinc-500 tracking-wide font-bold">Your trusted hub for free support and services, dedicated to empowering individuals and communities.  We believe that knowledge and resources should be accessible to everyone, regardless of background. Our mission is to make knowledge and resources accessible to everyone</p>
            <div className="flex items-center flex-wrap gap-4 justify-center">
              <span className="bg-[#72FABC] py-1 px-4 rounded-md">Free Resources</span>
              <span className="bg-[#72FABC] py-1 px-4 rounded-md">Skill Building</span>
              <span className="bg-[#72FABC] py-1 px-4 rounded-md">Workshops</span>
            </div>
            <button className="bg-[#029D56] hover:bg-[#05b163] mt-2 text-white w-full font-bold text-xl px-4 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer active:scale-95 duration-200 transition-all ease">
              <span>Explore</span> 
              <FaArrowRightLong />
            </button>
          </div>
          
        </div>

        <div className="w-full p-6 rounded-2xl flex items-center justify-center">
          <div className="content space-y-6 text-center flex flex-col items-center justify-center">
            <h2 className="text-4xl italic font-black">Want to do more ?</h2>
            <div className="">
              <img src="./images/cpi_group.svg" alt="" />
            </div>
            <button className="bg-[#FFD609] hover:bg-[#FFD609] mt-6 text-zinc-800 font-bold text-xl px-8 border-2 border-zinc-600/60 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer active:scale-95 duration-200 transition-all ease">
              <span>Apply Now</span> 
              <FaArrowRightLong />
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GetInvolved
