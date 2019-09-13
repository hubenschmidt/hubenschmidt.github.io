import projectData from "../projects.json";
import axios from "axios";

export default {
  getProjects: function(id) {
    const result = projectData.filter(proj => proj.id == id);
    return result;
  }
};
