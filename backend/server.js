const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const bookRouter=require("./routes/bookRoutes")
app.use(cors());
app.use(express.json());
app.use(bookRouter)
app.get('/', (req, res) => {
    res.send("Server is working");
});
app.listen(3000, () => {
    console.log("running in 3000");
}
);
mongoose.connect("mongodb://localhost:27017/cse-resources").then(()=>
{
    console.log("MongoDB Connected");
})
.catch(err=>
{
   console.log(err)
})