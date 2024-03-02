const XLSX = require("xlsx");
const fs = require("fs");

// Criar uma nova planilha
const workbook = XLSX.utils.book_new();
const sheetName = "MinhaPlanilha";
const worksheet = XLSX.utils.aoa_to_sheet([]); // Adicione um array com titulos

// Adicionar a planilha ao livro de trabalho
XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);

// Data atual para controle
const DateToday = new Date();
const formatData = `${DateToday.getDate()}/${DateToday.getMonth() + 1}/${DateToday.getFullYear()}`;

// Adicionar dados à planilha (cada cell deve ser um array dentro de data)
const data = [];

XLSX.utils.sheet_add_aoa(worksheet, data, { origin: -1 });

// Definir a largura padrão das colunas (por exemplo, 15)
const defaultColumnWidth = 15;
worksheet["!cols"] = Array(7).fill({ width: defaultColumnWidth });

// Salvar a planilha em um arquivo
const outputFile = "";
XLSX.writeFile(workbook, outputFile, { bookSST: true });

// Agora, você pode ler a planilha novamente se necessário
const readWorkbook = XLSX.readFile(outputFile);
const readSheet = readWorkbook.Sheets[sheetName];
const jsonData = XLSX.utils.sheet_to_json(readSheet, { header: 1 });

console.log(jsonData);

module.exports = { worksheet };
