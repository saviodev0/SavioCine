import { useParams } from "react-router-dom";

function Filme() {
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <h1>Detalhes do Filme</h1>
      <p>ID do filme: <strong>{id}</strong></p>
      <p>A página de detalhes ainda está em construção.</p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "760px",
    margin: "40px auto",
    padding: "24px",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
  },
};

export default Filme;
