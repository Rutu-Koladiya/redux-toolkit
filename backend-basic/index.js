import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("home route")
});

app.get("/user/:id", (req, res) => {
    res.send(`User's id is ${req.params.id}`)
})

// Boolean property that indicates if the app sent HTTP headers for the response.
app.get('/header', (req, res) => {
  console.log(res.headersSent) // false
  res.send('OK')
  console.log(res.headersSent) // true
})

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
