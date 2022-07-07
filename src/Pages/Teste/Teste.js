import { useContext } from 'react';

import { SentencesContext } from '../../assets/contexts/sentences';

function Teste() {
  const { alunos, setAlunos } = useContext(SentencesContext);

  return (
    <div>
      <span style={{ color: '#FF0000' }} >Bem vindo: {alunos} </span>
      <br/>
      <button onClick={ () => setAlunos('Lucas Silva') } >Troca Testes</button>
    </div>
  );
}

export default Teste;