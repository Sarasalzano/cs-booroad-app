import { BrowserRouter, Routes, Route } from "react-router-dom";
import TravelCards from "./component/TravelCards";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TravelCards />} />
        <Route path="/viaggi/roma" element={<h1 className="text-center mt-5"></h1>} />
        <Route path="/viaggi/parigi" element={<h1 className="text-center mt-5"></h1>} />
        <Route path="/viaggi/tokyo" element={<h1 className="text-center mt-5"></h1>} />
      </Routes>
    </BrowserRouter>
  );
}
   
