import "./assets/css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./components/page/Home";
import Colors from "./components/page/Colors";
import Typography from "./components/page/Typography";
import Buttons from "./components/page/Buttons";
import Spaces from "./components/page/Spaces";
import Inputs from "./components/page/input/Inputs";
import Grid from "./components/page/Grid";
import NotFound from "./components/page/NotFound";

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
