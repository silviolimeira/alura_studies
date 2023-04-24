import React, { PropsWithChildren } from 'react';

import style from './Botao.module.scss';

const Botao = (props: PropsWithChildren) => {
    return (
        <button className={style.botao}>
            {props.children}
        </button>
    )
}

export default Botao;