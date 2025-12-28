import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const LatestNews = () => {
    const [latestNews, setLatestNews] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/category/08')
            .then(resp => resp.json())
            .then(result => setLatestNews(result.data))
            .catch(e => console.log(e));
    })
    return (
        <div className="mt-[30px] w-10/12 mx-auto">
            <Link to="/news">
                <div className="flex items-center gap-5 py-5 px-4 bg-[#f3f3f3]">
                    <Marquee pauseOnHover="true" className=" text-lg text-[rgb(64,63,63)] font-semibold">
                        {
                            latestNews.map(news => {
                                const publishedDate = new Date(
                                    news.author?.published_date
                                ).toLocaleDateString();
                                return (
                                    <div
                                        key={news._id}
                                        className="bg-white rounded-lg shadow-md w-[320px] flex mr-6 overflow-hidden"
                                    >
                                        {/* Image */}
                                        <img
                                            src={news.thumbnail_url}
                                            alt={news.title}
                                            className="w-full h-40 object-cover"
                                        />

                                        {/* Content */}
                                        <div className="p-4">
                                            <h2 className="font-semibold text-sm mb-2 line-clamp-2">
                                                {news.title}
                                            </h2>

                                            <p className="text-xs text-gray-500">
                                                View: {news.total_view}
                                            </p>

                                            <p className="text-xs text-gray-400 mb-2">
                                                {publishedDate}
                                            </p>

                                            {/* Rating */}
                                            <div className="flex items-center gap-1 mb-3">
                                                <span className="text-orange-400 text-sm">★★★★★</span>
                                                <span className="text-xs text-gray-600">
                                                    {news.rating?.number}
                                                </span>
                                            </div>

                                            <Link to={`/news/${news._id}`}>
                                                <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded">
                                                    Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Marquee>
                </div>
            </Link>
        </div>
    )
}
export default LatestNews;