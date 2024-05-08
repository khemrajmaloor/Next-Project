import Image from "next/image";
import { Inter } from "next/font/google";
import Layout  from "@/components/Layout";
import { Children } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className="layout">
        <div className="layout__content">
          <h2>Home Sidebar Example</h2>
          <p>This example use media queries to transform the sidebar to a top navigation bar when the screen size is 700px or less.</p>
          <p>We have also added a media query for screens that are 400px or less, which will vertically stack and center the navigation links.</p>
          <h3>Resize the browser window to see the effect.</h3>
        </div>
      </main>
    </Layout>
    
  );
}
