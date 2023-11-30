import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./_assets/scss/main.scss";

// PAGES
import User from "./pages/User";
import UserConfirmation from "./pages/UserConfirmation"; // Importar a página de confirmação

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<User />} />
          <Route path="/confirmation" element={<UserConfirmation />} />
          {/* Adicionar outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
