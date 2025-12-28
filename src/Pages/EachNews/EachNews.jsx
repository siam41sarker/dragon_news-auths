import { FaRegEye, FaBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const EachNews = ({ eachNews }) => {
    const {
        title,
        thumbnail_url,
        details,
        total_view,
        rating,
        author,
        _id
    } = eachNews;
    return (
        <div>
            <div className="card bg-base-100 shadow-md border rounded-md mr-6 mb-5">
                {/* Author Header */}
                <div className="flex items-center justify-between px-5 py-4 bg-base-200 rounded-t-md">
                    <div className="flex items-center gap-3">
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-10 h-10 rounded-full object-cover"
                        />
                        <div>
                            <h4 className="font-semibold text-sm">{author.name}</h4>
                            <p className="text-xs text-gray-500">
                                {author.published_date?.slice(0, 10)}
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3 text-gray-500">
                        <FaBookmark className="cursor-pointer" />
                        <FaShareAlt className="cursor-pointer" />
                    </div>
                </div>

                {/* Title */}
                <div className="px-5 pt-4">
                    <h2 className="font-bold text-lg leading-snug">
                        {title}
                    </h2>
                </div>

                {/* Image */}
                <figure className="px-5 py-4">
                    <img
                        src={thumbnail_url}
                        alt={title}
                        className="rounded-md w-full h-[350px] object-cover"
                    />
                </figure>

                {/* Details */}
                <div className="px-5 pb-4 text-sm text-gray-600">
                    {details.length > 250 ? (
                        <>
                            {details.slice(0, 250)}...
                            <Link to={`/news/${_id}`} className="text-primary font-semibold cursor-pointer ml-1">
                                Read More
                            </Link>
                        </>
                    ) : (
                        details
                    )}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-5 py-4 border-t">
                    {/* DaisyUI Star Rating */}
                    <div className="flex items-center gap-3">
                        <div className="rating rating-sm rating-half pointer-events-none">
                            <input type="radio" name="rating" className="rating-hidden" />

                            {[
                                0.5, 1,
                                1.5, 2,
                                2.5, 3,
                                3.5, 4,
                                4.5, 5,
                            ].map((value, index) => (
                                <input
                                    key={value}
                                    type="radio"
                                    name="rating"
                                    className={`mask mask-star-2 ${index % 2 === 0 ? "mask-half-1" : "mask-half-2"
                                        } bg-orange-400`}
                                    checked={rating.number === value}
                                    readOnly
                                />
                            ))}
                        </div>

                        <span className="font-semibold text-gray-700">
                            {rating.number}
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaRegEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EachNews;