import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import EstiloGlobal from './styles';
import FormularioDeContato from './components/FormularioDeContato';
import ListaDeContato from './components/ListaDeContato';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <div>
        <h1>Lista de Contatos</h1>
        <FormularioDeContato />
        <ListaDeContato />
      </div>
    </Provider>
  );
};

export default App;
