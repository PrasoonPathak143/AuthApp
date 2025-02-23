const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

app.get("/", function(req, res){
    res.send("Hey");
});

app.get("/create-token", (req, res) => {
    let token = jwt.sign({ name: "prasoon" }, "huihui");
    res.send(token);
});

app.get("/data-fetch", (req, res) => {
    let data = jwt.decode(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoicHJhc29vbiIsImlhdCI6MTc0MDM0Njk0NH0.FOroRBB2u4gPjj0fwuLz5YQA7eZSVB3r_B6mQecIAqc",
        "huihui"
    );
    res.send(data);
})

app.listen(3000);