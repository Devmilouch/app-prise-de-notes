import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuiv4 } from "uuid";
import "./MainArea.css";



const MainArea = (props) => {
    const dispatch = useDispatch();

    const [ inputsInfo, setInputsInfo ] = useState({
        title: "",
        subtitle: "",
        body: ""
    });

    const selected = useSelector(state => state.selectedReducer.selectedNote);
    
    const [ inputsModify, setInputsModify ] = useState(selected);
    
    useEffect(() => {
        setInputsModify(selected)
    }, [selected]);

    const [ validation, setValidation ] = useState(true);

    const handleForm = e => {
        e.preventDefault();

        if (selected.toggle) {
            if (inputsModify.title.length < 1) {
                setValidation(false);
                return
            };
    
            setValidation(true);

            dispatch({
                type: "UPDATENOTE",
                payload: inputsModify
            });

            dispatch({
                type: "RESETNOTE",
            });
        } else if (!selected.toggle) {
            if (inputsInfo.title.length < 1) {
                setValidation(false);
                return
            };
    
            setValidation(true);
    
            dispatch({
                type: "ADDNOTE",
                payload: {
                    ...inputsInfo,
                    id: uuiv4()
                }
            });
    
            setInputsInfo({
                title: "",
                subtitle: "",
                body: ""
            });
        }
    }

    const updateInputs = e => {
        const actualInp = e.target.getAttribute("id");

        if (selected.toggle) {
            const newObjState = {
                ...inputsModify,
                [actualInp]: e.target.value
            };
            
            setInputsModify(newObjState);
        } else if (!selected.toggle) {
            const newObjState = {
                ...inputsInfo,
                [actualInp]: e.target.value
            };
    
            setInputsInfo(newObjState);
        };
    }

    return (
        <div className="container-content">
            <h2>Votre plume</h2>

            <form onSubmit={handleForm}>
                <label htmlFor="title">Le titre</label>
                <input 
                    type="text" 
                    id ="title" 
                    onChange={updateInputs}
                    value={inputsModify.toggle ? inputsModify.title : inputsInfo.title}
                />
                {
                    !validation && <span className="info-validation">Veuillez renseigner un titre.</span>
                }
                <label htmlFor="title">Sous-titre</label>
                <input 
                    type="text" 
                    id ="subtitle" 
                    onChange={updateInputs}
                    value={inputsModify.toggle ? inputsModify.subtitle : inputsInfo.subtitle}
                />
                <label htmlFor="body">Votre texte</label>
                <textarea 
                    id ="body" 
                    placeholder="Votre texte..."
                    onChange={updateInputs}
                    value={inputsModify.toggle ? inputsModify.body : inputsInfo.body}
                ></textarea>
                <button>Enregistrer</button>
            </form>
        </div>
    );
};

export default MainArea;