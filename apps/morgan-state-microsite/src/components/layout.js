import React from 'react';
import Container from './container';
import Navigation from './navigation';

class Layout extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;

    let rootPath = `/`;
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`;
    }

    return (
      <Container>
        <Navigation />
        {children}
      </Container>
    );
  }
}

export default Layout;
