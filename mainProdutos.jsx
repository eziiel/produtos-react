

import react from "react"
import { HandleButton } from "./fetchProdutos"
import "./index.css"

function MainProdutos () {
  let [item, setItem] = react.useState({})
  let [load, setLoad] = react.useState(false)
  

  function ValidarVenda () {
    if (item.vendido) {
      return <p>item disponivel para venda</p>
    }else {
    return <p>item sem estoque</p>
    }
  }


  return (
    <main className="content-geral">
      <div className="botoesContent">
        <button className="botao"
         onClick={(event) => HandleButton(event, item, setItem, load, setLoad)}>
           SmartPhone
            </button>
        <button className="botao"
         onClick={(event) => HandleButton(event, item, setItem, load, setLoad)}>
          Notebook
            </button>
        <button className="botao"
         onClick={(event) => HandleButton(event, item, setItem, load, setLoad)}>
          Tablet
            </button>
      </div>
      <div>
        {load && <p>Carregando</p>}
      </div>

      {Object.keys(item).length> 0 &&  (
        <div className="content-dados">
          <h2>{item.nome}</h2>
          <p className="valor"> 
            R$ <span className="preco"> {Number(item.preco).toFixed(2)}</span>
          </p>
          {/* <p>{Number(item.preco).toLocaleString("pt-br",{style :"currency", currency :"BRL"})}</p> */}
          <p>{item.descricao}</p>
          <ValidarVenda />
            <div className="fotos">
              {item.fotos.map((foto) => (
                <img className="foto" src={foto.src} alt="fotoProduto" key={foto.src} width = "300px"/>
              ))}
            </div>
        </div>
      )}
    </main>
  )
}

export {MainProdutos}