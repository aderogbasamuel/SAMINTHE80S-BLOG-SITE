import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div >
      <nav className='flex gap-6 items-center justify-between px-24 py-12 font-medium text-white'>
        <Link to={"/"} className="text-white text-xl text-[text-shadow:_0_0px_4px_#1a4fee82]">SAMINTHE80s</Link>
        <div className="flex gap-6 items-center">
          <Link to={"createpost"}>Create a Post</Link>
          <Link to={"/login"}>Login</Link>
          <Link className='bg-[#110037FC] text-white  rounded-full border-3 padding-6px'>
            <div className="bg-[#00000073] border-[#FFFFF1A] px-4 py-2 rounded-full">
              Get Started
            </div>
          </Link>
        </div>
      </nav>
    </div>
  )
}