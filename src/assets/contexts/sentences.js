
import { useState, createContext } from 'react';


export const SentencesContext = createContext({});

function UserProvider({children}){
  const [alunos, setAlunos] = useState('Sujeito Programador');
  const [qtdAlunos, setQtdAlunos] = useState(85);

  return(
    <SentencesContext.Provider value={{ alunos, setAlunos, qtdAlunos }}>
      {children}
    </SentencesContext.Provider>
  )
}

export default UserProvider;