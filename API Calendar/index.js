const express = require("express");
const cors = require("cors")
const app = express();

require("./Configs/db.connection");

app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json({
        message : "Bienvenue sur notre API"
    })
})

require("./Routes/event.routes")(app);

app.listen(3435, ()=>{
    console.log("Api run on " + 3435);
});