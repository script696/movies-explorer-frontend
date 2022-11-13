import {
  Main,
  Movies,
  SavedMovies,
  Profile,
  Register,
  Login,
  PageNotFound,
} from "../pages";
import { Layout } from "../components";

const PUBLIC_ROUTES = {
  MAIN: {
    id: "main",
    path: "/",
    component: Main,
    layout: Layout,
  },
  SIGNUP: {
    id: "signup",
    path: "/signup",
    component: Register,
    layout: null,
  },
  SIGNIN: {
    id: "signin",
    path: "/signin",
    component: Login,
    layout: null,
  },
  PAGE_NOT_FOUND: {
    id: "pageNotFound",
    path: "*",
    component: PageNotFound,
    layout: null,
  },
};

const AUTH_PROTECTED_ROUTES = {
  MOVIES: {
    id: "movies",
    path: "/movies",
    component: Movies,
    layout: Layout,
  },
  SAVED_MOVIES: {
    id: "savedMovies",
    path: "/saved-movies",
    component: SavedMovies,
    layout: Layout,
  },
  PROFILE: {
    id: "profile",
    path: "/profile",
    component: Profile,
    layout: Layout,
  },
};

const authProtectedRoutes = Object.values(AUTH_PROTECTED_ROUTES);
const publicRoutes = Object.values(PUBLIC_ROUTES);

export {
  authProtectedRoutes,
  publicRoutes,
  PUBLIC_ROUTES,
  AUTH_PROTECTED_ROUTES,
};
