import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import './all.sass';

const font = `Sarala, sans-serif`

const navbarStyle = {
  backgroundImage: `url(https://www.nasa.gov/sites/default/files/styles/image_card_4x3_ratio/public/thumbnails/image/pia21551.jpg)`,
}

const Navbar = () => (
  <nav className="navbar is-transparent" style={{backgroundImage: navbarStyle.backgroundImage }}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
            <figure className="image">
              <h2 style={{ 
                fontFamily: `${font}`,
                fontSize: '3.47em', 
                color: 'rgb(242, 258, 255)',
                textShadow: '3px 3px 3px skyblue'  
              }}>gstvbrg</h2>
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
      <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAA//36AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEREREAAAAAERABERAAAAARAAAREQAAABEAABEREAAAERABEREQAAABERERERAAAAAREREREAAAAAAAAREQAAAAAAAAERAAAAABEAABEAAAABERAAEQAAAAEREAAQAAAAABEAAAAAAAAAAAAAAAAAAAAAAAAADwDwAA4AcAAMADAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAAwAMAAOAHAADwDwAA" rel="icon" type="image/x-icon" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
