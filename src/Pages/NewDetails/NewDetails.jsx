import { Link, useLoaderData } from "react-router-dom";
import Header from "../../Components/Header/Header";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
import { FaArrowLeftLong } from "react-icons/fa6";
const NewDetails = () => {
    const newsDetails = useLoaderData();
    const { title, details, image_url, category_id
    } = newsDetails.data[0];

    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
            </header>
            <main className="mt-8 w-10/12 mx-auto mb-10">
                <div className="grid grid-cols-12 mt-5 gap-3">
                    <section className="col-span-9 ">
                        <h2 className="text-[#403f3f] text-xl font-semibold">Dragon News</h2>
                        <div className="flex flex-col justify-center  bg-[rgba(255,255,255,1)] mt-5 border border-solid border-[#f3f3f3] rounded-[5px]">
                            <div className="px-8 py-8">
                                <img src={image_url} alt="newsImage" />
                            </div>
                            <h1 className=" text-[#403f3f] text-2xl font-bold px-8">{title}</h1>
                            <p className="px-8 mt-2 text-[#706f6f]">{details}</p>
                            <Link to={`/category/${category_id}`} className="bg-[#d72050] my-8 mx-8 w-[350px] h-12 flex justify-center items-center gap-1">
                                <FaArrowLeftLong className="text-white" />
                                <p className="text-white text-xl font-medium">All news in this category</p>
                            </Link>
                        </div>

                    </section>
                    <aside className="col-span-3">
                        <RightSideBar></RightSideBar>
                    </aside>
                </div>
            </main>
        </div>
    );
}

export default NewDetails;