import Layout from "@/components/Layout";
import { BiColor } from "react-icons/bi";
export default function Custom404() {
  const layoutStyle = {
    display: 'grid',
    placeContent: 'center',
  }
  const rth = {
    color:'blue',
  }
  return (

    <Layout>
      <main className="layout" style={layoutStyle}>
        <div className="layout__content" >
          <h1> Page Not Found</h1>
          <a href="/"  style={rth} >Go to home  </a>
        </div>
      </main>
    </Layout>
  );
}
