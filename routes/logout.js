const express = require(`express`);
const router = express.Router();
const postsController = require(`../controllers/posts`);

// POST: /logout
router.post(`/logout`, postsController.postlogout);

module.exports = router;