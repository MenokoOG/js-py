const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/dog', async (req, res) => {
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
