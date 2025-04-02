import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './main.css';
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Predict from "./pages/Predict/Predict";
import Trends from "./pages/Trends/Trends";

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="predict" element={<Predict />} />
          <Route path="trends" element={<Trends />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);