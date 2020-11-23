const INITIAL_STATE = {
  data: undefined,
};

const setTweets = (state = INITIAL_STATE, action) => {
  if (action.type === 'SEARCH') return action.data;
  return state;
};

export default setTweets;
