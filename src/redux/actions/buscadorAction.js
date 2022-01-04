import * as axios from 'axios';
export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (Pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
}

const fetchPokemon = (valor) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${valor}`)
            .then(response => {
                dispatch(fetchPokemonSuccess([response.data]));
            })
            .catch(error => {
                console.log(error.response);
                dispatch(fetchPokemonFailure('No se encontro el Pokemon'));
            });
    }
}

export default fetchPokemon;