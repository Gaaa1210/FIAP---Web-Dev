import Header from "./componentes/Header"

function App() {

const estiloTitulo = {
    backgroundColor: 'yellow',
    color: 'blue'
}
  return (
    <>
      <Header/>
      <h1 className="titulo" 
      style={estiloTitulo}
      > Título da página</h1>

      <p className="text-blue-800 text-5xl w-[350px] md:text-purple-500 bg-gray-800 ml-8 flex justify-center">Parágrafo</p>
    {/* Isso acima foi o tielwind */}
    </>
  )
}

export default App
