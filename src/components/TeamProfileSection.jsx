import React from 'react';

const teamMembers = [
  { name: "Ms. A. Gincy George", position: "Head-Counselling & Community Well-Being (Pan-India)", img: "./Teams_Images/image_1.jpg" },
  { name: "Ramesh Pandey", position: "Founder & President", img: "./Teams_Images/image_2.png" },
  { name: "Naresh Kumar", position: "President - Faridabad Wing", img: "./Teams_Images/image_3.jpg" },
  { name: "Dhiraj Kumar", position: "Pune President", img: "./Teams_Images/image_4.png" },
  { name: "Ms. M D Pavanethra", position: "Volunteer", img: "./Teams_Images/image_5.jpg" },
  { name: "Ayushi Tyagi", position: "Volunteer - GZB", img: "./Teams_Images/image_6.jpg" },
  { name: "Vidushi Pal", position: "Volunteer", img: "./Teams_Images/image_7.jpg" },
  { name: "Krishna Kumar", position: "Volunteer - Advisor", img: "./Teams_Images/image_8.jpg" },
  { name: "Raji P Alex", position: "Advisory Board", img: "./Teams_Images/image_9.jpg" },
  { name: "Rajeev Pandey", position: "Supporter Advisor Volunteer", img: "./Teams_Images/image_10.jpg" },
  { name: "Prameesh Singh", position: "Board Member", img: "./Teams_Images/image_11.jpg" },
  { name: "Adv. Harish Kumar", position: "Legal advisor", img: "./Teams_Images/image_12.jpg" },
  { name: "Ghanshyam Sharma", position: "Honorable Member & Advisory board", img: "./Teams_Images/image_13.jpg" },
  { name: "CA Kapil Tiwari", position: "Compliance & Legal advisor", img: "./Teams_Images/image_14.jpg" },
  { name: "Amit Kumar Pandey", position: "General Secretary", img: "./Teams_Images/image_15.jpg" },
  { name: "Ritesh Tiwari", position: "Board member", img: "./Teams_Images/image_16.jpg" },
  { name: "Sandeep Tripathi", position: "Board member", img: "./Teams_Images/image_17.jpg" },
  { name: "Priya Shukla", position: "Administration", img: "./Teams_Images/image_18.jpg" },
  { name: "Preeti Shukla", position: "Vice president", img: "./Teams_Images/image_19.jpg" },
  { name: "Amrita Sinha", position: "Advisory Board & Supporter", img: "./Teams_Images/image_20.jpg" },
  { name: "Ms. Divya Sharma", position: "Chief Financial Officer (CFO)", img: "./Teams_Images/image_23.png" },
  { name: "Ms. Kiran Pandey", position: "Joint Secretary", img: "./Teams_Images/image_22.png" },
];

export default function TeamSection() {
  // Create enough duplicates for seamless scrolling
  const duplicatedMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="bg-gray-100 py-4">
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% / 3));
          }
        }
        .scroll-container {
          animation: scroll 40s linear infinite;
        }
        
      `}</style>
      
      <div className="w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="flex gap-6 md:gap-8 scroll-container">
          {duplicatedMembers.map((member, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center flex-shrink-0 transition-all duration-300 ${
                idx % 2 === 0 ? "translate-y-20" : "-translate-y-20"
              }`}
            >
              <div className="w-32 h-32 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img 
                  src={member.img} 
                  alt={member.name}
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="font-semibold text-lg mt-3">{member.name}</h3>
              <p className="text-gray-600 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}