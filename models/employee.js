const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  department: String,
  Email: { type: String, required: true }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
