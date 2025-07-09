import {Route,Routes} from "react-router";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import NoteDetails from "./pages/NoteDetails";
import toast from "react-hot-toast";
const App=()=>{
  return <div data-theme="synthwave">
    
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/create" element={<CreatePage/>}/>
      <Route path="/note/:id" element={<NoteDetails/>}/>
    </Routes>
  </div>;
};
export default App;