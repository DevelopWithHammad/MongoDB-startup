import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv"
console.log("SALAM");
const app = express();
const port = 8000;
dotenv.config();
const connected = () => {
    mongoose.connect(process.env.MONGOURL).then(() => {
        console.log("connect to DB");
    }).catch((error) => {
        console.log(error);
    })
}
app.listen(port, () => {
    connected()
    console.log("server chl gaya");
})

// dotenv.config();
// const connect = () => {
//   mongoose
//     .connect(process.env.MONGO_URL)
//     .then(() => {
//       console.log("connect to DB");
//     })
//     .catch((error) => {
//       throw error;
//     });
// };