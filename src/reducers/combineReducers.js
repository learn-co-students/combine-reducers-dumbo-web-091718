import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

function booksReducer(state = [], action){
  let idx;
  switch (action.type) {
  case "ADD_BOOK":
    return [...state, action.book];

  case "REMOVE_BOOK":
    idx = state.books.indexOf(action.id);
    return [state.books.slice(0, idx), state.books.slice(idx + 1)];

  default:
    return state;
    }
  }

function authorsReducer(state = [], action){
    let idx;
    switch(action.type){
    case "ADD_AUTHOR":
        return [...state.authors, action.author];

    case "REMOVE_AUTHOR":
      idx = state.authors.indexOf(action.id);
      return [state.authors.slice(0, idx), state.authors.slice(idx + 1)];

    default:
      return state;
    }
  }
