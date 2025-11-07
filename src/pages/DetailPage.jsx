import { useParams } from "react-router-dom";
import { Accordion } from "react-bootstrap";
import SearchBar from "../components/SearchBar";
import trips from "../data/trips"; // assicurati che il percorso sia corretto

export default function DetailPage() {
  const { id } = useParams(); // cattura l'id dall'URL (es. /viaggi/2)
  const trip = trips.find((t) => t.path === `/viaggi/${id}`); // trova il viaggio corretto

  const travellers = trip?.travellers;

  return (
    <>
      <SearchBar />
      {travellers.map((t) => (
        <Accordion
          key={t.id}
          defaultActiveKey={["0"]}
          alwaysOpen
          className="mb-3"
        >
          <Accordion.Item eventKey="0">
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
      ))}
    </>
  );
}
