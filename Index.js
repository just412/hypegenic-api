const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require('./routes/stripe')
const cors = require("cors");

dotenv.config();

mongoose.connect("mongodb+srv://admin-test:test@cluster0.lki6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        .then(() => console.log("DB connection Succesful"))
        .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running");
});

