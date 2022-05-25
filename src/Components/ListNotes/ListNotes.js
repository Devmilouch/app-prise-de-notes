import "./ListNotes.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const ListNotes = (props) => {
    const { notes } = useSelector(state => state.notesReducer);

    return (
        <div className="container-content">
            <h2>{notes.length === 0 ? "Entrez votre première note" : "Vos notes"}</h2>
            {
                notes.length === 0 && 
                <div style={{textAlign: "center"}}>
                    <Link to="/edit"style={{textDecoration: "none"}}>
                        <button style={{display: "inline-block", margin: "60px auto"}}>Entrer une note</button>
                    </Link>
                </div>
            }
            <ul className="notes-list-card">
                {notes &&
                    notes.map(note => (
                        <Link key={note.id} to={`/displayNote/${note.title.split(" ").join("-")}`}>
                            <li>
                                <h2>{note.title}</h2>
                                <p>{note.subtitle}</p>
                            </li>
                        </Link>
                    ))
                }
            </ul>
        </div>
    );
};

export default ListNotes;