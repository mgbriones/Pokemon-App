import { useState, useEffect } from "react";
import "./App.css";

import PokeList from "./components/PokeList";
import LoadPokeButton from './components/LoadPokeButton'

const url = "https://pokeapi.co/api/v2/pokemon/"

function App() {
  const [listPoke, setListPoke] = useState([]);
  const [nextPage, setNextPage] = useState(url);

  async function showData() {
    const response = await fetch(nextPage);
    const data = await response.json();
    setListPoke([...listPoke, ...data.results]);
    setNextPage(data.next);
    // console.log(data)
  }

  useEffect(() => {
    showData();
  }, []);

  return (
    <div className="w-full bg-indigo-500 place-content-center font-mono">
      <h1 className="
      bg-blue-900 
      text-2xl 
      text-center 
      text-white 
      font-bold 
      p-4">
        Pokemon List
        <p className="text-sm">Choose one to learn about your pokemon </p>
      </h1>
      <PokeList listPoke={listPoke} />
      <LoadPokeButton showData={showData}/>
    </div>
  );
}

export default App;
