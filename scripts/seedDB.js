const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const EmployeeSeed = [
  {
    name: "dalton earl",
  title: "proprietor",
  department: "everywhere",
  Email: "Dalton@everyhere.com"
    
  },
  {
    name: "tarl powers",
  title: "cool cat",
  department: "Strin",
  Email: "tarl.leroy@powers.com"
    
  },
  {
    name: "tori",
  title: "wife",
  department: "String",
  Email: "tori@wife.com"
   
  }
];

db.Employee.remove({})
  .then(() => db.Employee.collection.insertMany(EmployeeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
