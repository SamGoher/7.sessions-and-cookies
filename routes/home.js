const express = require(`express`);
const router = express.Router();
const postsController = require(`../controllers/posts`);

// GET: /home
router.get(`/home`, postsController.getHome);

module.exports = router;