/* eslint-disable react-hooks/exhaustive-deps */
import {
  Drawer,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

const GenreDrawer = ({ open, onClose, onApply }) => {
  const [genres, setGenres] = useState([]);
  const [selected, setSelected] = useState([]);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
        );
        setGenres(res.data.genres);
      } catch (err) {
        console.error("Failed to fetch genres", err);
      }
    };

    fetchGenres();
  }, []);

  const handleToggle = (genreId) => {
    setSelected((prev) =>
      prev.includes(genreId)
        ? prev.filter((id) => id !== genreId)
        : [...prev, genreId]
    );
  };

  const handleApply = () => {
    onApply(selected);
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box width={250} p={2}>
        <Typography variant="h6" gutterBottom>
          Filter by Genres
        </Typography>
        <FormGroup>
          {genres.map((genre) => (
            <FormControlLabel
              key={genre.id}
              control={
                <Checkbox
                  checked={selected.includes(genre.id)}
                  onChange={() => handleToggle(genre.id)}
                />
              }
              label={genre.name}
            />
          ))}
        </FormGroup>
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 2 }}
          onClick={handleApply}
        >
          Apply Filter
        </Button>
      </Box>
    </Drawer>
  );
};

export default GenreDrawer;
