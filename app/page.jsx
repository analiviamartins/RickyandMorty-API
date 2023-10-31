'use client'
import React, { useEffect, useState, } from "react"
import personagens from "@/data/charactersApi";
import listPerso from '../models/listPerso'
import style from '../app/page.module.css'
import PopUp from '../app/components/PopUp/popUp';
import Footer from '../app/components/Footer/footer';
import Link from "next/link";


const listaPersonagens = new listPerso();
console.log(listaPersonagens)
function page() {
  const [listPerso, setListaPerso] = useState([]);
  const [dadosApi, SetDadosApi] = useState(null);
  const [escuro, setEscuro] = useState(false);

  const editPers = (person) => {
    setNome(person.name);
    setEstado(person.status);
    setEspecie(person.species);
    setGenero(person.gender);
    setImage(person.image);
    listaPersonagens.deletePers(person);
    setListaPerso(listaPersonagens.getListaPerso());
  }

  useEffect(() => {
    let ignore = false;

    const rickmortyFetch = async () => {
      try {
        const dados = await personagens()
        if (!ignore) {
        SetDadosApi(dados);
        listaPersonagens.addApiData(dados);
        SetDadosApi(listaPersonagens.getListaPerso());
        }
      } catch (e) {
        throw e;
      }
    };
    rickmortyFetch();
    
    return () => {
      ignore = true;
    };

  }, []);

  const [name, setNome] = useState("");
  const [status, setEstado] = useState("");
  const [species, setEspecie] = useState("");
  const [gender, setGenero] = useState("");
  const [image, setImage] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  const handleSubmit = () => {
    try {
      if (!name || !status || !species || !gender || !image) {
        return handleShowPopup("Parâmetros incompletos", "error")
      }
      listaPersonagens.add(name, status, species, gender, image);
      setNome("");
      setEstado("");
      setEspecie("");
      setGenero("");
      setImage("");
      handleShowPopup("Cadastro concluído", "success")
      } catch (error) {
        handleShowPopup("Erro aleatório", "error");
      }

      console.log(handleSubmit)
    };

    const deletePers = (person) => {
      listaPersonagens.deletePers(person);
      setListaPerso(listaPersonagens.getListaPerso());
    }
    

    const handleShowPopup = (message, type) => {
      setPopupMessage(message)
      setPopupType(type)
      setShowPopup(true)
      setTimeout(() => {
        setShowPopup(false)
      }, 3000)
    }

    const tema = {
      backgroundColor: escuro ? "#1e2a39" : "#d9f7c8bc", 
      color: escuro ? "#43ff2a" : "#1e2a39",
    }

    const tema2 = {
      backgroundColor: escuro ? "#d9f7c8bc" : "#1e2a39", 
      color: escuro ? "#1e2a39" : "#43ff2a",
    }

    return (
        
      <div className={style.body} style={tema}>
        <div className={style.imgLogo}>
          <img src="/Rick-and-Morty.png" width={900} height={500} />
        </div>

        <div className={style.imgLogoMobile}>
          <img src="/Rick-and-Morty.png" width={400} height={200} />
        </div>

      <div className={style.container}>

        <button onClick={() => { setEscuro(old => ! old) }} className={style.button}>Tema</button>
        <div className={style.app} style={tema2}>

        <div className={style.app}>

          <h1 className={style.title}>Cadastre seu personagem aqui!</h1>
          <input value={name} className={style.input} onChange={(e) => setNome(e.target.value)} type="text" placeholder='Digite o nome' />
          <input value={status} className={style.input} onChange={(e) => setEstado(e.target.value)} type="text" placeholder='Digite o estado (vivo, morto ...)' />
          <input value={species} className={style.input} onChange={(e) => setEspecie(e.target.value)} type="text" placeholder='Digite a espécie' />
          <input value={gender} className={style.input} onChange={(e) => setGenero(e.target.value)} type="text" placeholder='Digite o gênero' />
          <input value={image} className={style.input} onChange={(e) => setImage(e.target.value)} type="text" placeholder='Link da imagem' />
          <button className={style.button} type='button' onClick={handleSubmit}>Cadastrar</button>
          <p>{showPopup && (
            <PopUp
              message={popupMessage}
              type={popupType}
            />
          )}</p>
          </div>

          <div className={style.lista}>

            {listaPersonagens.listaPerso.map((person) => (
              <div className={style.card} style={tema2}>
                <div className={style.content} >
                  <h2 className={style.p}>{person.name}</h2>
                  <img src={person.image} alt={person.name} width={150} height={150}/>
                  <p className={style.p}><strong>Estado: </strong>{person.status}</p>
                  <p className={style.p}><strong>Especie: </strong>{person.species}</p>
                  <p className={style.p}><strong>Gênero: {person.gender} </strong></p>
                  <button className={style.remove} onClick={() => deletePers(person)}>Excluir</button>
                  <button className={style.edit} onClick={() => editPers(person)}>Editar</button>
                </div>
                
              </div>
            ))}
          </div>
        </div>
              <Footer />
    </div>
    </div>
)}
  export default page;