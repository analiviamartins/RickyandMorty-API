'use client'
import { useState } from 'react'
import style from '../form/form.module.css'


const cadastro = ({ add }) => {
    const [nome, setNome] = useState("");
    const [estado, setEstado] = useState("");
    const [especie, setEspecie] = useState("");
    const [image, setImage] = useState("");
  
    const handleSubmit = () => {
      if (!nome || !estado || !especie || !image) return;
      addCar(nome, estado, especie, image);
      setNome("");
      setEstado("");
      setEspecie("");
      setImage("");
    };

    return (
        <div className={style.app}>
            <h1 className={style.title}>Cadastre seu personagem aqui!</h1>
            <input value={nome} className={style.input} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Digite o nome' />
            <input value={estado} className={style.input} onChange={(e) => setEstado(e.target.value)} type="text" placeholder='Digite o estado (vivo, morto ...)' />
            <input value={especie} className={style.input} onChange={(e) => setEspecie(e.target.value)} type="text" placeholder='Digite a espécie' />
            <input value={image} className={style.input} onChange={(e) => setImage(e.target.value)} type="text" placeholder='Link da imagem' />
            <button className={style.button} type='button' onClick={handleSubmit}>Cadastrar</button>
        </div>
    )
}


export default cadastro