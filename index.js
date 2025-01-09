const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/count-words', (req, res) => {
    const { text } = req.body;

    if (!text || typeof text !== 'string') {
        return res.status(400).json({ error: 'Iltimos, toʻgʻri matn yuboring.' });
    }

    const wordCount = text.trim().split(' ').filter(word => word !== '').length;
		console.log(wordCount)

    res.json({ wordCount });
});

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});
