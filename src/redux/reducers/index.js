import members from '../../members.json';

const people = [];
const team = members.map((person) => {
  people.push(person)
})

const initialState = {
  loading: false,
  error: '',
  team: people,
  stats: []
};

const rootReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true,
        stats: [...state.stats]
      };
    
    case 'LOAD_STATS':
      return {
        ...state,
        loading: false,
        stats: [...state.stats, action.stats]
      }


    default:
      return state;
  }
};

export default rootReducer;