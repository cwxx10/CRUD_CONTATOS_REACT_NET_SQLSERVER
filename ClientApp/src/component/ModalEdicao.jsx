import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, FormGroup, Input, Label } from 'reactstrap';

const ModalEdicao = (props) => {

    const [contato, setContato] = useState(props.contato);

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        setContato({ ...contato, [name]: value });
    };

    const handleSave = () => {
        props.handleSave(contato);
    }

    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle}>Editar Contato</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="nome">Nome:</Label>
                    <Input type="text" name="nome" id="nome" value={contato.nome} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email:</Label>
                    <Input type="email" name="email" id="email" value={contato.email} onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="phone">Telefone:</Label>
                    <Input type="text" name="phone" id="phone" value={contato.phone} onChange={handleInputChange} />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={props.toggle}>Cancelar</Button>
                <Button color="primary" onClick={handleSave}>Salvar</Button>
            </ModalFooter>
        </Modal>
    );
};

export default ModalEdicao;
