import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { adicionarContato } from "../../store/reducers/contactSlice";
import { Form, Input, Button } from './styles'

const FormularioDeContato: React.FC = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const dispatch = useDispatch();

    const contatoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(adicionarContato({ id: Date.now(), nome, email, telefone }));
        setNome("");
        setEmail("");
        setTelefone("");
    };

    return (
        <Form onSubmit={contatoSubmit}>
            <Input
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <Input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <Input
                placeholder="Telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
            />
            <Button type="submit">Adicionar Contato</Button>
        </Form>
    );
};

export default FormularioDeContato;
