import Heart from "../assets/Heart.png";
import QRcode from "../assets/QR.png";
function Supportour() {
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        alert("Copied : "+text);
    };
    return (
        <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center">
            <div>
                <div className="flex">
                    <img src={Heart} className="p-4"></img>
                    <p className="text-5xl text-white font-bold"><i>Support Our Cause</i></p>
                </div>
                <p className="text-zinc-500 font-semibold text-center">Your contribution supports education, women empowerment, health & rural <br></br>development</p>
            </div>


            <div className="flex flex-col lg:flex-row items-center justify-evenly bg-white w-full max-w-[450px] lg:max-w-[980px] mx-auto mt-10 p-4 gap-10">

                {/* Left Section */}
                <div className="flex flex-col items-center gap-4">

                    {/* Heading */}
                    <span className="text-center text-zinc-600 text-lg font-medium">
                        Scan To Pay
                    </span>

                    {/* QR Box */}
                    <div className="flex flex-col items-center justify-center bg-blue-100 p-6 rounded border border-dashed w-full max-w-[420px]">

                        <img src={QRcode} className="w-40 h-40" />

                        {/* UPI ID */}
                        <div className="flex items-center gap-2 bg-white px-4 py-2 mt-4 border-b-2 border-blue-500 shadow-[3px_3px_0px_#000] w-fit">
                            <span>5375395739@oksbi</span>

                            <span
                                className="text-blue-600 cursor-pointer ml-6"
                                onClick={() => handleCopy("5375395739@oksbi")}
                            >
                                Copy 📋
                            </span>
                        </div>

                    </div>
                </div>
                <div className="hidden lg:block w-px h-[200px] bg-zinc-400"></div>
                <div className="flex flex-col items-center justify-center w-full lg:max-w-[320px]">

                    <span className="text-zinc-600 text-center text-lg font-medium">Bank Transfer (NEFT/IMPS)</span>

                    <div className="space-y-6 w-full mt-10">

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-zinc-400">Bank Name</span>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-600 font-medium">Union Bank Of India</span>
                                <span className="text-blue-600 cursor-pointer" onClick={() => handleCopy("Union Bank Of India")}>📋</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-zinc-400">Account No.</span>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-600 font-medium">481401010036579</span>
                                <span className="text-blue-600 cursor-pointer" onClick={() => handleCopy("481401010036579")}>📋</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-zinc-400">IFSC Code</span>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-600 font-medium">UBIN0548146</span>
                                <span className="text-blue-600 cursor-pointer" onClick={() => handleCopy("UBIN0548146")}>📋</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center border-b pb-2">
                            <span className="text-zinc-400">Branch</span>
                            <div className="flex items-center gap-2">
                                <span className="text-zinc-600 font-medium">Transport Nagar, Rewa</span>
                                <span className="text-blue-600 cursor-pointer" onClick={() => handleCopy("Transport Nagar, Rewa")}>📋</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    )
}
export default Supportour;