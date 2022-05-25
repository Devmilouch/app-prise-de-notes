


const INITIAL_STATE = {
  notes: !localStorage.notes ? [] : JSON.parse(localStorage.getItem("notes"))
};

export default function notesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADDNOTE": {

      const newNotesArr = [...state.notes];
      newNotesArr.push(action.payload);
      localStorage.setItem("notes", JSON.stringify(newNotesArr));
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
      };

    }
    break;
    case "UPDATENOTE": {

      const newNotesArr = [...state.notes];
      const newObj = action.payload;
      const index = newNotesArr.findIndex(note => note.id === newObj.id);
      newNotesArr.splice(index, 1, newObj);
      localStorage.setItem("notes", JSON.stringify(newNotesArr));
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
      };

    }
    break;
    case "DELETENOTE": {

      const newNotesArr = [...state.notes].filter(note => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(newNotesArr));
      return {
        notes: JSON.parse(localStorage.getItem("notes"))
      };

    }
    break;
    default:
    break;
  }

  return state;
}
