import { Link } from "react-router";
import { FaArrowRightLong } from "react-icons/fa6";

const Volunteer = () => {
  return (
    <div className="w-full min-h-screen bg-blue-50">
      <div className="wrapper max-w-6xl mx-auto my-24 p-4 xl:p-2 space-y-10">
        <img src="./images/volunteer_need.png" alt="volunteer need poster" />

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="f_content w-full space-y-5">
            <h4 className="font-extrabold text-xl">
              Swastik Srijan Foundation – Volunteer Program
            </h4>
            <img src="./images/volunteer_work.png" alt="" className="w-full" />
          </div>

          <div className="s_content space-y-6">
            <p>
              Embedded in Swastik Srijan Foundation’s vision and mission are the
              values of service, compassion, community, and creating
              opportunities for those who need them most. Our Volunteer Program
              brings these values to life.
            </p>

            <img src="./images/volunteer_work2.png" alt="volunteer works" />

            <p>
              Volunteering with Swastik Srijan Foundation gives you the
              opportunity to work closely with children, youth, and communities
              while understanding the real challenges they face. Whether you’re
              helping in our education initiatives, supporting community
              outreach, assisting in awareness drives, or guiding children, you
              become an essential part of the change we are building.
            </p>
          </div>
        </div>

        <div className="w-full min-h-96 space-y-8">
          <h2 className="text-center text-3xl font-black italic">
            Why Volunteer With SSF?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="f_content">
              <img src="./images/people_help.png" alt="" className="w-full" />
            </div>

            <div className="s_content w-full flex justify-around flex-col gap-8 md:gap-4">
              <div className="space-y-4 text-xl font-semibold text-zinc-700">
                <p>1. Work directly with children and communities</p>
                <p>2. Learn, contribute, and grow as a changemaker</p>
                <p>3. Be part of a compassionate team committed to service</p>
                <p>
                  4. Support initiatives in education, development, and
                  empowerment
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-black text-2xl">Start Your Journey of Impact</h4>
                <p className="font-semibold text-zinc-500 text-xl">
                  This is your chance to create real change. Join us as a
                  volunteer and be a part of Swastik Srijan Foundation’s mission
                  to build better futures.
                </p>
                <Link
                  to="/volunteer"
                  className="bg-[#005DFF] text-white mt-8 drop-shadow-md drop-shadow-white font-bold text-xl px-4 py-3 flex items-center justify-center gap-2 rounded-xl cursor-pointer active:scale-95 duration-200 transition-all ease"
                >
                  <span>Join Now</span>
                  <FaArrowRightLong />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
