import axios from 'axios';

const loadStats = (member) => async (dispatch, getState) => {
  dispatch({
    type: 'LOADING',
    loading: true,
    things: getState()
  });

  let stats;
  try {
    stats = await axios(`https://fortnite-api.com/v1/stats/br/v2?name=${member}`);
  } catch(e){
    stats = e
  }
  dispatch({
    type: 'LOAD_STATS',
    loading: false,
    stats: ['stats'],
  });

};

export default {
  loadStats
};