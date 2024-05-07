const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://SwagWNL:uuuuuu@atlascluster.g9mxqlu.mongodb.net/dbb1');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// User schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  }, { collection: 'Swagg' });
  
  const User = mongoose.model('User', UserSchema, 'Swagg');
  // Register endpoint
  app.post('/register', async (req, res) => {
    const {username, email, password } = req.body;
    try {
      const existingUser = await User.findOne({ $or: [{ username }, { email }] });
      if (existingUser) {
        return res.status(400).json({ error: 'Username or email already exists' });
      }
     
      const user = new User({username, email, password});
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ error: "this is error" + error});
    }
  });

// Login endpoint
app.post('/login', async (req, res) => {
    const { username , password } = req.body;
    try {
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Invalid username.' });
      }
      // const validPassword = await bcrypt.compare(password, user.password);  
      // if (!validPassword) {
      //   return res.status(401).json({ error: 'Invalid password.' });
      // }
      if (password !== user.password) {
        return res.status(401).json({ error: 'Invalid password.' });
      }
  
      res.status(200).json({ message: 'Login successful' });
    } catch (error) {
      res.status(500).json({ error: 'Internal-Error: ' + error });
    }
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));