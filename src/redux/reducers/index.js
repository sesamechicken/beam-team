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
  news: '',
  itemShop: ''
};

const rootReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: true
      };
    
    case 'LOAD_STATS':
      const user = state.team.filter((user) => user.username === action.id);
      const userWithStats = Object.assign(...user, {stats: action.stats});
      const userIndex = state.team.findIndex((user) => user.username === action.id);
      const teamList = state.team[userIndex] = userWithStats;
      
      console.log(teamList)

      const userList = [...state.team, userWithStats];
      
      console.log(userWithStats)

      return {
        ...state,
        team: userList,
        loading: false,
      }

    case 'LOAD_NEWS':
      return {
        ...state,
        loading: false,
        news: action.news.data.br
      }
      case 'LOAD_ITEMSHOP':
        return {
          ...state,
          loading: false,
          itemShop: action.itemShop.data
        }


    default:
      return state;
  }
};

export default rootReducer;