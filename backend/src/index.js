const express = require("express");
const cors = require("cors");
const uniqid = require("uniqid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function logRequests(request, response, next) {
	const { method, url } = request;
	const logLabel = `[${method.toUpperCase()}] ${url}`;

	console.time(logLabel);
	next();
	console.timeEnd(logLabel);
}

app.use(logRequests);

app.get("/users", (request, response) => {
	return response.json(users);
});

app.get("/user", (request, response) => {
	const { email } = request.body;
	for (i = 0; i < users.length; i++) {
		if (users[i].email == email) {
			return response.status(201).json([{ success: true, data: users[i] }]);
		} else {
			return response.status(400).json({ success: false });
		}
	}
});

app.post("/login", (request, response) => {
	const { email, password } = request.body;
	console.log(email, password);
	for (i = 0; i < users.length; i++) {
		if (users[i].email == email && users[i].password == password) {
			return response.status(201).json({
				success: true,
				message: "Logado com sucesso",
			});
		} else {
			return response.status(400).json({
				success: false,
				message: "Ops.. tente novamente",
			});
		}
	}
});

app.post("/signup", (request, response) => {
	const { username, email, password } = request.body;
	let success = true;
	let message = "";

	for (i = 0; i < users.length; i++) {
		if (users[i].email == email) {
			success = false;
		}
	}

	if (success) {
		message = "Usuário cadastrado com sucesso!";
		const newUser = { id: uniqid(), username, email, password };
		users.push(newUser);
		return response.send({ success, message });
	} else {
		message = "E-mail já existente, tente novamente!";
		return response.send({ success, message });
	}
});

app.listen(3333, () => {
	console.log("🤔 Back-end started!");
});
