const btnCriar = document.querySelector('#btnCriar') 
const inputUsuario = document.querySelector('#inputUsuario')
const listaFilmes = document.querySelector('#listaFilmes')

//Ele busca qualquer coisa, mas eu tenho que falar para ele o que é para ele pegar 
btnCriar.addEventListener('click', function (infosDoEvento){
    if(inputUsuario.value === ""){
        alert("Digite alguma coisa")
        }else{

        infosDoEvento.preventDefault()   //É uma function
        //o preventDefault ele não deixa com que os dados sumam, ou sejá, ele ira previnir o comportamento padrão do formulario.
        const novoFilme = document.createElement('li')
        novoFilme.innerText =inputUsuario.value
        
        const btnEditar = document.createElement('button')
        btnEditar.innerText = "Editar"
        btnEditar.addEventListener('click',function(){
            
            const imagem = document.createElement('img')
            imagem.src=""

            novoFilme.innerHTML = '
                <h1> ${inputUsuario.value} </h1>
                <p>Avaliação do filme</p>
            '
            
            novoFilme.style.color = "red"
            novoFilme.classList.add('fundo-preto') //Toda vez que o usuario clicar no botão ele ira puxar a classe do css com o nome fundo preto
        })

        novoFilme.append(btnEditar)
        listaFilmes.append(novoFilme)//Aqui eu falei para quando eu der o entrer, ele ira reiniciar tudo
        console.log(infosDoEvento.target.parentNode.id) //Aqui o target assume a função de mostrar exatamente qual botão que o usuario clicou.
        inputUsuario.value = ""
    }
    


})