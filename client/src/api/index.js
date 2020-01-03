import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api/v1"
});

export const scrapeYoutube = payload => api.post(`/scrape-youtube`, payload)
export const addTutorial = payload => api.post(`/tutorial`, payload);
export const getAllTutorials = () => api.get(`/tutorials`);
export const updateTutorialById = (id, payload) =>
  api.put(`/tutorial/${id}`, payload);
export const deleteTutorialById = id => api.delete(`/tutorial/${id}`);
export const getTutorialById = id => api.get(`/tutorial/${id}`);

const apis = {
  scrapeYoutube,
  addTutorial,
  getAllTutorials,
  updateTutorialById,
  deleteTutorialById,
  getTutorialById
};

export default apis;
