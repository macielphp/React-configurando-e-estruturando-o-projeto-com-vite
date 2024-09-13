import './App.css'
import Sidebar from './components/Sidebar'
import SearchBar from './components/SearchBar'
import Filter from './components/Filter'

function App() {

  return (
    <div className='container'>
      <Sidebar/>
      <div>
        <SearchBar/>
        <Filter/>
      </div>
    </div>
  )
}
export default App
