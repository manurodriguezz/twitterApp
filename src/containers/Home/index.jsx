import React from 'react';
import faker from 'faker';
import PostsList from 'Components/PostsList';
import './index.scss';

const posts = [...Array(faker.random.number({ max: 20, min: 15 }))].map((_, index) => ({
  content: faker.lorem.paragraph(),
  id: index,
  title: faker.lorem.word(),
  username: faker.internet.userName(),
}));

const Home = () => (
  <div>
    <PostsList posts={posts} />
  </div>
);

export default Home;
