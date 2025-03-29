const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/toucam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to TouCam Backend!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});