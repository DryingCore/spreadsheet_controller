const XLSX = require("xlsx");
const fs = require("fs");

// Criar uma nova planilha
const workbook = XLSX.utils.book_new();
const sheetName = "MinhaPlanilha";
const worksheet = XLSX.utils.aoa_to_sheet([
	["Nome", "Entrada", "Mix", "Master", "Status", "OBS", "Entrega"],
	// Adicione mais linhas conforme necessário
]);

// Adicionar a planilha ao livro de trabalho
XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

// Data atual para controle
const DateToday = new Date();
const formatData = `${DateToday.getDate()}/${DateToday.getMonth() + 1}/${DateToday.getFullYear()}`;

// Adicionar dados à planilha
const data = [
	["Musica teste", formatData, "True", "True", "Done", "135 BPM", "Yeah"],
	// Adicione mais linhas conforme necessário
];

XLSX.utils.sheet_add_aoa(worksheet, data, { origin: -1 });

// Definir a largura padrão das colunas (por exemplo, 15)
const defaultColumnWidth = 17;
worksheet["!cols"] = Array(7).fill({ width: defaultColumnWidth });

// Salvar a planilha em um arquivo
const outputFile = "./aliencoreControle.xlsx";
XLSX.writeFile(workbook, outputFile, { bookSST: true });

// Agora, você pode ler a planilha novamente se necessário
const readWorkbook = XLSX.readFile(outputFile);
const readSheet = readWorkbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(readSheet, { header: 1 });

console.log(jsonData);
