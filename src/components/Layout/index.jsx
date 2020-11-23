import React from 'react';
import PropTypes from 'prop-types';
import { Box, Header, Heading } from 'grommet';
import { Twitter } from 'grommet-icons';
import { useHistory } from 'react-router-dom';

import './index.scss';

const Layout = ({ children }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/');
  };

  return (
    <Box className="layout">
      <Header background="#1DA1F2">
        <Box focusIndicator={false} onClick={() => handleClick()} gap="medium" pad="small" direction="row">
          <Heading>Twitter App</Heading>
          <Twitter color="black" size="large" />
        </Box>
      </Header>
      <Box pad="medium" align="center">
        {children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
