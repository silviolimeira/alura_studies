import React from 'react';
import Botao from '../components/Botao';
import Formulario from '../Formulario';
import Lista from '../components/Lista';

import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      Hello World!
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
