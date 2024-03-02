const { worksheet } = require("../../index.js");

// Verificar se o worksheet está vazio
function isWorksheetEmpty(sheet) {
	return !sheet || sheet["!ref"] === undefined;
}

// Utilize a função para verificar se o worksheet está vazio
if (isWorksheetEmpty(worksheet)) {
	console.log("O worksheet está vazio.");
} else {
	console.log("O worksheet não está vazio.");
}
