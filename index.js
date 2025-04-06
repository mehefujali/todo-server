const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;
const todoHandler = require("./routeHandler/todoHandler");
app.use(cors());
app.use(express.json());

// Database connection with mongoose

mongoose.connect('mongodb://localhost:27017/todo')
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.log('MongoDB connection error:', err));

//

app.use("/todo", todoHandler);

app.get("/", (req, res) => {
  res.send(`<div >
            <h1 style=" background: blue ; color:white; ">Surver is running</h1>
      </div>`);
});

app.use((err, req, res, next) => {
  res.send("this is an err");
});
app.listen(port, () => {
  console.log(`SERVER IS RUNNING ON ${port} 👍`);
});
