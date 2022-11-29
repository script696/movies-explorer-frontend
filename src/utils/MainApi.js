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

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  async _checkRes(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(`Ошибка: ${err.message}`);
    }
    return res.json();
  }

  getUserInfo() {
    return fetch(`${this._id}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._getToken()}`,
      },
    }).then((res) => this._getResponseData(res));
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
