import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './reducers/rootReducers';

export default configureStore({
  reducer: rootReducers
});

