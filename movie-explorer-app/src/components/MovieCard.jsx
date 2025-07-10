import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Typography, CircularProgress } from "@mui/material";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";

function MovieCard() {
  const { searchQuery } = useOutletContext();
  const navigate = useNavigate();
  // const [selectedCard, setSelectedCard] = useState(0);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Fetch movies from TMDB
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true)
        const url = searchQuery
          ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
          : `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=1`;

        const response = await axios.get(url);
        console.log(response.data.results);

        setMovies(response.data.results);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
        gap: 2,
        p: 3,
      }}
    >
      {movies?.map((movie, index) => (
        <Card key={movie.id}>
          <CardActionArea
            onClick={() => navigate(`/movie/${movie.id}`)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              // "&[data-active]": {
              //   backgroundColor: "action.selected",
              //   "&:hover": {
              //     backgroundColor: "action.selectedHover",
              //   },
              // },
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "200px",
                overflow: "hidden",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
              }}
            >
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={movie?.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
            <CardContent sx={{ height: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="h5" component="span">
                  {movie?.title}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <Typography variant="caption" color="text.secondary">
                    ⭐
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {(movie?.vote_average || 0).toFixed(1)}
                  </Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary">
                {expandedDescriptions[movie.id]
                  ? movie.overview
                  : `${movie.overview.slice(0, 100)}` +
                    (movie?.overview?.length > 100 ? "..." : "")}
              </Typography>

              {movie.overview?.length > 100 && (
                <Typography
                  variant="caption"
                  sx={{
                    color: "primary.main",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                  onClick={() => toggleDescription(movie.id)}
                >
                  {expandedDescriptions[movie.id] ? "Read less" : "Read more"}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default MovieCard;
