
import {
  CHANGE_PAGE,
  GET_ALL_BOOKS,
  GET_ALL_USERS,
  GET_BOOKS_BY_NAME,
  GET_BOOK_DETAILS,
  GET_CATEGORIES,
  GET_GENDERS,
  GET_LANGUAGES,
  GET_ALL_AUTHOR,
  GET_ALL_SAGA,
  GET_ALL_EDITORIAL,
  FILTER_BOOKS,
  ORDER_BOOKS
} from "./actions";

const initialState = {
  users: [],
  allbooks: [],
  books: [],
  detailsBook: {},
  categories: [],
  languages: [],
  genders: [],
  allAuthor: [],
  allSaga: [],
  allEditorial: [],
  currentPage:1
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_BOOKS:
      return {
        ...state,
        books: payload,
        allbooks: payload,
      };
    case GET_GENDERS:
      return {
        ...state,
        genders: payload.map((elm) => {
          return elm.name
        }),
      };
    case GET_CATEGORIES:
      let categories = payload.map(el => el.name)
      return {
        ...state,
        categories: categories,
      };
    case GET_LANGUAGES:
      return {
        ...state,
        languages: payload.map((elm) => {
          return elm.name
        }),
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload,
      };
    case GET_ALL_AUTHOR:
      let authors = state.allbooks.map((elm) => {
        return elm.author
      })
      let noRepeat = new Set(authors)
      let author = [...noRepeat]
      return {
        ...state,
        allAuthor: author
      };

    case GET_ALL_SAGA:
      let arraySagas = state.allbooks.filter((elm) => {
        return elm.saga !== ""});
      let arraySagas1 = arraySagas.map((elm)=>{
        return elm.saga
      })
      let arraySagas2 = new Set(arraySagas1)
      let arraySagas3 = [...arraySagas2]
    
      return {
        ...state,
        allSaga: arraySagas3
       };

    case GET_ALL_EDITORIAL:
      let arrayEditorial = state.allbooks.map((elm) => {
        return elm.editorial
      })
      let arrayEditorial2 = new Set(arrayEditorial)
      let arrayEditorial3 = [...arrayEditorial2]
      return {
        ...state,
       allEditorial: arrayEditorial3
       };

    case GET_BOOKS_BY_NAME:
      return {
        ...state,
        books: payload,
      };

    case GET_BOOK_DETAILS:
      return {
        ...state,
        detailsBook: payload,
      };
      case CHANGE_PAGE:
        return{
          ...state,
          currentPage:payload
        }
      case FILTER_BOOKS:
        let filter = payload;
        
        
        return{
        ...state,
        books: payload
        }

    default:
      return state;
  }
};
export default rootReducer;
