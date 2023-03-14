import React, { useEffect, useState } from 'react';
import TabelaContato from './component/TabelaContato';
import Cabecalho from './component/Cabecalho';
import ModalContato from './component/ModalContato';
import './StyleSheet.css';

function App() {

    // create state
    const [contatos, setContatos] = useState([]);
    const [mostrarModal, setMostrarModal] = useState(false);

    //criar useeffect
    useEffect(() => {
        Get();
    }, [])

    // APIS 
    const Get = () => {
        fetch('api/contato/GetContatos', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setContatos(data);
            });
    };

    const handleDelete = async (id) => {
        const response = await fetch(`api/contato/Delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        if (response.ok) {
            alert("Contato excluido!");
            Get();
        }
    };

    const handleAdd = () => {
        setMostrarModal(true);
    };

    const handleClose = () => {
        setMostrarModal(false);
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
                setContatos([...contatos, data]);
            });

        handleClose();
    };

    return (
        <div>
            <Cabecalho handleAdd={handleAdd} />
            <hr></hr>
            {mostrarModal && <ModalContato handleClose={handleClose} handleGuardarContato={handleGuardarContato} />}
            <hr></hr>
            <TabelaContato data={contatos} handleDelete={handleDelete} />
        </div>
    );
}


export default App;

