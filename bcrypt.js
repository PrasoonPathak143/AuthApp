const express = require("express");
const app = express();
const bcrypt = require("bcrypt");

app.get("/", function(req, res){
    res.send("Hey");
});

app.post("/encrypt", async function(req, res) {
    let salt = await bcrypt.genSalt(10);
    // res.send(salt);
    let encrypt = await bcrypt.hash("iloveyou", salt);
    res.send(encrypt);
});

app.post("/checkpassword", async (req, res) => {
    let result = await bcrypt.compare("iloveyou", "$2b$10$DYGqu8zZlcosAb/IGTf1p.YN6k08VjZbHiVTWabw/e04gy142kHn2");
    res.send(result);
})


app.listen(3000);