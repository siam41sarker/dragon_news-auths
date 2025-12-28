import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideBar = () =>{
    const [category,setCategory] = useState([]);
    useEffect(()=>
        {
            fetch('https://openapi.programming-hero.com/api/news/categories')
            .then(response=>response.json())
            .then(data=>setCategory(data.data.news_category))
        },[])
    return (
        <div>
            <h2 className="text-[#403f3f] font-semibold text-xl">All Category</h2>
            <div className="flex flex-col gap-2 mt-5">
                {
                    category.map(each=><NavLink to={`/category/${each.category_id}`} key={each.category_id} className="btn bg-base-100 border-none mr-6">
                            {each.category_name}
                    </NavLink>)
                }
            </div>
        </div>
    );
}

export default LeftSideBar;