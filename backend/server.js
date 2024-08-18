import express from "express";
import cors from "cors";  
import bodyParser from "body-parser";

import pg from 'pg';
// note write your own 'username' and 'password' and create a new database name = 'helpcenter' 
// after that create a new table in the database.
// copy the code from table.sql tp Postgresql and make Table
const db = new pg.Client({
    user: "USERNAME",
    host: "localhost",
    database: "helpcenter",
    password: "PASSWORD",
    port: 5432,
  });
  db.connect();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


// Check if server is running
app.get('/ping', (req, res) => {
  res.send('Server is running!');
});



app.post('/cards', async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required' });
  }

  try {
    const result = await db.query(
      'INSERT INTO cards (title, description) VALUES ($1, $2) RETURNING *',
      [title, description]
    );

    const newCard = result.rows[0];
    res.status(201).json(newCard);
  } catch (error) {
    console.error('Error inserting card:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/showCards', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM cards');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching cards:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/cards/:title', async (req, res) => {
  const { title } = req.params;
 
  try {
    const result = await db.query('SELECT * FROM cards WHERE title ILIKE $1', [`%${title}%`]);
    if (result.rows.length > 0) {
      res.json(result.rows);
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error) {
    console.error('Error fetching card by title:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
