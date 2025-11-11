import { useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import defaultTrips from "../data/trips";
import SearchBar from "../components/SearchBar";
import AddTravellerOverlay from "../components/AddTravellerOverlay";
import "../styles/DetailPage.css";

export default function DetailPage({ dynamicTrips = [] }) {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  const allTrips = [...defaultTrips, ...dynamicTrips];

  const trip = allTrips.find((t) => t.id === Number(id));

  const [travellers, setTravellers] = useState(trip?.travellers || []);

  if (!trip) {
    return (
      <div className="detail-page">
        <h2>Viaggio non trovato </h2>
        <p style={{ opacity: 0.6 }}>
          Potrebbe essere stato appena aggiunto o non salvato correttamente.
        </p>
      </div>
    );
  }

  // 🔹 Aggiungi un nuovo partecipante
  const handleAddTraveller = (newTraveller) => {
    setTravellers((prev) => [...prev, newTraveller]);
  };

  // 🔹 Filtra partecipanti in base alla ricerca
  const filteredTravellers = travellers.filter((t) =>
    `${t.nome} ${t.cognome}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="detail-page">
      <div className="detail-header">
        <h2>{trip.name}</h2>
        <p className="duration">{trip.duration}</p>
      </div>

      <div className="detail-search">
        <SearchBar
          onSearch={setQuery}
          placeholder="Cerca un partecipante..."
        />
      </div>

      <div className="traveller-list">
        {filteredTravellers.length > 0 ? (
          filteredTravellers.map((t) => (
            <Accordion key={t.id} alwaysOpen>
              <Accordion.Item eventKey="0" className="accordion-item-dark">
                <Accordion.Header>
                  {t.nome} {t.cognome}
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    <strong>Email:</strong> {t.email}
                  </p>
                  <p>
                    <strong>Cellulare:</strong> {t.cellulare}
                  </p>
                  <p>
                    <strong>Codice Fiscale:</strong> {t.codice_fiscale}
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          ))
        ) : (
          <p className="no-results">Nessun partecipante trovato.</p>
        )}

        <div className="add-trip-wrap">
          <button
            className="btn-primary-dark"
            onClick={() => setShowOverlay(true)}
          >
            + Aggiungi Partecipante
          </button>

          {showOverlay && (
            <AddTravellerOverlay
              onClose={() => setShowOverlay(false)}
              onAdd={handleAddTraveller}
            />
          )}
        </div>
      </div>
    </div>
  );
}
