import { Link } from "react-router-dom";
import trips from "../data/trips";
import "./travelCards.css";

export default function TravelCards() {
  return (
    <div>
      <h1>Viaggi attuali</h1>
      <div>
        {trips.map((trip) => (
          <Link key={trip.id} to={trip.path}>
            <div className="travel-card-wrapper">
              <img src={trip.image} alt={trip.name} />
              <h2>{trip.name}</h2>
              <p>{trip.duration}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
