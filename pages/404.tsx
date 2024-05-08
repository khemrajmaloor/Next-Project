import Layout  from "@/components/Layout";
export default function Custom404() {
  return (

    <Layout> 
      <main className="layout" style = {{display:'grid', placeContent:'center'}}>
        <div className="layout__content" >
          <h1> Page Not Found</h1>
          <a href="/" style = {{textDecoration:'underline' , color:'blue'}}>Go to home  </a>
        </div>
      </main>
    </Layout> 
  );
}
