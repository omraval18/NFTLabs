import React from "react";
import Link from "next/link";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
    const urls = [
        { title: "Company", link1: "About", link2: "Career", link3: "Ventures", link4: "Grants" },
        { title: "Stats", link1: "Activity", link2: "Rankings" },
        {
            title: "Resources",
            link1: "Helpcenter",
            link2: "Gas-Free Marketplace",
            link3: "Blog",
            link4: "Newsletter",
        },
    ];

    return (
        <div className="bottom-0 w-full flex  py-20 px-28 mt-16 bg-[#1F1D2B]/10 backdrop-blur-[4px] items-center ">
            <div className="space-y-5 w-1/2">
                <h1 className="text-white text-sm font-bold">NFTLABS</h1>
                <p className="text-white text-sm font-normal">
                    The world's first non-fungible <br></br> token (NFT) marketplace for both
                    digital <br /> and physical assets.
                </p>
                <p className="italic text-white font-normal text-sm">
                    {" "}
                    © 2022-NFTLabs. All Rights Reserved.
                </p>
            </div>
            <div className="flex space-x-16 items-start">
                {urls.map((data) => (
                    <ul className="text-white text-sm font-normal space-y-3.5">
                        <h1 className="font-bold gradTxt">{data.title}</h1>
                        <Link href="/" passHref>
                            <li className="">{data.link1}</li>
                        </Link>
                        <Link href="/" passHref>
                            <li className="">{data.link2}</li>
                        </Link>

                        <Link href="/" passHref>
                            <li className="">{data.link3}</li>
                        </Link>

                        <Link href="/" passHref>
                            <li className="">{data.link4}</li>
                        </Link>
                    </ul>
                ))}
                ;
                <svg width="0" height="0" className="For Icon Gradient">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#73e0a9" offset="0%" />
                        <stop stopColor="#5b68df" offset="100%" />
                    </linearGradient>
                </svg>
                <div className="space-y-3.5 items-start">
                    <h1 className="text-sm font-bold gradTxt ">Follow Us</h1>
                    <ul className="flex  text-[#b8b7cf] text-3xl space-x-8 ">
                        <li>
                            <FaTwitterSquare className="rounded-lg hover:fill-[url(#blue-gradient)]" />
                        </li>
                        <li>
                            <FaInstagramSquare className="rounded-lg hover:fill-[url(#blue-gradient)]" />
                        </li>
                        <li>
                            <FaGithubSquare className="hover:fill-[url(#blue-gradient)]" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
