"use client";
import Image from "next/image";
import Link from "next/link";

const LandingPage= () => {
  return (
    <div>
      <nav className="bg-white flex ">
        <div className="ml-24 mr-64">
          <Image
            className="mt-4 mr-72 w-48 h-auto"
            src="/assets/Group 2364.png"
            alt="logo"
            width={400}
            height={100}
          />
        </div>

        <div className="mt-9 ml-96 flex gap-16">
        <Link href="/login">
            <h1 className="text-2xl text-teal-700 ml-6 cursor-pointer hover:text-[#7CAE41]">Login</h1></Link>
            <Link href="/signup">
            <h1 className="text-2xl ml-32 text-teal-700 cursor-pointer hover:text-[#7CAE41]">Register</h1></Link>
            
        </div>
      </nav>
      <div>
      <Image
            className="mt-4 ml-0 w-[200vh] h-[89.4vh]"
            src="/assets/Back.png"
            alt="logo"
            width={400}
            height={100}
          />
      </div>
      <div className="flex">
        <div className="absolute -mt-80">
            <h1 className="-mt-80 ml-32 text-6xl text-white mb-8 font-semibold">Drive Green, <span className="text-[#7CAE41]">Earn Green </span></h1>
            <p className="ml-32 text-2xl text-white ">Discover how <span className="text-[#7CAE41]">CarbonGuard</span> is transforming vehicle emissions to turn them<br></br> into eco-friendly treasures. Our technology converts vehicle <br></br>emissions into carbon credits, as we pave the way to a <br></br>greener world, one mile at a time.</p>
            <Link href="https://chikara-website.netlify.app/."><button className="rounded-lg border-2 border-[#7CAE41] text-[#fff] bg-[transparent] ml-32 hover:text-white mt-8 text-2xl hover:bg-[#7CAE41] pl-8 pt-4 pr-8 pb-4">Find out more
            </button></Link>
        </div><br></br>
        <div className="ml-96 -mt-80">
        <Image
            className="absolute -mt-80 ml-[17cm] w-[70vh] h-auto"
            src="/assets/Dashboard.png"
            alt="logo"
            width={400}
            height={100}
          />

        </div>
      </div>
    </div>
  );
};

export default LandingPage;