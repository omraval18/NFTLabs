import { useState } from "react";
import * as React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "../components/TabPanel";
import Data from "../data/explore";
import CollectionCard from "../components/CollectionCard";

const tabData = [
    {
        category: "Trending",
        index: 0,
    },
    {
        category: "Top",
        index: 1,
    },
    {
        category: "Sports",
        index: 2,
    },
    {
        category: "Art",
        index: 3,
    },
];

const PageContent = () => {
    const [value, setValue] = useState(0);

    const handleChange = (e, val) => {
        setValue(val);
    };
    return (
        <div className="w-full px-[10%]">
            <h1 className="text-white font-bold text-4xl flex justify-center pt-7 mt-10">
                Explore Collections
            </h1>
            <Box sx={{ width: "100%" }} className=" mt-28">
                <Box>
                    <Tabs value={value} onChange={handleChange} textColor="Primary" centered>
                        {tabData.map((data) => (
                            <Tab label={data.category} />
                        ))}
                    </Tabs>
                    <div>
                        {tabData.map((data, index) => (
                            <TabPanel key={index} value={value} index={data.index}>
                                <div className="w-[100%] flex justify-center flex-wrap mt-16 ">
                                    {Data.map((x, index) => (
                                        <CollectionCard key={index} number={x.number} />
                                    ))}
                                </div>
                            </TabPanel>
                        ))}
                    </div>
                </Box>
            </Box>
        </div>
    );
};

export default function Explore() {
    return (
        <div className="w-full h-auto object-cover bg-cover bg-no-repeat bg-[url('../public/bg2.png')] ">
            <Navbar />
            <PageContent />
            <Footer />
        </div>
    );
}
