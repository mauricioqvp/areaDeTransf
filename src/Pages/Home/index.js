import firebase from '../../firebaseConnection';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function Home() {

    const [frases, setFrases] = useState([]);
    const [categoria, setCategoria] = useState('Escolha a categoria');

    useEffect(() => {
        async function readRegister() {

            await firebase.firestore().collection('tb_frases')
                .get()
                .then((snapshot) => {
                    var lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            frase: doc.data().frase,
                            categoria: doc.data().categoria,
                            qtdUsos: doc.data().qtdUsos
                        })
                    });

                    lista.sort((a, b) => (a.qtdUsos > b.qtdUsos) ? -1 : ((b.qtdUsos > a.qtdUsos) ? 1 : 0));
                    setFrases(lista);
                })
                .then(() => {
                    console.log('Lido com sucesso...');
                    console.log(categoria);
                })
                .catch(() => {
                    alert('Falha ao ler o registro.');
                })
        }

        readRegister();

    }, [categoria]);

    async function copiaIndice(id, frase, categoria, usos) {
        navigator.clipboard.writeText(frase);
        toast.success("Área de transferência");

        await firebase.firestore().collection('tb_frases')
            .doc(id)
            .set({
                id: id,
                frase: frase,
                categoria: categoria,
                qtdUsos: usos + 1
            })
            .then(() => {
                console.log('Gravada a nova qtdUsos na frase escolhida');
            });
    }

    async function atualizaConteudo(id, frase) {
        navigator.clipboard.writeText(frase);
        toast.success("Área de transferência");

        // corrigir esta rotina para update deste conteúdo
        await firebase.firestore().collection('tb_frases')
            .doc(id)
            .set({
                id: id,
                frase: frase,
            })
            .then(() => {
                console.log('Não está fazendo a tarefa correta.');
            });
    }

    function handleChangeSelect(e) {
        setCategoria(e.target.value);
    }

    return (
        <div className='container'>
            <div className='titulo-frases'>
                <div className='titulo-esquerdo'></div>
                <h1 className='titulo'>Frases</h1>
                <div className='titulo-direito'>
                    <select value={categoria} onChange={handleChangeSelect} name="categoria" className="frase-input">
                        <option value={categoria}>{categoria}</option>
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
                </div>
            </div>
            <div className='box-container'>
                {frases.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className='frase-container'>
                                <div><strong>{item.qtdUsos} - {item.categoria}</strong></div>
                                <textarea
                                    className='textarea-container'
                                    value={`${categoria}` === "Escolha a categoria" ? item.frase : item.frase}>
                                </textarea><br />
                            </div>
                            <div className='buttons-container'>
                                <button
                                    className='btn-copiar'
                                    onClick={() => copiaIndice(item.id, item.frase, item.categoria, item.qtdUsos)}
                                    alt="Copia texto para a área de trabalho">
                                    Copiar
                                </button>
                                <button
                                    className='btn-editar'
                                    onClick={() => atualizaConteudo(item.id, item.frase)}
                                    alt="Atualizar com este conteúdo.">
                                    Editar
                                </button>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    );
}

export default Home;