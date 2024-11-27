import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "./reducers/contactSlice";

// Cria a store do Redux, configurando-a com o reducer de contatos
const store = configureStore({
  reducer: {
    contatos: contatosReducer, // Define o slice de contatos como parte do estado global
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
