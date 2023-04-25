
import React from 'react';
import Botao from '../Botao';

import style from './Formulario.module.scss';

class Formulario extends React.Component {
    render() {
        return (
            <form className={style.novaTarefa}>
                <div className={style.inputContainer}>
                    <label htmlFor="tarefa"></label>
                    <input type="text" name="tarefa" id="tarefa" placeholder='O que você quer estudar' required></input>
                </div>
                <div className={style.inputContainer}>
                    <label>Tempo</label>
                    <input type="time" step="1" name="tempo" id="tempo" min="00:00:00" max="01:30:00" required></input>
                </div>
                <Botao>Adicionar 1</Botao>
                <p>001</p>
            </form >
        )
    }
}

export default Formulario;