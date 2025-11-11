import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./styles/App.css";
import Homepage from "./pages/Homepage";
import Layout from "./Layouts/Layout";
import DetailPage from "./pages/DetailPage";
import defaultTrips from "./data/trips";

export default function App() {
  const [trips, setTrips] = useState(() => {
    const saved = localStorage.getItem("trips");
    return saved ? JSON.parse(saved) : defaultTrips;
  });
  
  useEffect(() => {
    localStorage.setItem("trips", JSON.stringify(trips));
  }, [trips]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={<Homepage trips={trips} setTrips={setTrips} />}
          />
          <Route
            path="/viaggi/:id"
            element={<DetailPage dynamicTrips={trips} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
