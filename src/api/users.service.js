import HTTP from './http';

const index = () => (
  HTTP.get('/users')
    .then(({ data }) => data)
);

const show = (id) => HTTP.get(`/users/${id}`).then(({ data }) => data);

const followers = (id) => HTTP.get(`/users/${id}/followers`).then(({ data }) => data);

const followees = (id) => HTTP.get(`/users/${id}/followees`).then(({ data }) => data);

export default {
  followees,
  followers,
  index,
  show,
};
