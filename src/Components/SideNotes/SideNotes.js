import { useState, useEffect } from "react";
import "./SideNotes.css";
import { useSelector } from "react-redux";
import Note from "./Note/Note";



const SideNotes = (props) => {
    const { notes } = useSelector(state => state.notesReducer);

    const [ notesList, setNotesList ] = useState(notes);

    useEffect(() => {
        setNotesList(notes);
    }, [notes]);

    const preventForm = e => {
        e.preventDefault();
    }

    const handleFilter = e => {
        const stateCopy = [...notes];

        const filteredArr = stateCopy.filter(note => note.title.toLowerCase().includes(e.target.value.toLowerCase()));

        setNotesList(filteredArr);
    }

    return (
        <div className="notes-display">
            <h2>Mes Notes</h2>
            <form onSubmit={preventForm}>
                <input 
                    type="text" 
                    id="search-notes" 
                    placeholder="Rechercher" 
                    onChange={handleFilter}
                />
            </form>
            <ul className="notes-list">
                {
                    notesList && notesList.map(note => {
                        return <Note 
                        key={note.id} 
                        id={note.id}
                        title={note.title}
                        subtitle={note.subtitle}
                        body={note.body}
                        handleToggleNav={props.handleToggleNav}
                        />
                    })
                }
            </ul>
        </div>
    );
};

export default SideNotes;