import Frame1 from "../assets/Frame1.png";
import Frame2 from "../assets/Frame2.png";
import Frame3 from "../assets/Frame3.png";
import Connect from "../assets/Connect.png";
function Impactstories() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-between pt-6 bg-[url(./assets/grid.svg)] bg-contain">
      <div className="pt-5">
        <h1 className="text-3xl md:text-4xl font-semibold italic mt-10 text-center">
          Our Impact Stories
        </h1>

        <p className="mt-3 text-zinc-500 font-semibold text-center text-sm md:text-base">
          Real stories of hope, compassion, and community change
        </p>

      </div>
      <div className="realtive pt-10 pb-24  w-full h-full bg-gradient-to-b from-white/0 via-white to-white flex flex-col items-center">
        <div className="flex items-center justify-center w-full flex-wrap gap-6 lg:gap-0">
          <div className="w-[330px] border-3 border-dashed border-gray-500 p-2">
            <img src={Frame1} className="w-full p-2"></img>
            <h2 className="text-[17px] font-semibold p-2">
              Extending a helping hand in crisis
            </h2>
            <p className="text-[15px] text-zinc-500 font-semibold p-2 mt-6">
              Provided essential supplies and food kits to hundreds of families
              and migrant workers during the COVID-19 lockdown across India.
            </p>
            <button className="bg-black text-white text-center w-full p-2 mt-4 hover:bg-white hover:text-black hover:border-2 transition-all duration-300 hover:rounded-4xl" onClick={() =>
              window.open("https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view", "_blank")
            }>
              Donate Now
            </button>
          </div>

          <img src={Connect} className="h-[20px] hidden lg:block"></img>

          <div className="w-[330px] border-3 border-dashed border-gray-500 p-2">
            <img src={Frame2} className="w-full p-2"></img>
            <h2 className="text-[17px] font-semibold p-2">
              Education for Every Child online and offline
            </h2>
            <p className="text-[15px] text-zinc-500 font-semibold p-2">
              SSF Learning Hub offers free online and offline learning to
              children and youth, empowering access to education across India.
            </p>
            <button className="bg-black text-white text-center w-full p-2 mt-4 hover:bg-white hover:text-black hover:border-2 transition-all duration-300 hover:rounded-4xl" onClick={() =>
              window.open("https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view", "_blank")
            }>
              Donate Now
            </button>
          </div>

          <img src={Connect} className="h-[20px] hidden lg:block"></img>

          <div className="w-[330px] border-3 border-dashed border-gray-500 p-2">
            <img src={Frame3} className="w-full p-2"></img>
            <h2 className="text-[17px] font-semibold p-2">
              Planting Hope, One Sapling at a Time
            </h2>
            <p className="text-[15px] text-zinc-500 font-semibold p-2 mt-6">
              A nationwide campaign to plant trees and promote environmental
              awareness among communities and schools.
            </p>
            <button className="bg-black text-white text-center w-full p-2 mt-4 hover:bg-white hover:text-black hover:border-2 transition-all duration-300 hover:rounded-4xl" onClick={() =>
              window.open("https://pages.razorpay.com/pl_NCiTn7wnBOJFYG/view", "_blank")
            }>
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Impactstories;
