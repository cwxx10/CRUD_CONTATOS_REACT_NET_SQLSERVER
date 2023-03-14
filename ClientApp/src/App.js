import React, { useEffect, useState } from 'react';
import TabelaContato from './component/TabelaContato';
import Cabecalho from './component/Cabecalho';
import './StyleSheet.css';

function App() {
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        fetch('api/contato/GetContatos', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setContatos(data);
            });
    }, []);

    const handleDelete = async (id) => {
        const response = await fetch(`api/contato/Delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        if (response.ok) {
            alert("Contato excluido!");
            fetch('api/contato/GetContatos', {
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((data) => {
                    setContatos(data);
                });
        }
    };

    const handleGuardarContato = (contato) => {
        fetch('api/contato/AddContato', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(contato)
        })
            .then((response) => response.json())
            .then((data) => {
                fetch('api/contato/GetContatos', {
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setContatos(data);
                    });
            });
    };

    return (
        <div>
            <Cabecalho handleGuardarContato={handleGuardarContato} />
            <hr></hr>
            <TabelaContato data={contatos} handleDelete={handleDelete} />
        </div>
    );
}

export default App;
