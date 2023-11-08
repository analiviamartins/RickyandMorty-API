"use client";

import { useEffect, useState } from "react";
import personagens from "@/data/charactersApi";
import listPerso from "../models/listPerso";
import style from "./page.module.css";
import PopUp from "./components/PopUp/popUp";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
import Header from "./components/header/Header";

const listaPersonagens = new listPerso();

function page() {
  // Inputs
  const [name, setNome] = useState("");
  const [status, setEstado] = useState("");
  const [species, setEspecie] = useState("");
  const [gender, setGenero] = useState("");
  const [image, setImage] = useState("");

  // PopUp
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("");

  // Api
  const [page, setPage] = useState(1);
  const [listPerso, setListaPerso] = useState([]);
  const [dadosApi, setDadosApi] = useState(null);

  // Edit
  const [flag, setFlag] = useState(0);
  const [editButton, setEditButton] = useState(false);

  // Tema
  const [escuro, setEscuro] = useState(false);

  // Paginação
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

  const handleSubmit = () => {
    try {
      if (!name || !status || !species || !gender || !image) {
        return handleShowPopup("Parâmetros incompletos", "error");
      }
      listaPersonagens.add(name, status, species, gender, image);
      atualizarEdit();
      handleShowPopup("Cadastro concluído", "success");
    } catch (error) {
      handleShowPopup("Erro aleatório", "error");
    }
  };

  const editPerso = (id) => {
    const person = listaPersonagens.getPersoPorId(id);
    setNome(person.name);
    setEstado(person.status);
    setEspecie(person.species);
    setGenero(person.gender);
    setImage(person.image);

    setEditButton(true);
    setFlag(id);
  };

  const update = () => {
    listaPersonagens.atualizarPerso(flag, name, status, species, gender, image);

    atualizarEdit();
    setEditButton(false);
    setFlag(0);
  };

  const deletePers = (person) => {
    listaPersonagens.deletePers(person);
    setListaPerso(listaPersonagens.getListaPerso());
  };

  const atualizarEdit = () => {
    setNome("");
    setEstado("");
    setEspecie("");
    setGenero("");
    setImage("");

    setListaPerso(listaPersonagens.getListaPerso());
    setEditButton(false);
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
          <img src="/Rick-and-Morty.png" width={900} height={300} />
        </div>
        <div className={style.imgLogoMobile}>
          <img src="/Rick-and-Morty.png" width={400} height={100} />
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
                        {person.status === "Alive"
                          ? "Vivo"
                          : person.status === "Dead"
                          ? "Morto"
                          : "Desconhecido"}
                      </p>
                      <p className={style.p}>
                        <strong>Especie: </strong>
                        {person.species === "Human"
                          ? "Humano"
                          : person.species === "Alien"
                          ? "Alienígena"
                          : person.species === "Humanoid"
                          ? "Humanóide"
                          : person.species === "Mythological Creature"
                          ? "Criatura Mitológica"
                          : person.species === "Poopybutthole"
                          ? "Poopybutthole"
                          : person.species === "Animal"
                          ? "Animal"
                          : person.species === "Robot"
                          ? "Robô"
                          : person.species === "Disease"
                          ? "Doença"
                          : person.species === "Vampire"
                          ? "Vampiro"
                          : person.species === "Cronenberg"
                          ? "Cronenberg"
                          : person.species === "unknown"
                          ? "Desconhecido"
                          : person.species}
                      </p>
                      <p className={style.p}>
                        <strong>
                          Gênero:{" "}
                          {person.gender === "Female"
                            ? "Feminino"
                            : person.gender === "Male"
                            ? "Masculino"
                            : "Desconhecido"}
                        </strong>
                      </p>
                      <div>
                        <button
                          className={style.remove}
                          onClick={() => deletePers(person)}
                        >
                          Excluir
                        </button>
                        <button
                          className={style.edit}
                          onClick={() => editPerso(person.id)}
                        >
                          Editar
                        </button>
                      </div>
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
            {editButton ? (
              <h1 className={style.h1}>Editar Personagem</h1>
            ) : (
              <h1 className={style.h1}>Cadastrar Personagem</h1>
            )}
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
            {editButton ? (
              <button className={style.button} onClick={update}>
                Atualizar
              </button>
            ) : (
              <button className={style.button} onClick={handleSubmit}>
                Cadastrar
              </button>
            )}
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
