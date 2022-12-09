import { Layout } from "../components";
import {
  Login,
  Main,
  Movies,
  PageNotFound,
  Profile,
  Register,
  SavedMovies,
} from "../pages";
import { ROUTES } from "./constants/routes";

const PUBLIC_ROUTES = {
  MAIN: {
    id: "main",
    path: ROUTES.MAIN,
    component: Main,
    layout: Layout,
  },
  SIGNUP: {
    id: "signup",
    path: ROUTES.SIGNUP,
    component: Register,
    layout: null,
  },
  SIGNIN: {
    id: "signin",
    path: ROUTES.SIGNIN,
    component: Login,
    layout: null,
  },
  PAGE_NOT_FOUND: {
    id: ROUTES.PAGE_NOT_FOUND,
    path: "*",
    component: PageNotFound,
    layout: null,
  },
};

const AUTH_PROTECTED_ROUTES = {
  MOVIES: {
    id: "movies",
    path: ROUTES.MOVIES,
    component: Movies,
    layout: Layout,
  },
  SAVED_MOVIES: {
    id: "savedMovies",
    path: ROUTES.SAVED_MOVIES,
    component: SavedMovies,
    layout: Layout,
  },
  PROFILE: {
    id: "profile",
    path: ROUTES.PROFILE,
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
