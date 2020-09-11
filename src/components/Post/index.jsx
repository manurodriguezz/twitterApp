import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Card,
  Divider,
} from 'antd';

const Post = ({
  title,
  username,
  content,
}) => (
  <Card bordered={false} size="small">
    <Card.Meta
      avatar={<Avatar src={`https://robohash.org/${username}`} />}
      description={username}
      title={title}
    />
    <Divider />
    {content}
  </Card>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string,
};

Post.defaultProps = {
  content: 'No content',
};

export default Post;
