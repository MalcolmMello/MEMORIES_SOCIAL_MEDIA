import { FETCH_ALL, FETCH_POST, LIKE, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH, START_LOADING, END_LOADING } from '../constants/actionTypes';


export default (state = { isLoading: true, posts: [] }, action) => {
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        break
        case END_LOADING:
            return { ...state, isLoading: false }
        break
        
        case FETCH_ALL:
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages
            };
        break
        case FETCH_BY_SEARCH:
            return { ...state, posts: action.payload };
        break
        case FETCH_POST:
            return { ...state, post: action.payload };
        break
        case LIKE:
            return {...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
        break
        case CREATE:
            return {...state, posts: [...state.posts, action.payload]};
        break
        case UPDATE:
            return {...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post))};
        break
        case DELETE:
            return {...state, posts: state.posts.filter((post) => post._id !== action.payload)};
        break
        default:
            return state
        break;
    };
};