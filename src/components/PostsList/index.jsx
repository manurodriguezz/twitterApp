import React from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import Mauro from 'Components/Post';

const PostsList = ({ posts }) => (
  <>
    {
      posts.map(({
        title,
        id,
        username,
        content,
      }) => (
        <Row key={id} gutter={[16, 16]}>
          <Col span={16} offset={4}>
            <Mauro
              title={title}
              content={content}
              username={username}
            />
          </Col>
        </Row>
      ))
    }
  </>
);

PostsList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      content: PropTypes.string,
    }),
  ).isRequired,
};

export default PostsList;
