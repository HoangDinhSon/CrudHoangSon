import {Program, Search } from "./components/Programs";
import {TableData} from "./components/Programs/TableDatas";
import {Footer} from "./components/Programs/Footer";

function App() {
  return <div className="wrap">
    <Program/>
    <Search/>
    <TableData/>
    <Footer/>
  </div>;
}

export default App;
