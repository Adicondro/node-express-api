import express from "express";

const router = express.Router();

const users = [
  {
    name: "John",
    lastName: "Doe",
    age: 25,
  },
  {
    firstname: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

// Alreadu in users route
router.get("/", (req, res) => {
  console.log(users);
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstname} added to the database!`);
});

export default router;
