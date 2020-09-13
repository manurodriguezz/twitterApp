import HTTP from './http';

const index = (userId) => (
  HTTP.get(`/users/${userId}/posts`)
    .then(({ data }) => data)
);

const create = ({ userId, title, content }) => (
  HTTP.post(`users/${userId}/posts`, { title, content })
    .then(({ data }) => data)
);

export default {
  create,
  index,
};
