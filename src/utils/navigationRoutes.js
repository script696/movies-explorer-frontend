import {
  Main,
  Movies,
  SavedMovies,
  Profile,
  Register,
  Login,
  PageNotFound,
} from "../pages";
import { Redirect } from "react-router-dom";

const PUBLIC_ROUTES = {
  SIGNUP: {
    id: "signup",
    path: "/signup",
    component: Register,
  },
  LOGIN: {
    id: "login",
    path: "/signin",
    component: Login,
  },
  PAGE_NOT_FOUND: {
    id: "pageNotFound",
    path: "*",
    component: PageNotFound,
  },
};

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
  PROFILE: {
    id: "profile",
    path: "/profile",
    component: Profile,
  },
};

const authProtectedRoutes = Object.values(AUTH_PROTECTED_ROUTES);
const publicRoutes = Object.values(PUBLIC_ROUTES);

export { authProtectedRoutes, publicRoutes, PUBLIC_ROUTES };
