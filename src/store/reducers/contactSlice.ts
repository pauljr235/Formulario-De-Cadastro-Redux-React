// Importa funções necessárias do Redux Toolkit
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contato {
  // Define a estrutura de um contato, garantindo que cada contato terá essas propriedades
  id: number; // Identificador único para cada contato
  nome: string;
  email: string;
  telefone: string;
}

const initialState: Contato[] = []; // Define o estado inicial da lista de contatos como um array vazio

// Cria um "slice" de Redux chamado 'contatos' para gerenciar o estado dos contatos
const contatosSlice = createSlice({
  name: "contatos", // Nome do slice (identificação para o estado no Redux)
  initialState, // Estado inicial definido anteriormente
  reducers: {
    // Define as ações (reducers) que podem ser realizadas nesse slice

    //Ação para adicionar um novo contato
    adicionarContato: (state, action: PayloadAction<Contato>) => {
      state.push(action.payload);
    },

    // Ação para remover um contato com base no ID fornecido
    removerContato: (state, action: PayloadAction<number>) => {
      return state.filter((contato) => contato.id !== action.payload); // Retorna um novo array excluindo o contato com o ID correspondente
    },

    // Ação para editar um contato existente
    editarContato: (
      state,
      action: PayloadAction<{ id: number; contatoAtualizado: Contato }>,
    ) => {
      const indexDosContatos = state.findIndex(
        (contato) => contato.id === action.payload.id,
      ); // Procura o índice do contato que será atualizado com base no ID fornecido
      if (indexDosContatos !== -1) {
        // Se o contato for encontrado
        state[indexDosContatos] = action.payload.contatoAtualizado; // Atualiza o contato com as novas informações
      }
    },
  },
});

// Exporta as ações para que possam ser utilizadas nos componentes React
export const { adicionarContato, removerContato, editarContato } =
  contatosSlice.actions;

// Exporta o reducer para ser incluído na store do Redux
export default contatosSlice.reducer;
