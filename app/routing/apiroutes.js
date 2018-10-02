//Load Data from friends.js
var friends = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        // console.log(res);
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {

        var userInput = req.body;
        console.log("Req.body", req.body)
        console.log("userinput", userInput);
        console.log("Scores",userInput.scores)

        // for (var i = 0; i < userInput.scores.length; i++) {
        //     userInput.scores[i] = parseInt(userInput.scores[i]);
        // }

        // var matchIndex = 0;
        // var matchDifference = 500;

        // for (var i = 0; i < friends.length; i++) {
        //     var totalDifference = 0;
        //     for (var j = 0; j < friends[i].scores.length; j++) {
        //         var difference = math.abs(user.scores[j] - friends[i].scores[j]);
        //         totalDifference += difference;
        //     }
        //     if (totalDifference < matchDifference) {
        //         matchIndex = i;
        //         matchDifference = totalDifference;
        //     }
        // };

        friends.push(userInput);

        // res.json(friends[matchIndex]);

    });


};