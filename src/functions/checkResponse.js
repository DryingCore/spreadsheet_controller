// Verifica as respostas entradas pelo user
function checkResponse(response) {
	switch (response) {
		case "1":
			console.log("a");
			break;

		case "2":
			console.log("b");
			break;

		case "3":
			console.log("c");
			break;
	}
}

module.exports = { checkResponse };
