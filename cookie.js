const express = require("express");
const app = express();
const cookieparser = require("cookie-parser");

app.use(cookieparser());

app.get("/", function(req, res){
    res.send("Hey");
});

app.get("/set-cookie", (req, res) => {
    res.cookie("age", "25", {
        maxAge: 1000,
        httpOnly: true,   // can only read by server not by browser or frontend by document.cookie
        secure: true  // follows https only
    });
    res.send("Cookie set ho gyi h");
});

app.get("/read-cookie", (req, res) => {
    res.send(req.cookies.age);
});

app.listen(3000);