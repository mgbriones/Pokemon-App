import { useState, useEffect } from "react";
import InfoPokeModal from "./InfoPokeModal";

function PokeCard({ poke }) {
  const [infoPoke, setInfoPoke] = useState();
  const [picture, setPicture] = useState();
  const [modalOn, setModalOn] = useState(false);

  async function showPicture() {
    const response = await fetch(poke.url);
    const data = await response.json();
    setInfoPoke(data);
    setPicture(data.sprites.other.home.front_default);
  }

  useEffect(() => {
    showPicture();
  }, []);

  const viewModal = () => {
    setModalOn(!modalOn);
  };

  return (
    <div>
      <button onClick={viewModal}>
        {/* parece que aqui ahi una ADVERTENCIA:
       Warning: Received `true` for a non-boolean attribute `on`.*/}
        <div className="w-40 bg-indigo-200 hover:bg-indigo-100 hover:drop-shadow-2xl hover:text-black bg-opacity-70 text-white rounded-lg text-center font-bold capitalize">
          <p className="p-4">{poke.name}</p>
          <img src={picture} alt={poke.name} className=" p-2 max-w" />
        </div>
      </button>

      {modalOn && (
        <InfoPokeModal name={poke.name} info={infoPoke} picture={picture} viewModal={viewModal}/>
      )}
    </div>
  );
}

export default PokeCard;
