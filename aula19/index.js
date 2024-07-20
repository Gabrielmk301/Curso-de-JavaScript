// let a = [1, 2, 3];
// let b = [...a]; // Copiando valor de A
// let c = b;

// console.log(a, b)

// a.push(4)
// console.log(a, b);

// b.pop()
// console.log(a, b)

// a.push('Luiz')
// console.log(a ,c)

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const b = {...a};


a.nome ='João';
console.log(a);
console.log(b);