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
  const state = getState();

  // Don't make the call more than we need to
  if(state.news){
    return {
      ...state
    }
  }

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

const loadItemShop = () => async  (dispatch, getState) => {
  const state = getState();

  // Don't make the call more than we need to
  if(state.itemShop){
    return {
      ...state
    }
  }

  dispatch({
    type: 'LOADING',
    loading: true
  });

  const itemShop = await axios('https://fortnite-api.com/v2/shop/br');

  return dispatch({
    type: 'LOAD_ITEMSHOP',
    itemShop: itemShop.data,
    loading: false
  })
}

export {
  loadStats,
  loadNews,
  loadItemShop
};