"use client";
import React, { useEffect, useState } from "react";
import personagens from "@/data/charactersApi";
import listPerso from "../models/listPerso";
import style from "./page.module.css";
import PopUp from "./components/PopUp/popUp";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
import Header from "./components/header/Header";

const listaPersonagens = new listPerso();

function page() {
  const [page, setPage] = useState(1);
  const [listPerso, setListaPerso] = useState([]);
  const [dadosApi, setDadosApi] = useState(null);
  const [escuro, setEscuro] = useState(false);
  const [flag, setFlag] = useState(0);
  const [editButton, setEditButton] = useState(false);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page < 34) {
      setPage(page + 1);
    }
  };

  const edit = (person) => {
    setNome(person.name);
    setEstado(person.status);
    setEspecie(person.species);
    setGenero(person.gender);
    setImage(person.image);

    setEditButton(true);
    setFlag(person);
  };

  const update = () => {
    listaPersonagens.atualizarEdicao(
      flag,
      name,
      status,
      species,
      gender,
      image
    );

    atualizarEdit();
    setEditButton(false);
    setFlag(0);
  };

  const atualizarEdit = () => {
    setNome("");
    setEstado("");
    setEspecie("");
    setGenero("");
    setImage("");

    setNome(listaPersonagens.name);
    setEstado(listaPersonagens.status);
    setEspecie(listaPersonagens.species);
    setGenero(listaPersonagens.gender);
    setImage(listaPersonagens.image);
  };

  useEffect(() => {
    let ignore = false;

    const rickmortyFetch = async () => {
      try {
        const dados = await personagens(page);
        if (!ignore) {
          listaPersonagens.addApiData(dados);
          setDadosApi(dados);
          setListaPerso(listaPersonagens.getListaPerso());
        }
      } catch (e) {
        throw e;
      }
    };
    rickmortyFetch();

    return () => {
      ignore = true;
    };
  }, [page]);

  const [name, setNome] = useState("");
  const [status, setEstado] = useState("");
  const [species, setEspecie] = useState("");
  const [gender, setGenero] = useState("");
  const [image, setImage] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  const handleSubmit = () => {
    try {
      if (!name || !status || !species || !gender || !image) {
        return handleShowPopup("Parâmetros incompletos", "error");
      }
      listaPersonagens.add(name, status, species, gender, image);
      setNome("");
      setEstado("");
      setEspecie("");
      setGenero("");
      setImage("");
      handleShowPopup("Cadastro concluído", "success");
    } catch (error) {
      handleShowPopup("Erro aleatório", "error");
    }
  };

  const deletePers = (person) => {
    listaPersonagens.deletePers(person);
    setListaPerso(listaPersonagens.getListaPerso());
  };

  const handleShowPopup = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const tema = {
    backgroundColor: escuro ? "#1e2a39" : "#d9f7c8bc",
    color: escuro ? "#43ff2a" : "#1e2a39",
  };

  const tema2 = {
    backgroundColor: escuro ? "#d9f7c8bc" : "#1e2a39",
    color: escuro ? "#1e2a39" : "#43ff2a",
  };

  return (
    <>
      <Header />
      <div className={style.body} style={tema}>
        <div className={style.imgLogo}>
          <img src="/Rick-and-Morty.png" width={900} height={500} />
        </div>
        <div className={style.imgLogoMobile}>
          <img src="/Rick-and-Morty.png" width={400} height={200} />
        </div>
        <div className={style.container}>
          <button
            className={`${style.button} ${style.buttons}`}
            onClick={() => {
              setEscuro((old) => !old);
            }}
          >
            Tema
          </button>

          <div className={style.paginacao}>
            <button
              className={`${style.button} ${style.buttons}`}
              onClick={previous}
            >
              Anterior
            </button>
            <button
              className={`${style.button} ${style.buttons}`}
              onClick={next}
            >
              Próximo
            </button>
          </div>

          <div className={style.lista}>
            {dadosApi ? (
              // Exibir 20 persobagens por página
              listPerso.map((person) =>
                person.id <= page * 20 && person.id > page * 20 - 20 ? (
                  <div key={person.id} className={style.card} style={tema2}>
                    <div className={style.content}>
                      <h2 className={style.p}>{person.name}</h2>
                      <img
                        src={person.image}
                        alt={person.name}
                        width={150}
                        height={150}
                      />
                      <p className={style.p}>
                        <strong>Estado: </strong>
                        {person.status}
                      </p>
                      <p className={style.p}>
                        <strong>Especie: </strong>
                        {person.species}
                      </p>
                      <p className={style.p}>
                        <strong>Gênero: {person.gender} </strong>
                      </p>
                      <button
                        className={style.remove}
                        onClick={() => deletePers(person)}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )
            ) : (
              <Loading />
            )}
          </div>

          <div className={style.app} style={tema2}>
            <h1 className={style.title}>Cadastre seu personagem aqui!</h1>
            <input
              value={name}
              className={style.input}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              placeholder="Digite o nome"
            />
            <input
              value={status}
              className={style.input}
              onChange={(e) => setEstado(e.target.value)}
              type="text"
              placeholder="Digite o estado (vivo, morto ...)"
            />
            <input
              value={species}
              className={style.input}
              onChange={(e) => setEspecie(e.target.value)}
              type="text"
              placeholder="Digite a espécie"
            />
            <input
              value={gender}
              className={style.input}
              onChange={(e) => setGenero(e.target.value)}
              type="text"
              placeholder="Digite o gênero"
            />
            <input
              value={image}
              className={style.input}
              onChange={(e) => setImage(e.target.value)}
              type="text"
              placeholder="Link da imagem"
            />
            <button
              className={style.button}
              type="button"
              onClick={handleSubmit}
            >
              Cadastrar
            </button>
            <button
              className={style.button}
              type="button"
              value={editButton}
              onClick={() => update()}
            >
              Salvar
            </button>
            <p>
              {showPopup && <PopUp message={popupMessage} type={popupType} />}
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default page;
