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
                    lista.sort((a,b) => (a.qtdUsos > b.qtdUsos) ? -1 : ((b.qtdUsos > a.qtdUsos) ? 1 : 0));
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

    return (
        <div className='container'>
            <h1 className='titulo'>Frases</h1>
            <div className='box-container'>
                {frases.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className='frase-container'>
                                <textarea className='textarea-container' defaultValue={item.frase}></textarea><br />
                            </div>
                            <div className='buttons-container'>
                                <button onClick={() => copiaIndice(item.id, item.frase, item.categoria, item.qtdUsos)} alt="Copia texto para a área de trabalho">Copiar</button>
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