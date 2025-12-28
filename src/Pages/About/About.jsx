import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Navigation from "../../Components/Navigation/Navigation";
const About = () => {
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
            <main className="w-10/12 mt-20 mx-auto flex flex-col gap-5">
                <h1 className="text-5xl font-semibold">About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab rem, esse, deserunt ad distinctio eaque explicabo ipsa voluptatibus ipsum sed eligendi reprehenderit dolorum! Dignissimos natus aliquam nobis vitae unde placeat a, fuga suscipit cum adipisci harum laborum enim. Odio voluptatibus id ipsa blanditiis possimus, adipisci sint quae reiciendis ipsam suscipit illo eaque nesciunt perferendis pariatur minima vitae, voluptates, temporibus similique inventore nulla alias dignissimos. Vel quo dicta cupiditate similique magnam enim corrupti quia molestias. Mollitia, reprehenderit eos modi, animi quia sunt accusantium beatae eum vero quidem harum nam molestias deleniti rem officia cumque esse distinctio nostrum. Laudantium dicta quos hic mollitia quas voluptates totam dolores qui fugiat nulla dignissimos fugit quibusdam, aut expedita inventore distinctio quis culpa modi soluta laborum asperiores saepe odit! Laborum error suscipit quos incidunt doloremque iusto ut facilis non ex excepturi magnam minus tenetur, eos et numquam mollitia voluptatem? Consequatur, dicta. Illum recusandae, natus voluptatibus corporis quasi voluptate ex quae voluptas ratione, ad debitis, ut autem in repellat corrupti quas laborum. Ab, quo minima temporibus molestiae ipsa tempora illum aspernatur, dolor quaerat exercitationem quidem est beatae!</p>
            </main>
        </div>
    );
}

export default About;