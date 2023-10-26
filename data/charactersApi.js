import axios from "axios";

let URL_CHARACTERS = 'https://rickandmortyapi.com/api/character/?page'

export function characpage(page){
    URL_CHARACTERS= `https://rickandmortyapi.com/api/character/?page=${page}`
    return URL_CHARACTERS;
}

const personagens = async () => {
    try{
        const resposta = await axios.get(URL_CHARACTERS);
        return resposta.data.results;
    }catch (error){
        throw error;
    }
}

export default personagens;