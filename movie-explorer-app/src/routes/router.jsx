import { createBrowserRouter } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import MovieDetail from "../components/MovieDetail";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MovieCard />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
    ],
  },
]);
export default router;
