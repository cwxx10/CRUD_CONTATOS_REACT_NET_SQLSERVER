import React, { useState } from 'react';


const Cabecalho = ({ handleGuardarContato }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contato = { nome, email, telefone };
        handleGuardarContato(contato);
        setNome('');
        setEmail('');
        setTelefone('');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="tel" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                <button type="submit" className="bn632-hover bn26">ADICIONAR</button>
            </form>
        </div>
    );
};

export default Cabecalho;
