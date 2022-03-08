import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../components/context";

export default function ThumbnailCard({ results, currentid }) {
  const { closeDetail } = useGlobalContext();
  const [currentMovie, setCurrentMovie] = useState(null);

  useEffect(() => {
    results.map((result) => {
      if (result.id === currentid) {
        setCurrentMovie(result);
      }
    });
  }, []);

  console.log(currentMovie);

  return (
    <div className="h-screen absolute w-screen flex justify-center items-center z-50">
      <div
        onClick={() => closeDetail()}
        className="absolute z-0 bg-black opacity-50 h-screen w-screen"
      ></div>
      {/* CARD CONTAINER */}
      <div className="h-3/4 w-8/12 bg-zinc-900  z-50 opacity-100">
        <button
          onClick={() => closeDetail()}
          className="absolute right-80 pr-3 text-3xl"
        >
          X
        </button>
        <div className="h-2/4 flex items-end bg-cover bg-[url('https://image.tmdb.org/t/p/original/k47JEUTQsSMN532HRg6RCzZKBdB.jpg')]">
          {/* details on top modal */}
          <div className="h-2/4 w-full flex items-center bg-gradient-to-t from-zinc-900 to-transparent">
            <h1 className="text-4xl font-medium">
              {currentMovie && currentMovie.title}
            </h1>
          </div>
        </div>
        <button>play</button>
        <button>+</button>
        <button>like</button>
        <button>deslike</button>
        <p>84% relevance 1 season 2022</p>
        <p>{currentMovie && currentMovie.overview}</p>
      </div>
    </div>
  );
}
