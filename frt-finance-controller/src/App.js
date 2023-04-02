import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Expends from "./components/Expends";
import RegistrationPurchase from "./components/RegistrationPurchases";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<RegistrationPurchase />} />
        <Route path="/expends" element={<Expends />} />
      </Routes>
    </>
  );
}

export default App;
