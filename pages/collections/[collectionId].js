import { useRouter } from "next/router";
import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import { client } from "../../lib/sanityClient";
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const CollectionHeader = ({ profileImg, bannerImg }) => {
    return (
        <div className="overflow-hidden w-screen h-screen flex flex-col items-center justify-center mt-3">
            <div className=" w-[80%] h-[40%] flex justify-center">
                <img src={bannerImg} className="w-full h-full rounded-3xl" />
            </div>
            <div className="w-full h-full -bottom-[70%] right-[50%] flex justify-center items-center">
                <img src={profileImg} className="w-[150px] h-[150px]" />
            </div>
        </div>
    );
};

export default function Collection() {
    const router = useRouter();
    const { provider } = useWeb3();
    const { collectionId } = router.query;
    const [collection, setCollection] = useState({});
    const [nfts, setNfts] = useState([]);
    const [listings, setListings] = useState([]);

    //

    const nftModule = useMemo(() => {
        if (!provider) return;

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            "https://eth-rinkeby.alchemyapi.io/v2/SDdqOCoi_O0QUw73ggMR7XX6Z9Ba6Zuf"
        );
        return sdk.getNFTModule(collectionId);
    }, [provider]);

    // get all NFTs in the collection
    useEffect(() => {
        if (!nftModule) return;
        (async () => {
            const nfts = await nftModule.getAll();

            setNfts(nfts);
        })();
    }, [nftModule]);

    const marketPlaceModule = useMemo(() => {
        if (!provider) return;

        const sdk = new ThirdwebSDK(
            provider.getSigner(),
            "https://eth-rinkeby.alchemyapi.io/v2/SDdqOCoi_O0QUw73ggMR7XX6Z9Ba6Zuf"
        );
        return sdk.getMarketplaceModule("0x9520E982A091692ff4B8866a51cd6c1Df1486E12");
    }, [provider]);

    // get all listings in the collection
    useEffect(() => {
        if (!marketPlaceModule) return;
        (async () => {
            setListings(await marketPlaceModule.getAllListings());
        })();
    }, [marketPlaceModule]);

    const fetchCollectionData = async (sanityClient = client) => {
        const query = `*[_type == "marketItems" && contractAddress == "${collectionId}" ] {
      "imageUrl": profileImage.asset->url,
      "bannerImageUrl": bannerImage.asset->url,
      volumeTraded,
      createdBy,
      contractAddress,
      "creator": createdBy->userName,
      title, floorPrice,
      "allOwners": owners[]->,
      description
    }`;

        const collectionData = await sanityClient
            .fetch(query)
            .then((result) => setCollection(result[1]));

        // the query returns 1 object inside of an array
        // setCollection(collectionData[1]);
        // console.log(collectionData[1]);
    };

    useEffect(() => {
        fetchCollectionData();
    }, [collectionId, collection]);

    console.log(router.query.collectionId);

    return (
        <div className="overflow-hidden w-full h-auto object-cover bg-cover bg-no-repeat bg-[url('../public/bg2.png')]">
            <Navbar />
            <CollectionHeader bannerImg={collection?.bannerImageUrl} />
            <Footer />
        </div>
    );
}
