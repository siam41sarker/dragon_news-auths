import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import antique1 from '../../assets/imgi_3_treasure-1-Baqn0WcZ.jpg';
import antique2 from '../../assets/imgi_4_manuscript-1--5fqYJPh.jpg';
import antique3 from '../../assets/imgi_5_artifact-1-B9txUewH.jpg';
const RightSideBar = () => {
    return (
        <div>
            <h2 className="text-[#403f3f] font-semibold text-xl">Login With</h2>
            <div className="join flex mt-5 join-vertical gap-2">
                <button className="btn join-item bg-white border border-[#585757)] radius text-[#403F3F] capitalize"><FaGoogle />
                    login with google</button>
                <button className="btn join-item bg-white border border-[#585757)]  text-[#403F3F] capitalize radius"><FaGithub />
                    login with gitHub
                </button>
            </div>
            <div>
                <h2 className="text-[#403f3f] font-semibold text-xl mt-[30px]">Find Us On</h2>
                <div className="join flex   join-vertical mt-5">
                    <button className="btn flex justify-start join-item bg-white"><CiFacebook /> Facebook</button>
                    <button className="btn flex justify-start join-item bg-white"><CiTwitter /> Twitter</button>
                    <button className="btn flex justify-start join-item bg-white"><FaInstagram />Instagram</button>
                </div>
            </div>
            <div className="w-full h-auto bg-[#f3f3f3] mt-[30px]">
                <h2 className="text-[#403f3f] font-semibold text-xl pt-4 pl-8">Q-Zone</h2>
                <div className="flex flex-col items-center justify-center">
                    <div className="px-4 py-4 w-11/12">
                        <img className="w-full h-auto" src={antique1} alt="antique1" />
                        <h3 className="text-[#403f3f] font-semibold text-base capit mt-3 text-center">Tressure coin</h3>
                    </div>
                    <div className="px-4 py-4 w-11/12">
                        <img className="w-full h-auto" src={antique2} alt="antique2" />
                        <h3 className="text-[#403f3f] font-semibold text-base capit mt-3 text-center">Antique Map</h3>
                    </div>
                    <div className="px-4 py-4 w-11/12">
                        <img className="w-full h-auto" src={antique3} alt="antiqu31" />
                        <h3 className="text-[#403f3f] font-semibold text-base capit mt-3 text-center">Treasure-Trove</h3>
                    </div>
                </div>
            </div>
            <div className="w-full h-[580px] mt-[30px] mb-5 bg-[url('../src/assets/bg.png')] bg-cover bg-center flex flex-col gap-8 items-center justify-center">
                <h1 className="text-white text-5xl font-extrabold text-center">Create an Amazing Newspaper</h1>
                <p className="text-white text-2xl font-normal text-center px-8">Discover thousands of options, easy to customize layouts, one-click to import demoand much more.</p>
                <button className="bg-[#d72050] flex justify-center items-center w-44 h-16 text-white font-semibold text-2xl capitalize">learn more</button>
            </div>
        </div>
    );
}

export default RightSideBar;