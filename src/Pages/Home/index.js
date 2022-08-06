import firebase from '../../firebaseConnection';
import React, { useEffect, useState } from 'react';

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

    function copiaIndice(indice, frase){
        navigator.clipboard.writeText(frase);
    }

    return (
        <>
            <h1>Frases</h1>
            {frases.map((item) => {
                return (
                    <div>
                        <span key={item.id}>Frase: </span>
                        <span>{item.frase} - usadas <strong>{item.qtdUsos}</strong> vezes.</span>
                        <button onClick={() => copiaIndice(item.id, item.frase)} alt="Copia texto para a área de trabalho">Copiar</button>
                        <br />
                    </div>
                )
            })
            }
        </>
    );
}

export default Home;