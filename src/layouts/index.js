import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './all.sass';

const font = `Sarala, sans-serif`

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <h2 style={{ fontFamily: `${font}`, fontSize: '48px'}}>gstvbrg</h2>
          </figure>
        </Link>
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet> 
      <title>Home | Gustavo Berga</title>
      <link href="https://fonts.googleapis.com/css?family=Audiowide|Cantarell|Hind+Siliguri|Istok+Web|Sarala|Sorts+Mill+Goudy" rel="stylesheet"/>
      <link rel="icon" type="image/png" href="../img/favicon.ico" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
