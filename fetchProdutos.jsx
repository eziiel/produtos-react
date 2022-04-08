async function HandleButton (e, item, setItem, load, setLoad) {
  setLoad(true)
  
  const dados = "https://ranekapi.origamid.dev/json/api/produto/"

  const urlItem = `${dados}${(e.target.innerText).toLowerCase()}`

  const urlFetch = fetch(urlItem)
  
  try{
    const response = await(await urlFetch).json()
    setItem(response)
    setLoad(false)
  }
  catch {
    alert("ops, Algo deu Errado")
  }
}

export {HandleButton}