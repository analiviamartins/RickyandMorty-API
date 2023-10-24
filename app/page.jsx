'use client'
import React, { useEffect, useState } from "react"
import personagens from "@/data/charactersApi";
import listPerso from '../models/listPerso'
import style from '../app/page.module.css'



const listaPersonagens = new listPerso();

function page() {
  const [listPerso, setListaPerso] = useState([]); 
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
    
    const deletePers = (person) => {
      listaPersonagens.deletePers(person);
      setListaPerso(listaPersonagens.getListaPerso());
    }

  return (
    <div className="container">
      <div id="img-logo">
        <img src="/Rick-and-Morty.png" width={900} height={500} />
      </div>
      {
        dadosApi ? (
          dadosApi.results.map((personagens, index) => (
            <div key={index} className="card">
              <h2>
                {personagens.name}
              </h2>
              <img src={personagens.image} width={150} height={130} />
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
      <div className={style.app}>
        <h1 className={style.title}>Cadastre seu personagem aqui!</h1>
        <input value={nome} className={style.input} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Digite o nome' />
        <input value={estado} className={style.input} onChange={(e) => setEstado(e.target.value)} type="text" placeholder='Digite o estado (vivo, morto ...)' />
        <input value={especie} className={style.input} onChange={(e) => setEspecie(e.target.value)} type="text" placeholder='Digite a espécie' />
        <input value={genero} className={style.input} onChange={(e) => setGenero(e.target.value)} type="text" placeholder='Digite o gênero' />
        <input value={image} className={style.input} onChange={(e) => setImage(e.target.value)} type="text" placeholder='Link da imagem' />
        <button className={style.button} type='button' onClick={handleSubmit}>Cadastrar</button>
        <div className={style.lista}>
                {listaPersonagens.listaPerso.map((person) => (
                    <div className={style.card}>
                    <div className={style.content} >
                      <p className={style.p}><strong>Nome:</strong>{person.nome}</p>
                      <p className={style.p}><strong>Estado: </strong>{person.estado}</p>
                      <p className={style.p}><strong>Especie: </strong>{person.especie}</p>
                      <p className={style.p}><strong>Gênero: </strong>{person.genero}</p>
                      <p className={style.p}><strong>Imagem: </strong>{person.image}</p>
                      <button className={style.remove} onClick={() => deletePers(person)}>Excluir</button>
                      <button className={style.edit} onClick={() => editPers(person)}>Editar</button>
                    </div>
                    
                  </div>
                ))}
            </div>
      </div>
    </div>
  )
          }

export default page;