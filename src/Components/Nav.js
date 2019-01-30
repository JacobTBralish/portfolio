// import React from 'react';
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
  }

  componentWillMount() {
    window.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClickOutside = () => {
    this.setState({
      toggle: false
    });
  };

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  };

  render() {
    return (
      <div className="navSubContainer">
        <Link className="jLink" to="/">
          <div className="navJ">
            <p className="J">J</p>
          </div>
        </Link>
        <button onClick={() => this.setState({ toggle: !this.state.toggle })}>
          <i className="fas fa-bars" />
        </button>

        <nav className={this.state.toggle ? "show" : ""}>
          <ul ref={node => (this.node = node)} className="navList">
            <li
              onClick={() => this.handleClickOutside()}
              className="navListItem"
            >
              <Link to="/">Home</Link>
            </li>
            <li
              onClick={() => this.handleClickOutside()}
              className="navListItem"
            >
              <Link to="/projects">Projects</Link>
            </li>
            <li className="socialLinkParent">
              <ul id="navListItemSocial">
                Social
                <li className="socialLinkImage">
                  <a href="https://medium.com/@j.t.bralish">
                    <i class="fab fa-medium" />
                  </a>
                </li>
                <li className="socialLinkImage">
                  <a href="https://github.com/JacobTBralish">
                    <i className="fab fa-github-square" />
                  </a>
                </li>
                <li className="socialLinkImage">
                  <a href="https://www.linkedin.com/in/jacobbralish/">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                {/* <li></li> */}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;
