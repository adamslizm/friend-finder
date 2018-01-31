app.get("/api/friends", function(req, res) {
  res.send("Welcome to Friend Finder!");
});

app.post("/api/friends", function(req, res) {
  var newfriend = req.body;

  console.log(newfriend);

  friends.push(newfriend);

  res.json(newfriend);
});