import { useContext } from 'react';

import { UserContext } from '../../assets/contexts/user';

function Teste() {
  const { alunos, setAlunos } = useContext(UserContext);

  return (
    <div>
      <span style={{ color: '#FF0000' }} >Bem vindo: {alunos} </span>
      <br/>
      <button onClick={ () => setAlunos('Lucas Silva') } >Troca Testes</button>
    </div>
  );
}

export default Teste;