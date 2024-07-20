// const nome01 = 'Gabriel';
// const sobrenome01 = 'Moreno';
// const idade01 = 28;

// const nome02 = 'Larissa';
// const sobrenome02 = 'Teodoro';
// const idade02 = 26;

// const pessoa1 = {
//     nome: 'Gabriel',
//     sobrenome: 'Moreno',
//     idade: '25'
// };

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criaPessoa (nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade
//     };
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25);
// const pessoa2 = criaPessoa('Gabriel', 'Moreno', 27);
// const pessoa3 = criaPessoa('Raissa', 'Oliveira', 31);
// const pessoa4 = criaPessoa('Fernando', 'Santos', 40);
// const pessoa5 = criaPessoa('Julia', 'Martinez', 18);

// console.log(pessoa1.nome, pessoa2.nome)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incremetaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incremetaIdade();
pessoa1.fala();
pessoa1.incremetaIdade();
pessoa1.fala();
pessoa1.incremetaIdade();
pessoa1.fala();
pessoa1.incremetaIdade();
