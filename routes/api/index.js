const router = require("express").Router();
const employeeRoutes = require("./posts");

// Post routes
router.use("/employee", employeeRoutes);

module.exports = router;
