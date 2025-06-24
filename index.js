import express from "express";

const app = express();
app.use(express.json());

const PORT = 8000;

console.log("hello form the main index");

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
