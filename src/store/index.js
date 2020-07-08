import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import pokeapi from './reducers';
import rootSaga from './sagas';

const config = {
    key:'poke_shop',
    storage,
    whiteList:['cart','total']
}

const persistedReducer = persistReducer(config,pokeapi);

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    persistedReducer,
    applyMiddleware(sagaMiddleware),
  );
  sagaMiddleware.run(rootSaga);

const persistor = persistStore(store)
export {store,persistor};

