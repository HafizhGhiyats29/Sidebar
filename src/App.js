import { Route, Routes } from "react-router-dom";
import LayerList from "./features/tasks/LayerList";
import Sidebar from "./components/Sidebar";
import EdiLayer from "./features/tasks/EditLayer";
import AddLayer from "./features/tasks/AddLayer";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/" element={<LayerList />} />
        <Route path="/create-task" element={<AddLayer />} />
        <Route path="/edit-task/:id" element={<EdiLayer />} />
      </Routes>
    </>
  );
};

export default App;
