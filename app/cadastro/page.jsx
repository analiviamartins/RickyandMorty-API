"use client"
import React, { useState } from 'react'
import listPerso from '../../models/listPerso'
import Person from '../../models/persons'
import Cadastro from "../components/form/form"


const listaPersonagens = new listPerso();
export default function cadastro() {
  const [nome, setNome] = useState("");
  const [estado, setEstado] = useState("");
  const [especie, setEspecie] = useState("");
  const [genero, setGenero] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!nome || !estado || !especie || !genero || !image) return;

    const person = new Person(nome, estado, especie, genero, image)
    console.log(person);

    listaPersonagens.add(person)

    setNome("");
    setEstado("");
    setEspecie("");
    setGenero("");
    setImage("");
  };

 

  return (
    <div>
      <Cadastro cadastro={cadastro} handleSubmit={handleSubmit} />
    </div>
  )
}
