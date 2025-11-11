import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AddTripOverlay.css";

export default function AddTripOverlay({ onClose, onAdd }) {
    const [isClosing, setIsClosing] = useState(false);
    const [newTrip, setNewTrip] = useState({
        name: "",
        duration: "",
        image: "",
        travellers: [],
    });

    // 🔹 Validazione URL semplice
    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 🔸 Validazione campi
        if (!newTrip.name.trim() || !newTrip.duration.trim()) {
            toast.error("Compila nome e durata del viaggio!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: false,
                theme: "dark",
            });
            return;
        }

        if (newTrip.image && !isValidUrl(newTrip.image)) {
            toast.error("L'URL dell'immagine non è valido!", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                theme: "dark",
            });
            return;
        }

        // 🔹 Crea nuovo viaggio
        const createdTrip = {
            id: Date.now(),
            ...newTrip,
        };

        // 🔹 Salva anche in localStorage
        try {
            const existingTrips = JSON.parse(localStorage.getItem("trips")) || [];
            const updatedTrips = [...existingTrips, createdTrip];
            localStorage.setItem("trips", JSON.stringify(updatedTrips));
        } catch (err) {
            console.error("❌ Errore nel salvataggio su localStorage:", err);
        }

        // 🔹 Aggiorna stato globale e mostra toast
        onAdd(createdTrip);
        toast.success("Viaggio aggiunto con successo!", {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            theme: "dark",
        });

        // 🔹 Reset form e chiudi
        setNewTrip({
            name: "",
            duration: "",
            image: "",
            travellers: [],
        });

        handleClose();
    };

    // 🔹 Chiusura con animazione
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
                        <h2>Nuovo Viaggio</h2>
                        <button className="close-btn" onClick={handleClose}>
                            ✕
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="add-form">
                        <input
                            type="text"
                            placeholder="Nome del viaggio"
                            value={newTrip.name}
                            onChange={(e) =>
                                setNewTrip({ ...newTrip, name: e.target.value })
                            }
                        />

                        <input
                            type="text"
                            placeholder="Durata"
                            value={newTrip.duration}
                            onChange={(e) =>
                                setNewTrip({ ...newTrip, duration: e.target.value })
                            }
                        />

                        <input
                            type="text"
                            placeholder="URL Immagine (facoltativo)"
                            value={newTrip.image}
                            onChange={(e) =>
                                setNewTrip({ ...newTrip, image: e.target.value })
                            }
                        />

                        <button type="submit" className="confirm-btn">
                            Aggiungi Viaggio
                        </button>
                    </form>
                </div>
            </div>

            {/* 🔹 Toast container interno */}
            <ToastContainer
                position="bottom-center"
                autoClose={2000}
                hideProgressBar
                closeOnClick
                pauseOnHover={false}
                theme="dark"
            />
        </>
    );
}
