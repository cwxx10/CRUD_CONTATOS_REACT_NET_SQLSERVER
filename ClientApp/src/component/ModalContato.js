import React, { useState } from 'react';
import { guardarContacto } from '../App';

const ModalContato = ({ handleClose, handleGuardarContato }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSave = () => {
        handleGuardarContato({ nome, email, phone });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <h2>Novo Contato</h2>
                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" placeholder="Telefone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <button onClick={handleSave}>Salvar</button>
                <button onClick={handleClose}>Sair</button>
            </div>
        </div>
    );
};


export default ModalContato;
