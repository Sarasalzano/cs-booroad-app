import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AddTravellerOverlay.css";

export default function AddTravellerOverlay({ onClose, onAdd }) {
    const [isClosing, setIsClosing] = useState(false);
    const [newTraveller, setNewTraveller] = useState({
        nome: "",
        cognome: "",
        email: "",
        cellulare: "",
        codice_fiscale: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!newTraveller.nome || !newTraveller.cognome || !newTraveller.email) {
            toast.error("Compila tutti i campi obbligatori!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                theme: "dark",
            });
            return;
        }

        onAdd({
            id: Date.now(),
            ...newTraveller,
        });

        toast.success("Partecipante aggiunto!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            theme: "dark",
        });

        setNewTraveller({
            nome: "",
            cognome: "",
            email: "",
            cellulare: "",
            codice_fiscale: "",
        });

        handleClose();
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    return (
        <>
            <div
                className={`overlay ${isClosing ? "fade-out" : ""}`}
                onClick={handleClose}
            >
                <div
                    className={`slide-up-panel ${isClosing ? "slide-down" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="panel-header">
                        <h2>Nuovo Partecipante</h2>
                        <button className="close-btn" onClick={handleClose}>
                            ✕
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="add-form">
                        <input
                            type="text"
                            placeholder="Nome"
                            value={newTraveller.nome}
                            onChange={(e) =>
                                setNewTraveller({ ...newTraveller, nome: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Cognome"
                            value={newTraveller.cognome}
                            onChange={(e) =>
                                setNewTraveller({ ...newTraveller, cognome: e.target.value })
                            }
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={newTraveller.email}
                            onChange={(e) =>
                                setNewTraveller({ ...newTraveller, email: e.target.value })
                            }
                        />
                        <input
                            type="text"
                            placeholder="Cellulare"
                            value={newTraveller.cellulare}
                            onChange={(e) => {
                                const value = e.target.value;
                                if (/^\d*$/.test(value)) {
                                    setNewTraveller({ ...newTraveller, cellulare: value });
                                }
                            }}
                        />
                        <input
                            type="text"
                            placeholder="Codice Fiscale"
                            value={newTraveller.codice_fiscale}
                            onChange={(e) =>
                                setNewTraveller({
                                    ...newTraveller,
                                    codice_fiscale: e.target.value,
                                })
                            }
                        />

                        <button type="submit" className="confirm-btn">
                            Aggiungi
                        </button>
                    </form>
                </div>
            </div>

            <ToastContainer />
        </>
    );
}

