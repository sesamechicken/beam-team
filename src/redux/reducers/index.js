const initialState = {
  loading: false,
  error: '',
  stats: []
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
        loading: false,
        stats: ['something']
      }


    default:
      return state;
  }
};

export default rootReducer;