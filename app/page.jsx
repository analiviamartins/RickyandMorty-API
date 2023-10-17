'use client'
import React, { useEffect, useState } from "react"
import personagens from "@/data/charactersApi";

function page() {
  const [dadosApi, SetDadosApi] = useState(null);

  useEffect(() => {
    const rickmortyFetch = async () => {
      try {
        const dados = await personagens();
        SetDadosApi(dados);
        //console.log(dados);
      } catch (e) {
        throw e;
      }
    }

    rickmortyFetch();

  }, []);
  return (
    <div>
      <h1>Ricky And Morty</h1>
      {
        dadosApi ? (
          dadosApi.results.map((personagens, index) => (
            <div key={index}>
              <h2>
                {personagens.name}
              </h2>
              <img src={personagens.avatar} width={150} height={130} />
              <p>
                {personagens.status}
               </p>
               <p>
               {personagens.species}
               </p>
               <p>
                {personagens.gender}
               </p>
            </div>
          ))
        )
          : (
            <h2>Carregando...</h2>
          )
      }
    </div>
  )
}
export default page;