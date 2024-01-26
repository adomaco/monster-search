import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import CardList from "./components/cardlist/cardlist.component";
import SearchBar from './components/searchbar/searchbar.component';
import {useState, useEffect} from "react"; 

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchInput, setSearchInput] = useState("")
  const [filteredMonsters, setFilteredMonsters] = useState([]);
  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setMonsters(response.data);
    };

    fetchMonsters();
  }, []);

  const handleInput = e => {
    setSearchInput(e.target.value)
  };

  useEffect(() => {
    let filtered = [];
    if (searchInput === "") {
    filtered = monsters
    } else {
    filtered = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    }
    setFilteredMonsters(filtered);
    }, [monsters, searchInput]);

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBar
        placeholder='Search Monster'
        handleInput={handleInput}
        />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
