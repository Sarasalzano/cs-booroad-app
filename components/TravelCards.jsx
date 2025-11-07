export default function TravelCards() {
  return (
    <div>
      <h1>Viaggi attuali</h1>
      <div>
        {trips.map((trip) => (
          <Link key={trip.id} to={trip.path}>
            <div>
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