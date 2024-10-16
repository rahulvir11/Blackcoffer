const { default: mongoose } = require("mongoose");

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/internship')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

