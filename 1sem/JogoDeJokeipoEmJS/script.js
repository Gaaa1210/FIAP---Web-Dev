// function usuario (nomeDoUsuario = "Visitante"){
//     return nomeDoUsuario
// }

// console.log(usuario("Caio"))

// console.log(usuario())

// Array é um vetor de coleção de itens

//const pessoal =["Caio", 15, true]
//console.log(pessoas[2]) //o Array sempre começa do 0 
//Isso é um Array

// Tem uma função que eu posso chamar que se chama floor, ele vai aredondar todos os numeros para baixo, ou sejá 0,99 seria 0
// mas eu tenho uma outra função que arredonda para cima que é o 

//Fazendo o Jokeipo

function escolhaComp(){
    const jokeipo = ["Pedra", "Papel", "Tesoura"]
    let numeroAleatorio = Math.floor(Math.random()* jokeipo.lenght) //Neste caso, estou usando o "Let" que é a mesma coisa que var
    //entretanto ele fica alterando... E ele multiplica por "jokeipo.lenght" pois ele vai rodar primeiro a função e depois vai
    //tranformar a palavra que ele escolheu em numero com a função "lenght" 
}
function jogar(escolhaDoUsuario){
    let escolhaPC = escolhaComp() //Esta é a escolha do PC
}
if(escolhaPC===escolhaDoUsuario){
    resultado = "Empate"
}

document.getElementById('resultado').innerText = resultado

if (escolhaPC===pedra && escolhaDoUsuario===papel){
    ganhou="Ganhou"
    document.getElementById('ganhou').innerText = ganhou
}
else if{
    (escolhaPC===pedra && escolhaDoUsuario===tesoura)
    Ganhou="Ganhou"
    document.getElementById('ganhou').innerText = Ganhou
}
else{
    (escolhaPC===tesoura && escolhaDoUsuario===papel)
    perdeu="Perdeu"
    document.getElementById('ganhou').innerText = perdeu
}
