const express = require("express");
const router = express.Router();
const todoSchema = require("../schemas/todoSchemas");
const mongoose = require("mongoose");
const Todo = new mongoose.model("Todo", todoSchema);
//// Get all tha todo

router.get("/", async (req, res) => {
  try {
  } catch {}
});

// Get a todo by id

router.get("/:id", async (req, res) => {});

//Post todo

router.post("/", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);

    const savedTodo = await newTodo.save();
    res.status(201).json({
      message: "Todo was inserted successfully",
      data: savedTodo,
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
});

//Post Multiple todo

router.post("/all", async (req, res) => {
  try {
    const result = await Todo.insertMany(req.body);
    res.status(200).json({
      message: "Todos was inserted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
});

// Put todo
router.put("/:id", async (req, res) => {
  try {
    const result = await Todo.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: "inactive",
        },
      }
    );
    res.status(200).json({
      message: "data updated",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: "Internal server error",
      details: err.message,
    });
  }
});

//Delete todo
router.delete("/:id", async (req, res) => {});

module.exports = router;
