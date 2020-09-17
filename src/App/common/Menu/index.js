import React from 'react';
import { Link } from "react-router-dom";
import Section from '../../common/Section';
import { List, ListItem } from './styled';

const Menu = () => {
  return (
    <Section
      title={
        "Menu"
      }
      body={
        <nav>
          <List>
            <ListItem>
              <Link to="/">Tasks list</Link>
            </ListItem>
            <ListItem>
            <Link to="/author">About</Link>
            </ListItem>
          </List>
        </nav>
      } />


  )
}

export default Menu;
