const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can use any port number you prefer

// Set the 'views' directory as the location for Pug templates
app.set('views', './views');
app.set('view engine', 'pug');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



// Define a route for the root URL and render the Pug template
app.get('/', (req, res) => {
  res.render('index', { title: 'Simple Pug Template' });
});

// Define a route to render the Pug template with a form
app.get('/form', (req, res) => {
  res.render('form', { title: 'Form Example' });
});

// Define a route to handle form submission
app.post('/submit', (req, res) => {
  const name = req.body.name;
  res.send(`Hello, ${name}! Your form was submitted successfully.`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });




// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});


