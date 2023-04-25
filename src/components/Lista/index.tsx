import React, { useState } from 'react';

import style from './Lista.module.scss';
import { Item } from './Item';

function Lista() {
    const [tarefas, setTarefas] = useState([
        { tarefa: 'React', tempo: '02:00:00' },
        { tarefa: 'Javascript', tempo: '02:00:00' },
        { tarefa: 'Typescript', tempo: '03:00:00' }
    ]);

    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => {
                console.log("onClick h1 Estudos do dia");
                setTarefas([...tarefas, { tarefa: 'Estudar estado', tempo: '05:00:00' }]);
            }}>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item key={index} {...item} />
                ))}
            </ul>
        </aside >
    )
}

export default Lista;