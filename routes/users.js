import express from "express";

import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

const app = express();

// app.get("/", (req, res) => {
//   res.send(
//     "Hello guys welcome to my Simple CRUD API, you can use /users to get all users"
//   );
// });

// Already in users route
router.get("/", getUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
