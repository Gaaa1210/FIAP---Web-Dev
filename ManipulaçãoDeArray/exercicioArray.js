
function modificarNumeros(numeros){
    return numeros.map(x => x.toUpperCase()) 
}
console.log(modificarNumeros(["oi","Tudo","bem"]))

//Isso que eu estou escrevendo é o JSon também (abaixo)
const filmes = [{
    nome: "Rei do Show",
    diretor: "Gabriel",
    ano: 2020
},{
    nome: "Filme",
    diretor: "nãosei",
    ano: 2024
}]

cosnt filmesModificados = filmes.filter(filme => filme.ano > 2000) //Isso é um filtro 

console.log(filmesModificados)



