const express = require(`express`);
const router = express.Router();
const authController = require(`../controllers/auth`);

// GET: /
router.get(`/`, authController.getAuth);

// POST: /
router.post(`/`, authController.postAuth);

module.exports = router;