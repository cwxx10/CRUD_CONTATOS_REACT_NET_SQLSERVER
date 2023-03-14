import React from 'react';

const Cabecalho = ({ handleAdd }) => {
    return (
        <div className="container">
            <button className="bn632-hover bn26" onClick={handleAdd}>ADICIONAR</button>
        </div>
    )
};

export default Cabecalho;
