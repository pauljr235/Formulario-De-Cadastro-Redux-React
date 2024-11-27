import React from 'react'
import { RootState } from '../../store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { removerContato } from '../../store/reducers/contactSlice'
import { Lista, ItemDaLista } from './styles'

const ListaDeContato: React.FC = () => {
    const contatos = useSelector((state: RootState) => state.contatos)
    const dispatch = useDispatch();


    return (
        <Lista>
            {contatos.map(contato => (
                <ItemDaLista key={contato.id}>
                    {contato.nome} - {contato.email} - {contato.telefone}
                    <button onClick={() => dispatch(removerContato(contato.id))}>Remover Contato</button>
                </ItemDaLista>
            ))}
        </Lista>
    )
}

export default ListaDeContato