import Image from "next/image";
import collImg from "../public/collectionImg.png";
import { MdOutlineVerified } from "react-icons/md";

export default function CollectionCardShort() {
    return (
        <div className="3xl:w-1/5 m-4 2xl:w-1/5 h-[370px] border border-[#73E0A9]  rounded-[32px] flex flex-col items-center ">
            <Image
                src={collImg}
                className="rounded-t-[31px] border-none z-1 drop-shadow-md"
                height={250}
                width={286}
            />

            <div className="w-[90%] h-[40%] bg-[#252836]  rounded-b-[18px] z-0">
                <div className="flex justify-start space-x-4 items-center px-[10%] py-4">
                    <Image src={collImg} height={35} width={35} className="border rounded-full" />
                    <div className="space-y">
                        <p className="text-white text-sm font-bold">Yolk Folks</p>
                        <p className="text-white text-[11px] font-normal flex items-center">
                            By Om Raval{" "}
                            <MdOutlineVerified
                                className="ml-1 text-sm"
                                style={{ fill: "url(#blue-gradient)" }}
                            />
                        </p>
                    </div>
                    <svg width="0" height="0" className="For Icon Gradient">
                        <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                            <stop stopColor="#73e0a9" offset="0%" />
                            <stop stopColor="#5b68df" offset="100%" />
                        </linearGradient>
                    </svg>
                </div>
                <div className="w-full h-[1px] bgGradient"></div>
                <p className="text-white text-[10px] font-normal px-[10%] pt-2 ">Price</p>
                <p className="text-white text-sm font-bold px-[10%] py-1">0.245ETH</p>
            </div>
        </div>
    );
}
