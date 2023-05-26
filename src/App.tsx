import Home from "./Page/Home";
import Program from "./Page/Program";
import LayoutProgram from "./Layout/LayoutProgram";
import LayoutHome from "./Layout/LayoutHome";
import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="program" element={<LayoutHome>{<Home/>}</LayoutHome>}></Route>
          <Route
            path="/"
            element={<LayoutProgram>{<Program/>}</LayoutProgram>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
