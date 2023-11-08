import axios from "axios";

const personagens = async (page) => {
  try {
    const resposta = await axios.get(
      `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    return resposta.data.results;
  } catch (error) {
    throw error;
  }
};

export default personagens;
