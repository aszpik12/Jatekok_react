import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Jatekok from "./pages/Jatekok";
import Layout from "./Layout";
import NoPage from "./pages/NoPage";
import LightOnApp from "./pages/LightOutApp";
import TicTacToeApp from "./pages/TicTacToeApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Jatekok />} />
          <Route path="tictactoe" element={<TicTacToeApp />} />
          <Route path="lightson" element={<LightOnApp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
