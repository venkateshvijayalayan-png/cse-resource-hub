// const express = require("express")
// const mongoose = require("mongoose")
// const cors = require("cors")
// const app = express();
// const bookRouter=require("./routes/bookRoutes")
// app.use(cors());
// app.use(express.json());
// app.use(bookRouter)
// app.get('/', (req, res) => {
//     res.send("Server is working");
// });
// app.listen(3000, () => {
//     console.log("running in 3000");
// }
// );
// mongoose.connect("mongodb://localhost:27017/cse-resources").then(()=>
// {
//     console.log("MongoDB Connected");
// })
// .catch(err=>
// {
//    console.log(err)
// })


// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// const bookRouter = require("./routes/bookRoutes");
// app.use(bookRouter);

// // Test route
// app.get("/", (req, res) => {
//     res.send("Server is working");
// });

// // ✅ Use environment PORT (IMPORTANT for Render)
// const PORT = process.env.PORT || 3000;

// // ✅ Start server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// // ✅ Use environment MongoDB URI (IMPORTANT)
// mongoose.connect(process.env.MONGO_URI)
// .then(() => {
//     console.log("MongoDB Connected");
// })
// .catch((err) => {
//     console.log("MongoDB Error:", err);
// });
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const bookRouter = require("./routes/bookRoutes");
app.use(bookRouter);

app.get("/", (req, res) => {
    res.send("Server is working");
});

const PORT = process.env.PORT || 3000;

// ✅ Start server ONLY after DB connects
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.log("MongoDB Error:", err);
});