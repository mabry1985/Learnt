import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Collapse = styled.div.attrs({
  className: "collapse navbar-collapse"
})``;

const List = styled.div.attrs({
  className: "navbar-nav mr-auto"
})``;

const Item = styled.div.attrs({
  className: "collapse navbar-collapse"
})``;

class Links extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to="/" className="navbar-brand">
          Learnt
        </Link>
        <Collapse>
          <List>
            <Item>
              <Link to="/tutorials/list" className="nav-link">
                Tutorials
              </Link>
            </Item>
            <Item>
              <Link to="/tutorial/create" className="nav-link">
                Add Tutorial
              </Link>
            </Item>
          </List>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Links;
