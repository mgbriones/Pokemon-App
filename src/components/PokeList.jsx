import PokeCard from "./PokeCard";

function PokeList({ listPoke }) {
  if (listPoke.length == 0) {
    return <div>No hay pokemones</div>;
  }
  return (
    <div
      className=" flex flex-wrap justify-center gap-2 m-4 "
    >
      {listPoke.map((poke, i) => (
        <PokeCard key={i} poke={poke} />
      ))}
    </div>
  );
}

export default PokeList;
