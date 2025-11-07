import { Accordion } from "react-bootstrap";
import travellers from "../../data/travellers";
import SearchBar from "../components/SearchBar";

export default function DetailPage() {
  return (
    <>
    <SearchBar />
    {travellers.map((t) => (
    <Accordion key={t.id} defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{t.nome} {t.cognome}</Accordion.Header>
        <Accordion.Body>
          <span>{t.email}</span> 
          <span>{t.cellulare}</span>
          <span>{t.codice_fiscale}</span> 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    ))}
    </>
  );
}

