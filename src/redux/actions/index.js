const addToList = (item) => (dispatch, getState) => {
  dispatch({
    type: 'LOADING',
    loading: true,
    things: getState()
  });

  dispatch({
    type: 'ADD_TO_LIST',
    item
  });
};

export default {
  addToList
};