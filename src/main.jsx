import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import todo from '../reducers/todo.js';
import deletedTodo from '../reducers/deletedTodos.js';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const reducers = combineReducers({ todo, deletedTodo });
const persistConfig = { key: 'todos', storage };
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
          <App />
      </PersistGate>
    </Provider>
);
