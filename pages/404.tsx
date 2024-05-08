import Layout  from "@/components/Layout";
export default function Custom404() {
  return (

    <Layout> 
      <main className="layout">
        <div className="layout__content">
          <h1 style = {{display:'grid', placeContent:'center'}}> Page Not Found</h1>
          <a href="/">Go to home  </a>
        </div>
      </main>
    </Layout> 
  );
}
