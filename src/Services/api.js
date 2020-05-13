const getDataFromApi = () => {
  return fetch('./api/board/json').then((response) => response.json());
};

export default {
  getDataFromApi,
};
