import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await fetch("https://api.sampleapis.com/movies/action");
        if (!resposta.ok) {
          throw new Error("Não foi possível buscar os filmes.");
        }

        const dados = await resposta.json();
        setFilmes(dados.slice(0, 12));
      } catch (error) {
        setErro("Falha ao carregar filmes. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    }

    buscarFilmes();
  }, []);

  return (
    <div style={styles.page}>
      <h1>Home</h1>

      {loading ? (
        <p>Carregando filmes...</p>
      ) : erro ? (
        <p>{erro}</p>
      ) : (
        <div style={styles.grid}>
          {filmes.map((filme) => {
            const poster = filme.posterURL || filme.poster || "https://via.placeholder.com/300x450?text=Sem+Poster";
            const filmId = filme.id || filme.imdbID || encodeURIComponent(filme.title);

            return (
              <Link key={filmId} to={`/filme/${filmId}`} style={styles.card}>
                <img src={poster} alt={filme.title} style={styles.poster} />
                <div style={styles.cardInfo}>
                  <strong>{filme.title}</strong>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

const styles = {
  page: {
    maxWidth: "1180px",
    margin: "40px auto",
    padding: "0 20px",
  },
  grid: {
    display: "grid",
    gap: "24px",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginTop: "24px",
  },
  card: {
    display: "block",
    textDecoration: "none",
    color: "#111",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 10px 24px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease",
  },
  poster: {
    width: "100%",
    height: "330px",
    objectFit: "cover",
  },
  cardInfo: {
    padding: "16px",
  },
};

export default Home;