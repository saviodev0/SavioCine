import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../Contexts/ThemeContexts";
import { AuthContext } from "../Contexts/AuthContext";

function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);
  const { usuario, logout } = useContext(AuthContext);

  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>🎬 MeuCineClube</h1>

      <nav style={styles.nav}>
        <Link style={styles.link} to="/">
          Home
        </Link>

        <Link style={styles.link} to="/login">
          Login
        </Link>

        <Link style={styles.link} to="/favoritos">
          Favoritos
        </Link>
      </nav>

      <div style={styles.authArea}>
        {usuario ? (
          <>
            <span style={styles.usuario}>Olá, {usuario.nome}</span>
            <button style={styles.logoutButton} onClick={logout}>
              Sair
            </button>
          </>
        ) : null}

        <button style={styles.botao} onClick={alternarTema}>
          {tema === "claro" ? "🌙 Escuro" : "☀️ Claro"}
        </button>
      </div>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: "#222",
    color: "white",
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    fontSize: "28px",
    fontWeight: "bold",
  },

  nav: {
    display: "flex",
    gap: "20px",
  },

  authArea: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },

  usuario: {
    color: "#ffffff",
    fontWeight: "bold",
  },

  logoutButton: {
    backgroundColor: "transparent",
    border: "1px solid #ffcc00",
    color: "#ffcc00",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  },

  botao: {
    backgroundColor: "#ffcc00",
    border: "none",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Header;