import axios from 'axios';

const loadStats = (member) => (dispatch, getState) => {
  dispatch({
    type: 'LOADING',
    loading: true,
    things: getState()
  });

  const stats = axios(`https://fortnite-api.com/v1/stats/br/v2?name=${member}`).then((data) => {
    return data;
  });

  dispatch({
    type: 'LOAD_STATS',
    member: { stats}
  });
};

export default {
  addToList
};