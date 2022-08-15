import React, { useEffect, useState } from 'react';
import firebase from '../../firebaseConnection';
import './styles.css';

function InputData() {

    const [frase, setFrase] = useState('');
    const [categoria, setCategoria] = useState('');
    const [qtdUsos, setQtdUsos] = useState('');

    const [preenchido, setPreenchido] = useState(false);

    useEffect(() => {
        if (preenchido) {
            async function addReg() {
                await firebase.firestore().collection('tb_frases')
                    .add({
                        qtdUsos: qtdUsos,
                        frase: frase,
                        categoria: categoria
                    })
                    .then(() => {
                        console.log('cadastrou');
                        setFrase('');
                        setCategoria('');
                        setQtdUsos('');
                    })
                    .catch(() => {
                        console.log('Não cadastrou');
                    })
                }
                addReg();
            }
            setPreenchido(false);
    }, [preenchido])

    function handleSubmit(e) {
        e.preventDefault();
        setPreenchido(true);
        console.log(preenchido);
    }

    function handleChangeSelect(e){
        setCategoria(e.target.value);
    }    

    return (
        <div className='inputData-container'> 
            <div className='inputData-painel'>
                <form onSubmit={handleSubmit}>
                    <label for="frase">Frase: </label><br />
                    <textarea cols="48" rows="10" className="input-frase" value={frase} onChange={(e) => setFrase(e.target.value)}></textarea><br />

                    <label for="categoria">Categoria: </label><br />
                    <input type="text" name="categoria" className="inputData-input" value={categoria} onChange={(e) => setCategoria(e.target.value)} /><br />

  <select value={categoria} onChange={handleChangeSelect} name="categoria" className="inputData-input">
    <option value="Pacotes">Pacotes</option>
    <option value="Contas">Contas</option>
    <option value="Chegada">Chegada</option>
    <option value="Vendas">Vendas</option>
    <option value="Aluguel casa">Aluguel casa</option>
    <option value="Orientação">Orientação</option>
    <option value="da Pousada">da Pousada</option>
    <option value="Check-in">Check-in</option>
    <option value="Mensalistas">Mensalistas</option>
  </select>
                    
                    <br />
                    <label for="categoria">Quantidade de usos: </label>
                    <input type="text" name="qtdUsos" className="inputData-input" value={qtdUsos} onChange={(e) => setQtdUsos(e.target.value)} /><br />
                    <button className="inputData-button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default InputData;