import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import LeftSideBar from "../../Components/LeftSideBar/LeftSideBar";
import Navigation from "../../Components/Navigation/Navigation";
import RightSideBar from "../../Components/RightSideBar/RightSideBar";
const HomeLayout = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
            </header>
            <nav>
                <Navigation></Navigation>
            </nav>
            <main className="w-10/12 mt-20 mx-auto grid md:grid-cols-12">
                <aside className="col-span-3">
                        <LeftSideBar></LeftSideBar>
                </aside>
                <section className="col-span-6"><Outlet></Outlet></section>
                <aside className="col-span-3"><RightSideBar></RightSideBar></aside>
            </main>
        </div>
    )
}
export default HomeLayout;