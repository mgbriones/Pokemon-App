import React from "react";

function InfoPokeModal({ name, info, picture, viewModal }) {
  return (
    <div className="fixed inset-0 bg-opacity-40 z-50 bg-zinc-200">
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 bg-white  rounded-xl p-9">
          <div className="m-2">
            <img src={picture} alt={name} className="row-span-3 w-48 " />

            <p className="capitalize text-center font-bold ">{name}</p>
          </div>

          <div>
            <div className="text-right m-2">
              <button onClick={viewModal}> X </button>
              <div className="text-left capitalize">
                <p>
                  base experience: <b>{info.base_experience}</b>
                </p>
                <p>
                  weight: <b>{info.weight}</b>
                </p>
                <p>
                  height: <b>{info.height}</b>
                </p>
                <p>
                  Type: <b>{info.types[0].type.name}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPokeModal;
