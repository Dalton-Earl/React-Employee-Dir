import axios from "axios";

export default {
  // Gets all posts
  getEmployees: function() {
    return axios.get("/api/employee");
  },
  // Gets the post with the given id
  getEmployee: function(id) {
    return axios.get("/api/employee/" + id);
  },
  // Deletes the post with the given id
  deleteEmployee: function(id) {
    return axios.delete("/api/employee/" + id);
  },
  // Saves a post to the database
  saveEmployee: function(employeeData) {
    return axios.post("/api/eployee", employeeData);
  }
};
