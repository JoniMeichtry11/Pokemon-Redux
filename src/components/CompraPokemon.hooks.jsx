import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from './../redux/actions/gameShopAction';

const CompraPokemonHook = () => {

    const dispath = useDispatch();

    return (
        <>
            <div>
                <button className="btn btn-dark btn-sm mb-2" onClick={() => {dispath(buy_pokemon_action(1))}}>Comprar Pokemon</button>
                <button className="btn btn-dark btn-sm" onClick={() => {dispath(return_pokemon_action(1))}}>Regresar Pokemon</button>
            </div>
        </>
    );
}

export default CompraPokemonHook;