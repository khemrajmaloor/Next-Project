import Layout from "@/components/Layout";

export default function service() {

    return(
        <Layout>
           <main className="home">
                <div className="home__content">
                <h2>Service page Sidebar Example</h2>
                <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
                <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
                <h3>Resize the browser window to see the effect.</h3>
                </div>
            </main>
        </Layout>
    );
}