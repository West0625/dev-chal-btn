import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/page/home/Home";
import Colors from "./components/page/colors/Colors";
import Typography from "./components/page/typography/Typography";
import Buttons from "./components/page/buttons/Buttons";
import Spaces from "./components/page/spaces/Spaces";
import Inputs from "./components/page/inputs/Inputs";
import Grid from "./components/page/grid/Grid";
import NotFound from "./components/page/notfound/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/colors" element={<Colors />}></Route>
          <Route path="/typography" element={<Typography />}></Route>
          <Route path="/spaces" element={<Spaces />}></Route>
          <Route path="/buttons" element={<Buttons />}></Route>
          <Route path="/inputs" element={<Inputs />}></Route>
          <Route path="/grid" element={<Grid />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
