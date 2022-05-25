import { Routes, Route } from "react-router-dom";
import DisplayNote from "./Components/DisplayNote/DisplayNote";
import ListNotes from "./Components/ListNotes/ListNotes";
import MainArea from "./Components/MainArea/MainArea";
import Sidebar from "./Components/Sidebar/Sidebar";



function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<ListNotes />} />
        <Route path="/edit" element={<MainArea />} />
        <Route path="/displayNote/:id" element={<DisplayNote />} />
        <Route path="/configuration" element={<div className="container-content"><h2>Panneau de configuration (non fonctionnel)</h2></div>} />
      </Routes>
    </>
  );
}

export default App;
