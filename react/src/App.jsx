import './App.css'
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'
import Card from './components/Card'

function App() {

  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <SearchBar/>
        <Filter/>
        <Card />
        <Card />
      </div>
    </div>
  )
}
export default App
