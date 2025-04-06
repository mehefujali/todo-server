const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Database connection with mongoose

async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost/todo");
    console.log("Success");
  } catch (err) {
    console.log(err); 
  }
}

connectDB();




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
