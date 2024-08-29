export default function Card({dados}){ /*O props serve para poder importar as propriedades */

    return(
        <>
        {
            dados.map(skill =>(
                
            <div class="skill-card" style={{color: skill.color}}> 
            {/* skill.color ele vai puxar a cor que eu coloquei la no html */}
                <h3>{skill.titulo}</h3>
                <p>{skill.nivel}</p>
                <p>{skill.tempopx}</p> {/*Aqui eu posso brincar com java e html*/}
            </div>    

            ))
        }
        
        </>
    )
}

