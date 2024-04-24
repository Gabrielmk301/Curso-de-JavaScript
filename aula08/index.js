/*
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.925925
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda'
const idade = 30;
const peso = 84;
const alturaEmM = '1.80';
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = 2024 - idade

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, \ntem ${alturaEmM} de altura e seu IMC é de ${Math.round(indiceMassaCorporal)}.\nLuiz Otávio nasceu em ${anoNascimento}.`);

