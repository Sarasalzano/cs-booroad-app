import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/TravelCards.css";

export default function TravelCards({ trips, onAddTrip, onDeleteTrip }) {
  const handleDelete = (e, id) => {
    e.preventDefault();
    e.stopPropagation();

    onDeleteTrip(id);

    toast.info("Viaggio eliminato!", {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: true,
      theme: "dark",
    });
  };

  return (
    // <div className="page">
    <>
      <h2 className="section-title">Viaggi Organizzati</h2>

      <div className="list">
        {trips.map((trip) => (
          <div key={trip.id} className="travel-card-wrapper">
            <Link to={`/viaggi/${trip.id}`} className="travel-card-link">
              <div className="travel-card">
                {trip.image && <img src={trip.image} alt={trip.name} />}
                <div className="content">
                  <h2>{trip.name}</h2>
                  <div className="travel-meta">
                    <span>{trip.duration}</span>
                    <span>{trip.travellers?.length ?? 0} Partecipanti</span>
                  </div>
                </div>
              </div>
            </Link>

            <button
              type="button"
              className="delete-btn"
              onClick={(e) => handleDelete(e, trip.id)}
            >
              🗑️
            </button>
          </div>
        ))}
      </div>

      <div className="add-trip-wrap">
        <button className="btn-primary-dark" onClick={onAddTrip}>
          + Aggiungi Viaggio
        </button>
      </div>
    </>
    // </div >
  );
}
