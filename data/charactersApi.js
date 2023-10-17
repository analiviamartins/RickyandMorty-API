import axios from "axios";

const URL_CHARACTERS = 'https://rickandmortyapi.com/api/character'

const personagens = async () => {
    try{
        const resposta = await axios.get(URL_CHARACTERS);
        return resposta.data;
    }catch (error){
        throw error;
    }
}
export default personagens;