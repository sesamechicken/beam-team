import axios from 'axios';

const loadStats = (member) => async (dispatch, getState) => {

  const prevState = getState();
  const results  = await axios(`https://fortnite-api.com/v1/stats/br/v2?name=${member}`);

  return dispatch({
    type: 'LOAD_STATS',
    stats: [...prevState.stats, results.data.data],
    loading: false
  });
};


const loadNews = () => async  (dispatch, getState) => {
  dispatch({
    type: 'LOADING',
    loading: true
  });

  const news = await axios('https://fortnite-api.com/v2/news');

  return dispatch({
    type: 'LOAD_NEWS',
    news: news.data,
    loading: false
  })
}

export {
  loadStats,
  loadNews
};