import React from 'react';
import Section from '../../common/Section';
import { List, ListItem, LinkItem } from './styled';

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
              <LinkItem to="/tasks">Tasks list</LinkItem>
            </ListItem>
            <ListItem>
            <LinkItem to="/about">About</LinkItem>
            </ListItem>
          </List>
        </nav>
      } />


  )
}

export default Menu;
