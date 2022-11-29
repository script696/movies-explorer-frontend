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

  getUserInfo() {
    return fetch(`${this._id}/users/me`, {
      headers: {
        ...this._headers,
        Authorization: `Bearer ${this._getToken()}`,
      },
    }).then((res) => this._getResponseData(res));
  }
}

const movieApi = new Api({
  id: "https://api.script696.students.nomoredomains.icu",
  headers: {
    "Content-Type": "application/json",
  },
});

export default movieApi;
