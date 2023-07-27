const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv = require ("dotenv");
const app = express();
app.use(cors());                   
app.use(express.json());
dotenv.config();
mongoose
  // .connect("mongodb+srv://sanginkarmanisha2021:edtmP52BefJjklyf@cluster0.qocnual.mongodb.net/netflix2", {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  });
//   .catch((err) => {
//     console.log(err.message);
//   });

app.use("/api/user", userRoutes);

app.listen(4000, console.log("server started "));



