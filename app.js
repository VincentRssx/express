// const express = require("express");
// const app = express();

// const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Welcome to Express");
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.error('Something bad happened');
//   }
//   else {
//     console.log(`server is listening on ${port}`);
//   }
// });

// const welcomeName = (req, res) => {
//   res.send(`Welcome ${req.params.name}`);
// };

// app.get("/users/:name", welcomeName);

// const cocktails = [
//   {
//     id: 1,
//     name: "Margarita",
//   },
//   {
//     id: 2,
//     name: "Mojito",
//   },
//   {
//     id: 3,
//     name: "Cuba Libre",
//   },
// ];

// const getCocktails = (req, res) => {
//   res.status(200).json(cocktails);
// };

// app.get("/api/cocktails", getCocktails);

const express = require("express");

const app = express();

const port = 5000;

const movies = [
	{
		id: 1,
		title: "Citizen Kane",
		director: "Orson Wells",
		year: "1941",
		color: false,
		duration: 120,
	},
	{
		id: 2,
		title: "The Godfather",
		director: "Francis Ford Coppola",
		year: "1972",
		color: true,
		duration: 180,
	},
	{
		id: 3,
		title: "Pulp Fiction",
		director: "Quentin Tarantino",
		year: "1994",
		color: true,
		duration: 180,
	},
];

app.listen(port, (err) => {
	if (err) {
		console.error("Something bad happened");
	} else {
		console.log(`Server is listening on ${port}`);
	}
});

app.get("/", (req, res) => {
	res.send(movies[0]);
});

const getMovies = (req, res) => {
	res.status(200).json(movies);
};
app.get("/api/movies", getMovies);

const getByID = (req, res) => {
	const getId = movies.find((movie) => movie.id === parseInt(req.params.id));

	if (getId) {
		res.status(200).json(getId);
	} else {
		res.status(400).send("not found");
	}
};
app.get("/api/movies/:id", getByID);
