const pessoas = ["Gabriel", "Caetano", "Cordeiro"] //É uma constante, ou sejá, eu não posso mudar os dados que estão dentro dela
pessoas.push("Wanderley") //com o push eu posso adicionar mais nomes a minhas arrays

console.log(pessoas[2])

//Para remover o ultimo, apenas o ultimo
pessoas.pop()

//Adicionar um elemento no início da Array
pessoas.unshift("Caio")

//Atualizar um valor da Array
pessoas[1] = "Cleiton"
console.log(pessoas)

//Temos um for somente para Arrays, ou seja, eu consigo percorrer a array usando este for
pessoas.forEach(usuario => console.log(usuario.toLowerCase())) 
// Posso usar o toLowerCasa para validar dados
//Ele passa por todos os arrays

pessoasModificada = pessoas.map(usuario => usuario.toLowerCase()) //O map faz a mesma coisa que o forEach entretanto ele vai modificar ele devolver para você esta modficação em uma copia, ele não ira mexer na original.

console.log(pessoasModificada)