import { Link } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "../Contexts/ThemeContexts";

function Header() {
  const { tema, alternarTema } = useContext(ThemeContext);

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

      <button style={styles.botao} onClick={alternarTema}>
        {tema === "claro" ? "🌙 Escuro" : "☀️ Claro"}
      </button>
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