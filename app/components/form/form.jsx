'use client'
import { useState } from 'react'
import style from '../form/form.module.css'
import listPerso from '../../../models/listPerso'
import Personagem from '../personagem/personagem'


const listaPersonagens = new listPerso();
const cadastro = ({ }) => {
    const [nome, setNome] = useState("");
    const [estado, setEstado] = useState("");
    const [especie, setEspecie] = useState("");
    const [genero, setGenero] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = () => {
        if (!nome || !estado || !especie || !genero || !image) return;
        listaPersonagens.add(nome, estado, especie, genero, image);
        setNome("");
        setEstado("");
        setEspecie("");
        setGenero("");
        setImage("");

    };

    isURLValida = (image) => {
        if(image.match(/\.(jpeg|jpg|gif|png)$/) != null){
            return true;
        } else {
            return false;
        }
    }


    return (
        <div className={style.app}>
            <h1 className={style.title}>Cadastre seu personagem aqui!</h1>
            <input value={nome} className={style.input} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Digite o nome' />
            <input value={estado} className={style.input} onChange={(e) => setEstado(e.target.value)} type="text" placeholder='Digite o estado (vivo, morto ...)' />
            <input value={especie} className={style.input} onChange={(e) => setEspecie(e.target.value)} type="text" placeholder='Digite a espécie' />
            <input value={genero} className={style.input} onChange={(e) => setGenero(e.target.value)} type="text" placeholder='Digite o gênero' />
            <input isURLValida={isURLValida} value={image} className={style.input} onChange={(e) => setImage(e.target.value)} type="text" placeholder='Link da imagem' />
            <button className={style.button} type='button' onClick={handleSubmit}>Cadastrar</button>
            <div className={style.lista}>
                {listaPersonagens.listaPerso.map((person) => (
                    <Personagem key={person.id} person={person} handleSubmit={handleSubmit} />
                ))}
            </div>
        </div>
    )
}


export default cadastro