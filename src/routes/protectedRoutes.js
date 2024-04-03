const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware.verifyToken, (req, res) => {
    res.json({ message: 'Protected data accessed successfully' });
});

module.exports = router;
