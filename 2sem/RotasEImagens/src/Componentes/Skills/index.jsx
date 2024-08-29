import Card from "../Card"; /*Ele esta importando o CSS do arquivo index.css*/ 

function Skills({ skills }) {
  const habilidades = [
    {
      titulo: "HTML",
      nivel: "Avançado",
      tempopx: "10 anos",
      color: "blue",
      // imgIcone: consigo passar uma imagem
    },
    {
      titulo: "CSS",
      nivel: "Básico",
      tempopx: "5 anos",
      color: "green",
      
    }, 
    {
      titulo: "React",
      nivel: "Não sei",
      tempopx: "5 meses",
      color: "red",
      // imgIcone: consigo passar uma imagem
    },
  ]

  return (
    <div classNama = "skills">
      <h2>Habilidades</h2>
      <Card dados = {habilidades}/>
    </div>
  );
}

export default Skills;