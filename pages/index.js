import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import GemsCard from "../components/GemsCard";
import CollectionCardShort from "../components/CollectionCardShort";
import Footer from "../components/Footer";
import { useWeb3 } from "@3rdweb/hooks";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { useEffect } from "react";
import { client } from "../lib/sanityClient";

const HiddenGem = () => {
    return (
        <div className="w-full px-[10%] 2xl:mt-16">
            <div className="flex justify-between items-center px-[5%]">
                <p className="text-white text-4xl font-bold">Hidden Gems</p>
                <p className="text-sm font-bold gradTxt">View all</p>
            </div>
            <div className=" w-full flex justify-around flex-wrap mt-24">
                <GemsCard />
                <GemsCard />
                <GemsCard />
            </div>
        </div>
    );
};

const TopCollection = () => {
    return (
        <div className="w-full px-[10%] mt-32">
            <div className="flex justify-between items-center px-[5%]">
                <p className="text-white text-4xl font-bold">Top Collections</p>
                <p className="text-sm font-bold gradTxt">View all</p>
            </div>
            <div className="w-[80%] mx-auto flex items-center justify-around mt-16 flex-wrap">
                <CollectionCardShort />
                <CollectionCardShort />
                <CollectionCardShort />
                <CollectionCardShort />
                <CollectionCardShort />
                <CollectionCardShort />
                <CollectionCardShort />
                <CollectionCardShort />
            </div>
        </div>
    );
};
export default function Home() {
    const { address, connectWallet } = useWeb3();

    useEffect(() => {
        if (!address) return;
        (async () => {
            const userDoc = {
                _type: "users",
                _id: address,
                userName: "unnamed",
                walletAddress: address,
            };

            const result = await client.createIfNotExists(userDoc);
        })();
    }, [address]);
    return (
        <div className="w-full h-auto object-cover bg-cover bg-no-repeat bg-[url('../public/bg2.png')] ">
            {address ? (
                <>
                    <Navbar />
                    <Hero />
                    <HiddenGem />
                    <TopCollection />
                    <Footer />
                </>
            ) : (
                <div className="w-screen h-screen flex justify-center items-center">
                    <button
                        className="font-bold  py-4 px-4 3xl:py-4 3xl:px-8 2xl:py-2 2xl:px-6  rounded-full border 3xl:text-base  2xl:text-sm text-white border-[#5B68DF] flex justify-center bgGradient items-center"
                        onClick={() => connectWallet("injected")}
                    >
                        <MdOutlineAccountBalanceWallet className="2xl:text-lg mr-2" />
                        Connect Wallet
                    </button>
                </div>
            )}
        </div>
    );
}
