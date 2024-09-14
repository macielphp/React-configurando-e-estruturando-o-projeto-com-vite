import './App.css'
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import Card from './components/Card'
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes')
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <SearchBar/> 
        <Filter/>
        <ul className='cards-list'>
          { data ? data.map((item, index) => (
            <li key={index}>
              <Card 
                id={item.id}
                imagemUrl={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhas_de_codigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}
export default App
