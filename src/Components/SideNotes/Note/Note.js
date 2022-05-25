import "./Note.css";
import delIcon from "./remove.svg";
import editIcon from "./edit.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";



const Note = (props) => {
    const dispatch = useDispatch();

    const handleDeleteNote = () => {
        dispatch({
            type: "DELETENOTE",
            payload: props.id
        });

        dispatch({
            type: "RESETNOTE",
        });
    }

    const modifyNote = () => {
        props.handleToggleNav();

        dispatch({
            type: "VISUALIZENOTE",
            payload: props
        })
    }

    return (
        <li className="txt-note-prev">
            <Link to={`/displayNote/${props.title.split(" ").join("-")}`}>
                <div className="bloc-note-left" onClick={props.handleToggleNav}>
                    <p>{props.title}</p>
                    <p>{props.subtitle}</p>
                </div>
            </Link>
            <div className="bloc-note-right">
                <button onClick={handleDeleteNote}>
                    <img src={delIcon} alt="icône supprimer" />
                </button>
                <Link to="/edit">
                    <button onClick={modifyNote}>
                        <img src={editIcon} alt="icône éditer" />
                    </button>
                </Link>
            </div>
        </li>
    );
};

export default Note;