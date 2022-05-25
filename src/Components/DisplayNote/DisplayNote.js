import { useParams } from "react-router-dom";
import "./DisplayNote.css";
import { useSelector } from "react-redux";



const DisplayNote = (props) => {
    const { id } = useParams();

    const { notes } = useSelector(state => state.notesReducer);

    const indexArticle = notes.findIndex(note => note.title.split(" ").join("-") === id);

    return (
        <div className="display-txt-zone">
            <h2 className="title-display">
                {notes[indexArticle] ? `${notes[indexArticle].title}` : ""}
            </h2>
            <span className="subtitle-display">
                {notes[indexArticle] ? `${notes[indexArticle].subtitle}` : ""}
            </span>
            <p className="txt-display">
                {notes[indexArticle] ? `${notes[indexArticle].body}` : ""}
            </p>
        </div>
    );
};

export default DisplayNote;