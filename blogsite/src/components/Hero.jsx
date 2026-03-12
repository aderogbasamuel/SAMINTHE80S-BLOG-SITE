import Navbar from "./Navbar.jsx"
export default function Hero(){
    return(
        <div className="bg-gradient-to-r from-[#000000] to-[#090157]">
            {/* <div style={"background-image: linear-gradient(to right, #FFFFFF24, transparent 1px), linear-gradient(to bottom, #FFFFFF24, transparent 1px); background-size: 20vw 20vw; padding-bottom: 32px;"}> */}
            <Navbar/>
            <div className="flex flex-col items-start sm:items-center sm:px-12 py-12 gap-6">
                <p className="uppercase border-2 border-[#00EDFF] rounded-full text-white w-fit px-3 py-2 text-[12px] shadow-[0_0px_5px_#b4faff] shadow-[#b4faff]">Going Back to the origin of knowledge</p>
                <h1 className="text-white text-5xl sm:text-center max-w-4xl leading-tight">
                    Digging through the past to rediscover the origins of today's ideas,
                    technologies, and inventions.
                </h1>
                <form className="flex flex-col sm:flex-row gap-3">
                    <input type="text" placeholder="Enter Title or Concept" className="bg-[#000320db] rounded-[10px] py-3 px-6 border-2 border-[#f5c5c5c7d] text-sm w-lg" />
                    <button type="submit" className="bg-[#ff23b2] border-0 text-base rounded-4 p-3 px-6 rounded-[8px]">Search</button>
                </form>
            {/* </div> */}
        </div></div>
    )
}