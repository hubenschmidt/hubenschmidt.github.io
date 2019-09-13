import projectData from "../projects.json";

export default {


    getProjects: function(id){

        const result = projectData.filter(proj => proj.id == id);

        console.log(result)
        }
       
    }

