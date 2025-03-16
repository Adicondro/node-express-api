import express from "express";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

const users = [
  // {
  //   firstname: "John",
  //   lastName: "Doe",
  //   age: 25,
  // },
  // {
  //   firstname: "Jane",
  //   lastName: "Doe",
  //   age: 24,
  // },
];

// Alreadu in users route
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuidv4();

  users.push({
    ...user,
    id: userId,
  });

  res.send(`User with the name ${user.firstname} added to the database!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
});

export default router;
