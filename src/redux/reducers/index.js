import members from '../../members.json';

const people = [];
const team = members.map((person) => {
  people.push(person)
})

const initialState = {
  loading: true,
  error: '',
  team: people,
  stats: [],
  news: {}
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
        stats: [...state.stats, action.stats]
      }

    case 'LOAD_NEWS':
      return {
        ...state,
        loading: false,
        news: action.news.data.br
      }


    default:
      return state;
  }
};

export default rootReducer;