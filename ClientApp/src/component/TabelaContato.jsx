
import React, { useEffect, useState } from 'react';

const TabelaContato = ({ data }) => {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr>
                        <td>{item.idContato}</td>
                        <td>{item.nome}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                            <button color="primary" size="sm" className="me-2">Editar</button>
                            <button id="exc" color="danger" size="sm">Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default TabelaContato;
