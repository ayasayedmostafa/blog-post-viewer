const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const posts = [
  { id: 1, title: 'Getting Started with Angular', description: 'A quick intro to components, templates and data binding in Angular.' },
  { id: 2, title: 'Understanding Express Routing', description: 'How Express handles routes and sends responses to the client.' },
  { id: 3, title: 'Why MongoDB for Web Apps', description: 'A short look at document databases and when they fit your project.' },
  { id: 4, title: 'Node.js Event Loop Explained', description: 'How Node handles async work without blocking the main thread.' }
];

app.get('/api/posts', (req, res) => {
  res.json(posts);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));