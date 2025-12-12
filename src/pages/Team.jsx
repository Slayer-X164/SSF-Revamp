import TeamProfileSection from "../components/TeamProfileSection";

export default function Team() {
    return (
        <div className="w-full min-h-screen bg-gray-100 flex items-center justify-center py-16 ">
            <div className="w-full mx-auto">
                <div className="text-center space-y-2 py-3">
                    <h1 className="italic font-extrabold text-4xl">Meat Our Team</h1>
                    <p className="font-bold text-zinc-600 px-4">Passionate change makers and mentors working togather to make an impact</p>
                </div>

                <TeamProfileSection />
            </div>
        </div>
    );
}