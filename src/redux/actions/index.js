import axios from 'axios';

const loadStats = (member) => async (dispatch, getState) => {
  console.log(member)
  const prevState = getState();

      const results  = await axios(`https://fortnite-api.com/v1/stats/br/v2?name=${member}`);

      return dispatch({
        type: 'LOAD_STATS',
        stats: [...prevState.stats, results.data.data],
        loading: false
      })
  


      
};

export default {
  loadStats
};