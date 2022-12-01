class Api {
  constructor({ id, headers }) {
    this._id = id;
    this._headers = headers;
  }

  async _checkRes(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async getAllMovies() {
    const res = await fetch(`${this._id}/users/me`, {
      headers: {
        ...this._headers,
      },
    });
    const resParsed = await this._checkRes(res);

    return resParsed;
  }
}

const movieApi = new Api({
  id: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Content-Type": "application/json",
  },
});

export default movieApi;
