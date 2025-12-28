import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import classes from '../../assets/class.png';
import swimming from '../../assets/swimming.png';
import playground from '../../assets/playground.png';
const LeftSideBar = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(response => response.json())
            .then(data => setCategory(data.data.news_category))
    }, [])
    return (
        <div>
            <h2 className="text-[#403f3f] font-semibold text-xl">All Category</h2>
            <div className="flex flex-col gap-2 mt-5">
                {
                    category.map(each => <NavLink to={`/category/${each.category_id}`} key={each.category_id} className="btn bg-base-100 border-none mr-6">
                        {each.category_name}
                    </NavLink>)
                }
            </div>
            <div className="mr-6 h-auto bg-[#f3f3f3] mt-[30px]">
                <h2 className="text-[#403f3f] font-semibold text-xl pt-4 pl-8">Q-Zone</h2>
                <div className="flex flex-col items-center justify-center">
                    <div className="px-4 py-4 w-11/12">
                        <img className="w-full h-auto" src={classes} alt="classes" />
                        <h3 className="text-[#403f3f] font-semibold text-base capit mt-3 text-center">Class</h3>
                    </div>
                    <div className="px-4 py-4 w-11/12">
                        <img className="w-full h-auto" src={swimming} alt="swimming" />
                        <h3 className="text-[#403f3f] font-semibold text-base capit mt-3 text-center">Swimming</h3>
                    </div>
                    <div className="px-4 py-4 w-11/12">
                        <img className="w-full h-auto" src={playground} alt="playground" />
                        <h3 className="text-[#403f3f] font-semibold text-base capit mt-3 text-center">Playground</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSideBar;