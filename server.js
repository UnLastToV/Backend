const express = require("express");
const app = express();
const cors = require(`cors`);
const PORT = 8080;

app.use(express.json());

app.use(express.urlencoded({extended: true}));

var corsOptions = {
    origin : "http://localhost:3000"
}

app.use(cors(corsOptions));

const db = require("./app/model");
db.sequelize.sync()
    .then(() => {
        console.log("Synced DB successfully!");
    })
    .catch(() => {
        console.log("Sync DB failed!");
    })

// http://localhost:8080
app.get("/", (req, res)=>{
    res.json({message: "welcome to ITD102 tester"}) 
});

// http://localhost:8080/api/tutorials
require("./app/routes/tutorial.rounts.js")(app);

app.listen(PORT, ()=>{
    console.log(`server is running PORT ${PORT}`);
});