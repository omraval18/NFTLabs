import collImg from "../public/Cover.png";
import avatar from "../public/userAvatar.png";
import { MdOutlineVerified } from "react-icons/md";
import Image from "next/image";

export default function CollectionCard({ number }) {
    return (
        <div
            className="relative w-[300px] pb-4 pt-2  m-[10px] bg-transparent rounded-3xl border border-[#86868691] flex flex-col justify-center items-center hover:border-[#cacaca91]"
            id={number}
        >
            <div>
                <Image src={collImg} width={250} height={90} className="rounded-[1rem]" />
            </div>
            <div className="absolute mx-auto bottom-[75px] z-50 w-[55px] h-[55px] pb-12 border-[#232323] rounded-full border-[4px]">
                <Image
                    src={avatar}
                    height={100}
                    width={100}
                    layout={"responsive"}
                    className="border-2 rounded-full border-transparent"
                    id={number}
                />
            </div>
            <div className="w-full flex flex-col items-center justify-center mt-5 ">
                <p className=" text-white flex items-center text-lg font-bold ">
                    The Sandbox
                    <MdOutlineVerified
                        style={{ fill: "url(#blue-gradient)" }}
                        className="ml-1 text-base"
                    />
                </p>
                <span className="text-[#ffffffc4] flex tex-sm items-center">
                    by &nbsp; <p className="text-[#6DCD9D] text-sm"> TheSandBoxGame</p>
                </span>
            </div>
        </div>
    );
}
