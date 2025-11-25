const express = require('express');
const fetch = require('node-fetch');
const app = express();

app.get('/api/search', async (req, res) => {
  try {
    const q = req.query.q;
    const city = req.query.loc;

    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${q} ${city}&addressdetails=1&limit=10`;
    const response = await fetch(url);
    const data = await response.json();

    res.json({ results: data });
  } catch (err) {
    res.json({ error: "Something went wrong" });
  }
});

app.get('/', (req, res) => res.send('API Connector Running'));

app.listen(5000, () => console.log('Server running on port 5000'));
