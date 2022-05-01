import Image from "next/image";
import { MdOutlineVerified } from "react-icons/md";
import collImg from "../public/collectionImg.png";

export default function GemsCard({ source, collectionname, username, collsummary, number }) {
    return (
        <div className="w-[25%] 3xl:h-[35rem] 2xl:h-[32rem] p-3 mx-6 mt-2 mb-8 bg-transparent border border-[#73E0A9] rounded-[35px] hover:-translate-y-5 hover:ease duration-300">
            <div className="relative w-full flex flex-col justify-center items-center">
                <div className="justify-center flex  border-[0.88px] border-[#73E0A9] rounded-[35px] mt-1">
                    <Image src={collImg} height={287} width={287} className="rounded-[35px] " />
                </div>
                <div className="absolute mx-auto -bottom-[25px] z-50 w-[55px] h-[55px] pb-12 border-2 rounded-full border-[#77CBA1]">
                    <Image
                        src={collImg}
                        height={100}
                        width={100}
                        layout={"responsive"}
                        className="border-2 rounded-full border-transparent"
                        id={number}
                    />
                </div>
            </div>
            <div className="flex justify-center flex-col items-center mt-12">
                <svg width="0" height="0" className="For Icon Gradient">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#73e0a9" offset="0%" />
                        <stop stopColor="#5b68df" offset="100%" />
                    </linearGradient>
                </svg>
                {/* {verfied}?{<p>{collectionname}<MdOutlineVerifiedUser /></p>} : <p>{collectionname}</p> */}
                <p className="text-white flex items-center text-base font-bold">
                    ZombieClub Token{" "}
                    <MdOutlineVerified
                        style={{ fill: "url(#blue-gradient)" }}
                        className="ml-1 text-base"
                    />
                </p>
                <p className="text-white text-sm  mt-[2px] ">
                    Created by <span className="gradTxt text-sm ">Om Raval</span>
                </p>
                <p className="3xl:text-sm 2xl:text-xs text-white p-1 mt-4 font-normal">
                    Zombie Lab is a collection of 10,000 <br /> animated NFTs. Each NFT is unique
                    and <br />
                    resides on the Ethereum blockchain. Your <br /> Zombie Lab Club NFT will double
                    as your <br />
                    club membership.
                </p>
            </div>
        </div>
    );
}
