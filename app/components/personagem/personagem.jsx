import React from 'react'
import style from "../personagem/personagem.module.css"

const deletePers = (id) => {
  instanciaLista.deletePers(id);
  setListaPers(instanciaLista.getListaPers());
}

const personagem = ({ person, deletePers }) => {
  return (
    <div >
      <div className={style.card}>
        <div className={style.content} >
          <p className={style.p}><strong>Nome:</strong>{person.nome}</p>
          <p className={style.p}><strong>Estado: </strong>{person.estado}</p>
          <p className={style.p}><strong>Especie: </strong>{person.especie}</p>
          <p className={style.p}><strong>Gênero: </strong>{person.genero}</p>
          <p className={style.p}><strong>Imagem: </strong>{person.image}</p>

        </div>
        <div>
          <button className={style.remove} onClick={() => deletePers()}>Excluir</button>
        </div>
      </div>
    </div>
  )
}

export default personagem