import React from 'react';
import PropTypes from 'prop-types';
import { Layout as AntLayout } from 'antd';

import './index.scss';

const Layout = ({ children }) => (
  <AntLayout className="layout">
    <AntLayout.Header className="layout__header">
    </AntLayout.Header>
    <AntLayout.Content>
      {children}
    </AntLayout.Content>
    <AntLayout.Footer>
      Boilerplate made with <span role="img" aria-label="love">♥️</span> by <a href="https://www.neocoast.com" target="_blank" rel="nofollow">NeoCoast</a>
    </AntLayout.Footer>
  </AntLayout>
);

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
