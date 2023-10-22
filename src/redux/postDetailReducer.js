// створюємо початковий стан state
const INITIAL_STATE = {
  postDetailsData: null,
  isLoading: false,
  error: null,
};

// Ред'юсер це функція яка приймає state, action
export const postDetailsReducer = (state = INITIAL_STATE, action) => {
  // action-> {type: 'postDetails/setIsLoading', payload: true}
  // перевіряємо тип інструкції яка прийшла в наш ред'юсер
  switch (action.type) {
    case 'postDetails/setIsLoading': {
      return {
        ...state,
        // єдиний спосіб коли значення прийдуть це тільки action.payload
        isLoading: action.payload,
      };
    }

    case 'postDetails/setPostDetails': {
      return {
        ...state,
        postDetailsData: action.payload,
      };
    }

    case 'postDetails/setError': {
      return {
        ...state,
        error: action.payload,
      };
    }

    case 'postDetails/addPost': {
      // action.payload - {id: 1, title: '123', body: "hello"}
      return {
        ...state,
        posts: [state.posts, action.payload],
      };
    }
    case 'postDetails/deletePost': {
      // action.payload -1
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    }

    default:
      return state;
  }
};
