const express = require("express");
const mongoose = require("mongoose");

//set up connection to the server
const app = express();
//set up port for server
const PORT = process.env.PORT || 3001;

//create server connection
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost:27017/pizza-hunt",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

//log mongo queries being executed for debugging
mongoose.mongo.set("debug", true);

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));
