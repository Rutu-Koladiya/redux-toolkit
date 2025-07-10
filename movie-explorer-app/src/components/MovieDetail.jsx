// src/pages/MovieDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Typography,
  CircularProgress,
  Button,
  Container,
} from "@mui/material";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        console.log(response);

        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (!movie) {
    return <Typography textAlign="center">Movie not found</Typography>;
  }

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
        <Box sx={{ width: { xs: "100%", md: "40%" } }}>
          <img
            src={
              movie?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : "https://via.placeholder.com/500x750?text=No+Image"
            }
            alt={movie?.title}
            style={{ width: "100%", borderRadius: 12 }}
          />
        </Box>

        <Box>
          <Typography variant="h4" gutterBottom>
            {movie?.title}
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            Genres:{" "}
            {movie?.genres?.map((genre) => genre.name).join(", ") || "N/A"}
          </Typography>

          <Typography variant="body1" paragraph>
            {movie?.overview}
          </Typography>

          <Typography variant="subtitle1" gutterBottom>
            ⭐ {movie?.vote_average?.toFixed(1)} | 📅{" "}
            {movie?.release_date || "Unknown"}
          </Typography>

          <Typography variant="body2" color="text.secondary" gutterBottom>
            Runtime: {movie?.runtime} minutes
          </Typography>

          <Button variant="contained" sx={{ mt: 2 }}>
            Watch Trailer
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default MovieDetail;
