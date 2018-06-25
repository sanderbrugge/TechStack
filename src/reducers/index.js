import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

/**
 * combine the different reducers in to one reducer so we can access every action through
 * one parent reducer.
 */
export default combineReducers({
    libraries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});