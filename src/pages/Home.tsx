import HomeBottomText from "../components/home/HomeBottomText";
import HomeHeroText from "../components/home/HomeHeroText";
import Video from "../components/home/Video";

export default function Home() {
    return (
        <div>
            <div className="h-screen w-screen fixed">
                <Video />
            </div>
            <div className="h-screen w-screen relative flex flex-col justify-between overflow-hidden">
                <HomeHeroText/>
                <HomeBottomText/>
            </div>
        </div>
    )
}