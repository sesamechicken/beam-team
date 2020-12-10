const initialState = {
  loading: false,
  items: ['eggs', 'milk', 'bread', 'ointment']
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      };

    case 'ADD_TO_LIST':
      return {
        ...state,
        loading: false,
        items: [...state.items, action.item]
      };

    default:
      return state;
  }
};

export default rootReducer;