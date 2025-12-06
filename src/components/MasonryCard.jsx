export default function MasonryCards() {
  return (
    <div
      className="
        grid gap-6 mt-10
        grid-cols-1
        sm:grid-cols-2 sm:auto-rows-auto
        lg:grid-cols-12 lg:grid-rows-6
      "
    >
     {/* 1st card */}
      <div
        className="
          sm:row-start-1 sm:row-end-2
          lg:col-start-1 lg:col-end-8
          lg:row-start-1 lg:row-end-3
          border
        "
      >
        <div className="card w-full drop-shadow-lg border-2 border-zinc-100 bg-gradient-to-tr from-[#33ccff] to-[#ff99cc] shadow-[6px_6px_0px_#000] flex flex-col lg:flex-row items-center justify-between gap-2 p-4 h-full py-8 lg:py-0">
          <div className="lg:w-[60%] space-y-4">
            <h4 className="text-2xl sm:text-4xl  font-bold">Education & Skills</h4>
            <p className="text-zinc-600 font-medium">
              We focus on improving access to quality education, digital
              literacy, and vocational training—helping children and youth build
              stronger futures through knowledge and practical skills.
            </p>
          </div>
          <div className="lg:w-[40%] w-full">
            <img src="/images/students.png" alt="" className="w-full hidden lg:block p-3"/>
            <img src="/images/education.svg" alt="" className="w-full lg:hidden pt-4"/>
          </div>
        </div>
      </div>

      {/* 2nd card */}
      <div
        className="
          lg:col-start-8 lg:col-end-13
          lg:row-start-1 lg:row-end-5
          border
        "
      >
        <div className="card w-full drop-shadow-lg border-2 border-zinc-100 bg-linear-to-tr from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] p-4 py-8 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <h4 className="text-2xl sm:text-4xl  font-bold">Women & Child Welfare</h4>
            <p className="text-zinc-600 font-medium">
              Our initiatives uplift women and children by ensuring access to
              nutrition, safety, healthcare, and education—empowering them to
              live with dignity, confidence, and independence.
            </p>
          </div>
          <img src="/images/girls.png" className="w-full pt-6 px-1" />
        </div>
      </div>

      {/* 3rd card */}
      <div
        className="
          lg:col-start-6 lg:col-end-8
          lg:row-start-3 lg:row-end-5
          border
        "
      >
        <div className="card w-full drop-shadow-lg border-2 border-zinc-100 bg-linear-to-tl from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] flex items-center justify-center p-4 h-full text-center">
          <div className="space-y-2">
            <p className="font-extrabold text-lg">Animal Welfare</p>
            <p className="font-extrabold text-lg">
              Livelihood & Rural Development
            </p>
            <p className="font-extrabold text-lg">
              Special Support & Rehabilitation
            </p>
          </div>
        </div>
      </div>

      {/* 4th card */}
      <div
        className="
          lg:col-start-1 lg:col-end-6
          lg:row-start-3 lg:row-end-7
          border
        "
      >
        <div className="card w-full drop-shadow-lg border-2 border-zinc-100 bg-linear-to-tr from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] p-6  py-8 flex flex-col justify-between h-full">
          <div className="space-y-4">
            <h4 className="text-2xl sm:text-4xl  font-bold">Health & Sanitation</h4>
            <p className="text-zinc-600 font-medium">
              We promote better health outcomes through medical camps, awareness
              programs, and sanitation drives, ensuring that everyone has access
              to basic healthcare and a cleaner environment.
            </p>
          </div>
          <img src="/images/health.png" className="w-full pt-6" />
        </div>
      </div>

      {/* 5th card */}
      <div
        className="
          sm:col-start-1 sm:col-end-3
          lg:col-start-6 lg:col-end-13
          lg:row-start-5 lg:row-end-7
          border
        "
      >
        <div className="card w-full drop-shadow-lg border-2 border-zinc-100 bg-linear-to-tl from-white from-80% to-yellow-200 shadow-[6px_6px_0px_#000] flex flex-col lg:flex-row items-center justify-between gap-2 p-4 h-full py-8 lg:py-0">
          <div className="lg:w-[60%] space-y-4">
            <h4 className="text-2xl sm:text-4xl  font-bold">Agriculture & Environment</h4>
            <p className="text-zinc-600 font-medium">
              Our programs support farmers with better techniques, water management, and eco-friendly practices, helping them increase productivity while caring for the environment.
            </p>
          </div>
          <div className="lg:w-[40%] w-full">
            <img src="/images/agriculture.png" alt="" className="w-full hidden lg:block p-3"/>
            <img src="/images/farmer.svg" alt="" className="w-full lg:hidden pt-4"/>
          </div>
        </div>
      </div>
    </div>
  );
}
