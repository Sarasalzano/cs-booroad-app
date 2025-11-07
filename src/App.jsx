import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/viaggi/roma" element={<h1 className="text-center mt-5"></h1>} />
        <Route path="/viaggi/parigi" element={<h1 className="text-center mt-5"></h1>} />
        <Route path="/viaggi/tokyo" element={<h1 className="text-center mt-5"></h1>} />
      </Routes>
    </BrowserRouter>
  );
}
   
