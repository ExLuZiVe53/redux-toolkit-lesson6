import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { postDetailsReducer } from './postDetailReducer';
// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// Створюємо корневий редюсер, тобто пункт керування цехами
const rootReducer = combineReducers({
  postDetails: postDetailsReducer,
});

// Створюємо розширення стора, щоб додати інструменти розробника
const enhancer = devToolsEnhancer();
// Другим параметром прокидуємо костанту enhancer для синхронізації з devTools
export const store = createStore(rootReducer, enhancer);
