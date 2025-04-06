
```markdown
# 📝 Todo Server (Mongoose + MVC)

This is a simple **Todo Backend API** built using **Node.js**, **Express.js**, and **MongoDB (Mongoose)** following the **MVC pattern**.

## 🚀 Features

- Create a todo ✅
- Get all todos 📋
- Get todo by ID 🔍
- Update todo ✏️
- Delete todo 🗑️
- Insert multiple todos at once ⚡

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- MVC Architecture

## 📁 Folder Structure

```
project-root/
│
├── models/
│   └── Todo.js
├── schemas/
│   └── todoSchemas.js
├── routes/
│   └── todoRoutes.js
├── app.js / server.js
└── package.json
```

## ⚙️ Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-server.git
   cd todo-server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start MongoDB server (locally):
   ```bash
   mongod
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

5. Server will run at:
   ```
   http://localhost:4000
   ```

## 📬 API Endpoints

| Method | Endpoint        | Description              |
|--------|------------------|--------------------------|
| GET    | `/`              | Get all todos            |
| GET    | `/:id`           | Get a todo by ID         |
| POST   | `/`              | Create a todo            |
| POST   | `/all`           | Insert multiple todos    |
| PUT    | `/:id`           | Update a todo            |
| DELETE | `/:id`           | Delete a todo            |

## 📌 Notes

- Make sure MongoDB is running on your local machine (`mongodb://localhost:27017`)
- No frontend included — this is just the backend server.

---

Happy coding! 🧑‍💻
```

