import { Footer } from "../components/Programs/Footer";
import {listProductionDummyData}  from "../../dummyData";

function Home() {
  const pageNumber = (page:number)=>{
    console.log("page: >>",page);
    
  }
  const rowPerPage = (rowPer:number)=>{
    console.log("rowPer>>>",rowPer);
    
  }
  const handlePagination = (payload: any) => {
    console.log("payload>>>",payload);
  };
  return (
    <div>
        <Footer
          rowPerPage={rowPerPage}
          pageNumber={pageNumber}
          listProducts={listProduction}
          handlePagination={handlePagination}
        />
    </div>
  );
}

export default Home;
