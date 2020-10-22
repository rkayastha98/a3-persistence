const express = require("express");
const app = express();

const lists=[]

app.use(function (req,res,next) {
    console.log(req.url)
    next()
})

app.use(express.static("./"));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/a3-persistence/login.html");
});

app.get("/lists", (request, response) => {
    // express helps us take JS objects and send them as JSON
    response.json(lists);
});

const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
});