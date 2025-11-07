import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./pages/Homepage";
import Layout from "./Layouts/Layout";
import DetailPage from "./pages/DetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
        <Route path="/" element={<Homepage />} />
        <Route path="/viaggi/:id" element={<DetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
   
