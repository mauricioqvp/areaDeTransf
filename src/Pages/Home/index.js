import firebase from '../../firebaseConnection';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

function Home() {

    const [frases, setFrases] = useState([]);

    useEffect(() => {
        async function readRegister() {

            await firebase.firestore().collection('tb_frases')
                .get()
                .then((snapshot) => {
                    let lista = [];

                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            frase: doc.data().frase,
                            categoria: doc.data().categoria,
                            qtdUsos: doc.data().qtdUsos
                        });
                    });
                    setFrases(lista);
                })
                .then(() => {
                    console.log('Lido com sucesso...');
                })
                .catch(() => {
                    alert('Falha ao ler o registro.');
                })
        }

        readRegister();

    }, []);

    function copiaIndice(frase){
        navigator.clipboard.writeText(frase);
        toast.success("Área de transferência");
    }

    return (
        <div className='container'>
            <h1 className='titulo'>Frases</h1>
            <div className='box-container'>
                {frases.map((item) => {
                    return (
                        <div>
                            <div className='frase-container'>
                                <span>{item.frase}</span><br/>
                            </div>
                                <div className='buttons-container'>
                                    <button onClick={() => copiaIndice(item.frase)} alt="Copia texto para a área de trabalho">Copiar</button>
                                    - usadas <strong>{item.qtdUsos}</strong> vezes.
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