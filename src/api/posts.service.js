import HTTP from './http';

const index = (userId) => (
  HTTP.get(`/users/${userId}/posts`)
    .then(({ data }) => data)
);

export default {
  index,
};
