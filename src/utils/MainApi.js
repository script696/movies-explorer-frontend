const BASE_URL = "http://localhost:5000";
//https://api.script696.students.nomoredomains.icu
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
