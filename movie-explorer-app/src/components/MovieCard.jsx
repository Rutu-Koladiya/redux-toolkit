/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import axios from "axios";
import { useNavigate, useOutletContext } from "react-router-dom";
import useInfiniteScroll from "../hook/useInfiniteScroll";
import GenreDrawer from "./GenereDrawer";

function MovieCard() {
  const { searchQuery } = useOutletContext();
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const lastMovieRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: () => setPage((prev) => prev + 1),
  });

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [searchQuery, selectedGenres]);

  // Fetch movies from TMDB
  const fetchMovies = async (curentPage, genres = []) => {
    try {
      setLoading(true);
      let url;

      const genreParam =
        genres.length > 0 ? `&with_genres=${genres.join(",")}` : "";

      if (searchQuery) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}&page=${curentPage}`;
      } else {
        url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${curentPage}${genreParam}`;
      }
      const response = await axios.get(url);
      const newMovies = response.data.results;
      // console.log(newMovies.data.results);

      setMovies((prevMovies) =>
        curentPage === 1 ? newMovies : [...prevMovies, ...newMovies]
      );

      setHasMore(newMovies.length > 0);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(page, selectedGenres);
  }, [page, searchQuery, selectedGenres]);

  const toggleDescription = (id) => {
    setExpandedDescriptions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div>
      <Button
        onClick={() => setDrawerOpen(true)}
        startIcon={<FilterAltIcon />}
        sx={{
          mt: 2,
          ml: 2,
          textAlign: "center",
        }}
      >
        Filter
      </Button>
      <GenreDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onApply={(genres) => {
          setSelectedGenres(genres);
          setPage(1);
          setMovies([]);
        }}
      />

      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gap: 2,
          p: 3,
        }}
      >
        {movies?.map((movie, index) => {
          const isLast = index === movies.length - 1;

          const invalid =
            movie.title.length < 2 ||
            movie.release_date === "" ||
            !movie.release_date;

          if (invalid) return null;

          return (
            <Card key={movie.id} ref={isLast ? lastMovieRef : null}>
              <CardActionArea
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
                  onClick={() => navigate(`/movie/${movie.id}`)}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    alt={movie?.title}
                    loading="lazy"
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
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
                    >
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
                      {expandedDescriptions[movie.id]
                        ? "Read less"
                        : "Read more"}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Box>
      {loading && (
        <Box display="flex" justifyContent="center" mt={3}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
}

export default MovieCard;
