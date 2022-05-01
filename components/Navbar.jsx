import Image from "next/image";
import Link from "next/link";
import { BiSearchAlt } from "react-icons/bi";
import logo from "../public/logo2.svg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useRouter } from "next/router";
import { route } from "next/dist/server/router";
export default function Navbar() {
    const router = useRouter();
    return (
        <div className=" relative w-full py-4 px-[10%] 2xl:px-[8%] navbg items-center flex justify-around 2xl:justify-between  z-[40] ">
            <div className="3xl:w-[72px] 3xl:h-[72px] 2xl:w-[60px] 2xl:h-[60px]">
                <Image src={logo} height={100} width={100} />
            </div>
            <div>
                <div className=" bg-transparent py-3 px-4 flex border-[#73E0A9] border rounded-full items-center justify-between">
                    <BiSearchAlt className="text-xl text-white" />
                    <input
                        type="text"
                        placeholder="Search items, collections, and accounts"
                        className=" pl-4 w-[380px] bg-transparent
                        focus:outline-none 
                        placeholder:text-xs 
                        placeholder:font-thin 
                        focus:placeholder:text-transparent 
                        text-white
                        caret-white
                        placeholder:text-white
                        placeholder:justify-center"
                    />
                </div>
            </div>
            <div>
                <ul className="flex text-white font-bold ml-6 text-base flex-1 items-center">
                    <Link href="/explore" passHref>
                        <li
                            className={route.pathname == "/explore" ? "mx-7 text-blue-600" : "mx-7"}
                        >
                            Explore
                        </li>
                    </Link>
                    <Link href="/" passHref>
                        <li className="mx-7">Stats</li>
                    </Link>
                    <Link href="/" passHref>
                        <li className="mx-7">Create</li>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center space-x-6">
                <button className=" font-bold bg-transparent 3xl:py-2 3xl:px-8 2xl:py-2 2xl:px-8 rounded-full border text-base text-white border-[#5B68DF]">
                    Account
                </button>
                <button className="font-bold  py-2 px-2 3xl:py-2 3xl:px-6 2xl:py-2 2xl:px-6  rounded-full border 3xl:text-base  2xl:text-sm text-white border-[#5B68DF] flex justify-center bgGradient items-center">
                    <MdOutlineAccountBalanceWallet className="2xl:text-lg mr-2" />
                    Connect Wallet
                </button>
            </div>
        </div>
    );
}
