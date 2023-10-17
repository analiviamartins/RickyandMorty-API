"use client"
import React, { useState } from 'react'
import listPerso from '../models/listPerso'
import Perso from '../models/persons'
import Cadastro from "../components/form/form"

const listaPersonagens = new listPerso();
export default function cadastro() {
    const [nome, setNome] = useState("");
    const [estado, setEstado] = useState("");
    const [especie, setEspecie] = useState("");
    const [local, setLocal] = useState("");
    const [episodio, setEpisodio] = useState("");
    const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!nome || !estado || !especie || !local || !episodio || !image) return;

    const perso = new Perso(nome, estado, especie, local, episodio, image)
    console.log(perso);

    listaPersonagens.add(perso)

    setNome("");
    setEstado("");
    setEspecie("");
    setLocal("");
    setEpisodio("");
    setImage("");
  };


  return (
    <div>
      <Cadastro cadastro={cadastro} handleSubmit={handleSubmit}/>
    </div>
  )   
}