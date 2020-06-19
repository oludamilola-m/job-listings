class Api {
  async get(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new Api();
