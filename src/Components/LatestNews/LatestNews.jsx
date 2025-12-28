import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
        <div className="mt-[30px] w-10/12 mx-auto">
            <Link to="/news">
                <div className="flex items-center gap-5 py-5 px-4 bg-[#f3f3f3]">
                    <p className=" w-[110px] h-12 flex justify-center items-center bg-[rgba(215,32,80,1)] text-white text-lg">Latest</p>
                    <Marquee pauseOnHover="true" className=" text-lg text-[rgb(64,63,63)] font-semibold">
                       Match Highlights: Germany vs Spain — Experience the Entire Story of the Match with Detailed Commentary, Goal-by-Goal Analysis, Standout Player Performances, Tactical Shifts, Critical Saves, Late-Game Drama, and Expert Post-Match Breakdown from Our Sports Desk
                    </Marquee>
                </div>
            </Link>
        </div>
    )
}
export default LatestNews;