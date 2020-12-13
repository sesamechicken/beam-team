const initialState = {
  loading: false,
  members: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    
    case 'LOAD_STATS':
      return {
        ...state,
        members: [...state.members, action.items]
      }
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