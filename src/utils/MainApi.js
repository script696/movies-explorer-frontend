const BASE_URL = "http://localhost:5000";
const test = process.env.REACT_APP_BACKEND_URL;

class Api {
  constructor({ id, headers }) {
    this._id = id;
    this._headers = headers;
  }

  _getToken() {
    return localStorage.getItem("jwt");
  }

  async _checkRes(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async getSavedMovies(movie) {
    const res = await fetch(`${this._id}/movies`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._getToken()}`,
      },
      body: JSON.stringify(movie),
    });

    const resParsed = await this._checkRes(res);
    return resParsed;
  }

  async createMovie(movie) {
    const res = await fetch(`${this._id}/movies`, {
      method: "POST",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._getToken()}`,
      },
      body: JSON.stringify(movie),
    });
    const resParsed = await this._checkRes(res);
    return resParsed;
  }

  async deleteMovie(id) {
    const res = await fetch(`${this._id}/movies/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._getToken()}`,
      },
    });

    const resParsed = await this._checkRes(res);
    return resParsed;
  }

  async getUserInfo() {
    const res = await fetch(`${this._id}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._getToken()}`,
      },
    });

    const resParsed = await this._checkRes(res);
    return resParsed;
  }

  async updateUserInfo(name, email) {
    const res = await fetch(`${this._id}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._getToken()}`,
      },
      body: JSON.stringify({ name, email }),
    });

    const resParsed = await this._checkRes(res);
    return resParsed;
  }

  async register(name, email, password) {
    const res = await fetch(`${this._id}/signup`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const resParsed = await this._checkRes(res);
    return resParsed;
  }

  async authorize(email, password) {
    const res = await fetch(`${this._id}/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password, email }),
    });

    const resParsed = await this._checkRes(res);
    return resParsed;
  }
}

const mainApi = new Api({
  id: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default mainApi;
