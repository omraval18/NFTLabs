import Image from "next/image";
import globe from "../public/globe.png";
import { MdInfo } from "react-icons/md";
import Link from "next/link";

export default function Hero() {
    return (
        <div className=" relative w-full h-screen">
            <div className="2xl:top-[-20%] 3xl:top-[-10%] right-0 absolute z-[0]">
                <Image src={globe} height={880} width={880} />
            </div>
            <div className="absolute items-center  h-auto justify-center space-y-20 px-[10%] py-[12%] z-[100]">
                <div className="space-y-10 ">
                    <p className="text-white font-bold text-sm opacity-50">
                        Exclusive NFT for Digital and Real-world Assets
                    </p>
                    <h1 className="text-4xl text-white font-bold">
                        The world's first non-fungible token (NFT) marketplace <br></br> for both
                        digital and physical assets.
                    </h1>
                </div>

                <div className="flex space-x-14 text-white text-xl relative ">
                    <Link href="/explore" passHref>
                        <button className="border-2 border-white rounded-full py-3 px-14 font-bold hover:gradTxt hover:border-[#539e79]">
                            Explore
                        </button>
                    </Link>
                    <Link href="/" passHref>
                        <button className="rounded-full py-3 px-14 font-bold bgGradient">
                            Create
                        </button>
                    </Link>
                </div>

                <svg width="0" height="0" className="For Icon Gradient">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#73e0a9" offset="0%" />
                        <stop stopColor="#5b68df" offset="100%" />
                    </linearGradient>
                </svg>
                <p className="absolute text-white font-bold  bottom-10 flex items-center text-sm ">
                    <MdInfo className="mr-3 " style={{ fill: "url(#blue-gradient)" }} />
                    Learn More About The NFT Labs
                </p>
            </div>
        </div>
    );
}
