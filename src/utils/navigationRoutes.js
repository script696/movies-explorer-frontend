// const PUBLIC_ROUTES = {
//     LOGIN: {
//         id: "login",
//         path: "/login",
//         component: Login,
//     },
// };

import { Main, Movies, SavedMovies } from "../pages";

const AUTH_PROTECTED_ROUTES = {
  HOME: {
    id: "home",
    path: "/",
    component: Main,
  },
  MOVIES: {
    id: "movies",
    path: "/movies",
    component: Movies,
  },
  SAVED_MOVIES: {
    id: "savedMovies",
    path: "/saved-movies",
    component: SavedMovies,
  },
};

const authProtectedRoutes = Object.values(AUTH_PROTECTED_ROUTES);

export { authProtectedRoutes };
