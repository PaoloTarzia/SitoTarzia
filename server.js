const express = require('express');
const app = express();
const path = require('path');

// Imposta la cartella degli assets statici (file HTML, CSS, immagini, ecc.)
app.use(express.static(path.join(__dirname, 'public')));

// Gestisce le richieste GET per le diverse pagine
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.get('/pokemon', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pokemon.html'));
});

app.get('/team', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'team.html'));
});

app.get('/teracristall', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'teracristall.html'));
});

// Avvia il server
const port = 3000;
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});