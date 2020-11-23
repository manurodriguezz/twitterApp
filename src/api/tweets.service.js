import HTTP from './http';

const getTweets = (info) => HTTP.get(`/relevantTweets/${info.parties[0]}&${info.query}`);

const getUsers = (info) => HTTP.get(`/relevantUser/${info.parties[0]}&${info.query}`);
// const getTweets = (info) => info;

export default { getTweets, getUsers };
