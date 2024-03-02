const { rl } = require("../readline.js");
const { checkResponse } = require("./checkResponse.js");

// Interage com o user
rl.question("(1) - Create new spreadSheet\n(2) - Edit spreadSheet\n(3) - About\nInput: ", (response) => {
	checkResponse(response);
	rl.close();
});
