import React from 'react';

class Botao extends React.Component {
    render() {
        const estaAtivo = true;
        const backgroundColor = estaAtivo ? "green" : "red";
        return (
            <button style={{
                backgroundColor
            }}>
                Botão
            </button>
        )
    }
}

export default Botao;