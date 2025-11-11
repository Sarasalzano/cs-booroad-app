import { useState } from "react";
import TravelCards from "../components/TravelCards";
import AddTripOverlay from "../components/AddTripOverlay";

export default function Homepage({ trips, setTrips }) {
  const [showAddTrip, setShowAddTrip] = useState(false);

  const handleAddTrip = (newTrip) => {
    setTrips((prevTrips) => {
      const updated = [...prevTrips, newTrip];
      localStorage.setItem("trips", JSON.stringify(updated));
      return updated;
    });
    setShowAddTrip(false);
  };

  const handleDeleteTrip = (id) => {
    setTrips((prevTrips) => {
      const updated = prevTrips.filter((trip) => trip.id !== id);
      localStorage.setItem("trips", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="page">

      <h1 className="header-title">Benvenuto, </h1>
      
      <TravelCards
        trips={trips}
        onAddTrip={() => setShowAddTrip(true)}
        onDeleteTrip={handleDeleteTrip}
      />

      {showAddTrip && (
        <AddTripOverlay
          onClose={() => setShowAddTrip(false)}
          onAdd={handleAddTrip}
        />
      )}
    </div>
  );
}

