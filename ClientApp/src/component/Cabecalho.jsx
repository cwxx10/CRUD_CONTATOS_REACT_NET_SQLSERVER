import React, { useState } from 'react';


const Cabecalho = ({ handleGuardarContato }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const contato = { nome, email, phone };
        handleGuardarContato(contato);
        setNome('');
        setEmail('');
        setPhone('');
        alert("Contato salvo com sucesso!");
    };

    return (
        <div className="container d-flex justify-content-center align-items-center w-100">
            <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                <div className="form-group">
                    <div className="input-container">
                        <input type="text" className="form-control mb-3 w-100" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        <span className="input-label">Nome</span>
                    </div>
                    <div className="input-container">
                        <input type="email" className="form-control mb-3 w-100" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        <span className="input-label">Email</span>
                    </div>
                    <div className="input-container">
                        <input type="text" className="form-control mb-3 w-100" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                        <span className="input-label">Telefone</span>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">ADICIONAR</button>
            </form>
        </div>




    );
};

export default Cabecalho;
