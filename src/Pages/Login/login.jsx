import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

function Login() {
  const [nome, setNome] = useState("");
  const { usuario, login } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!nome.trim()) return;

    login(nome.trim());
    navigate("/");
  }

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      {usuario ? (
        <p>Você já está logado como <strong>{usuario.nome}</strong>.</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              style={styles.input}
              placeholder="Digite seu nome"
            />
          </label>
          <button type="submit" style={styles.button}>
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "420px",
    margin: "40px auto",
    padding: "24px",
    borderRadius: "12px",
    backgroundColor: "#f7f7f7",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  label: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    color: "#222",
  },
  input: {
    marginTop: "8px",
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    backgroundColor: "#222",
    color: "#fff",
    border: "none",
    padding: "12px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;