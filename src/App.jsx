import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Componentes/Header";

import { ThemeProvider } from "./Contexts/ThemeContexts";
import { AuthProvider } from "./Contexts/AuthContext";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/login";
import Favoritos from "./Pages/Favoritos/Favoritos";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;