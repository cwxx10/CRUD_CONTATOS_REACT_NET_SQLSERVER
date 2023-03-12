import React, { useEffect, useState } from 'react';
import TabelaContato from './component/TabelaContato';
import Cabecalho from './component/Cabecalho';
import ModalContato from './component/ModalContato';
import './StyleSheet.css';

function App() {

    //criar state
    const [contatos, setContatos] = useState([]);

    //criar useeffect
    useEffect(() => {
        Get();
    }, [])



    //APIS 
    const Get = () => {
        fetch('api/contato/GetContatos', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setContatos(data);
               /* console.log(data);*/
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




    return (
        <div>
            <Cabecalho />
            <hr></hr>
            {/*<ModalContato />*/}
            <hr></hr>
            <TabelaContato data={contatos} handleDelete={handleDelete} />
        </div>


       
    );
}

export default App;

const guardarContacto = async (contato) => {
    const response = await fetch("api/contato/Guardar", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(contato)
    });
    if (response.ok) {
        //setMostrarModal(!mostrarModal);
        //Get();
    }
}

export { guardarContacto };

