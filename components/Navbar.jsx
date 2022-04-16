import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo2.svg";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
export default function Navbar() {
    return (
        <div className="w-full py-8 lg:px-[10%] navbg items-center flex lg:space-x-30 space-x-24 z-[40] relative">
            <div className="w-[72px] h-[72px]">
                <Image src={logo} height={1000} width={1000} />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Search items, collections, and accounts"
                    className="rounded-full py-3 w-[380px] px-10 bg-transparent 
                        border placeholder:text-xs 
                        placeholder:font-thin 
                        focus:placeholder:text-transparent 
                        caret-white
                        placeholder:text-white
                        placeholder:justify-center
                        border-[#73E0A9]"
                />
            </div>
            <div>
                <ul className="flex text-white font-bold ml-6 text-base flex-1 items-center">
                    <Link href="/" passHref>
                        <li className="mx-7">Explore</li>
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
                <button className=" font-bold bg-transparent lg:py-2 lg:px-8 rounded-full border text-base text-white border-[#5B68DF]">
                    Account
                </button>
                <button className="font-bold bg-transparent py-2 px-4 lg:py-2 lg:px-6 rounded-full border text-base text-white border-[#5B68DF] flex justify-center bgGradient items-center">
                    <MdOutlineAccountBalanceWallet className="lg:text-lg mr-2" />
                    Connect Wallet
                </button>
            </div>
        </div>
    );
}
