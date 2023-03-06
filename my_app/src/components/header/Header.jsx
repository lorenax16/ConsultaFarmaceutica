import React, { Component } from "react";
import "./Header"
import PropTypes from "prop-types";

class Header extends Component {
  render() {
    const { title } = this.props;
    return <header className="header"> 
    <div>
      {title }
    </div>
    {/* <div>
      <img src={ logo }
      alt="Logo"
    />
    </div> */}
    </header>;
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
