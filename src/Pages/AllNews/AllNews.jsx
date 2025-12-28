import { useLoaderData } from "react-router-dom";
import EachNews from "../EachNews/EachNews";
const AllNews = () =>{
    const {data: news} = useLoaderData();
    return (
        <div>
            <h2 className="text-[#403f3f] font-semibold text-xl">Dragon News Home</h2>
            <p className="text-[#5c5c5c] font-normal text-base mt-5">{news.length} News found in this category.</p>
            <div className="mt-5">
                {
                    news.map((eachNews)=><EachNews key={eachNews._id} eachNews={eachNews}></EachNews>)
                }
            </div>
        </div>
    );
}

export default AllNews;