import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div className="w-full h-[200vh] object-cover bg-cover bg-no-repeat bg-[url('../public/bg2.png')] ">
            <Navbar />
            <Hero />
        </div>
    );
}
