import projectData from "../projects.json";
import axios from "axios";

export default {
  getProjects: function(id) {
    // return axios.get(projectData.filter(proj => proj.id == id))
    const result = projectData.filter(proj => proj.id == id);
    return result;
  }
};
