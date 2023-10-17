import React from 'react'
import style from "../personagem/personagem.module.css"

const Personagem = ( {personagem, deletePers, atualizarCadas}) => {
  return (
    <div >
      <div className={style.card}>
        <div className={style.content} >
          <p className={style.p}><strong>Nome: </strong>{personagem.nome}</p>
          <p className={style.p}><strong>Estado: </strong>{personagem.estado}</p>
          <p className={style.p}><strong>Especie: </strong>{personagem.especie}</p>
          <p className={style.p}><strong>Local: </strong>{personagem.local}</p>
          <p className={style.p}><strong>Episodio: </strong>{personagem.episodio}</p>
          <p className={style.p}><strong>Imagem: </strong>{personagem.image}</p>
        </div>
        <div>
          <button className={style.remove} onClick={() => deletePers(carro.id)}>Excluir</button> 
          </div>
      </div>
    </div>
  )
}

export default Personagem