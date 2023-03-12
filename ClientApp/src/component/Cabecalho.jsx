import React from 'react';
import { guardarContacto } from '../App';

const Cabecalho = () => {
    return (
        <div className="container">
           {/* <button className="bn632-hover bn26" onClick={() => guardarContacto(contacto)}>Button</button>*/}
            <button className="bn632-hover bn26" onClick={() => guardarContacto({ nome: 'exemplo', email: 'exemplo@mail.com', phone: '(567) 890-1234' })}>Button</button>
        </div>
        )
}



export default Cabecalho;