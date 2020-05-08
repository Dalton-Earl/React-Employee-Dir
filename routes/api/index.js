const router = require("express").Router();
const employeeRoutes = require("./employees");

// Post routes
router.use("/employee", employeeRoutes);

module.exports = router;
