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

    return (
        <div className='container'>
            <div className='painel'>
                <form onSubmit={handleSubmit}>
                    <label for="frase">Frase: </label>
                    <input type="text" name="frase" value={frase} onChange={(e) => setFrase(e.target.value)} /><br />
                    <label for="categoria">Categoria: </label>
                    <input type="text" name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} /><br />
                    <label for="categoria">Quantidade de usos: </label>
                    <input type="text" name="qtdUsos" value={qtdUsos} onChange={(e) => setQtdUsos(e.target.value)} /><br />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default InputData;