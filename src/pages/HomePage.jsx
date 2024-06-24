import React from "react";
import "../styles/HomePage.css";
import { Button, Input } from "@chakra-ui/react";
import { List, ListItem, UnorderedList } from "@chakra-ui/react";
import { Cards } from "../components/Cards";

export const HomePage = () => {
  return (
    <>
      <div className="navbar">
        <UnorderedList className="navbar-items">
          <List>
            <ListItem>
              <img
                src={require("../Assests/logo1.png")}
                alt="logo"
                width="100px"
                height="50px"
              />
            </ListItem>
          </List>
          <List>
            <ListItem>Menu</ListItem>
          </List>
          <List>
            <ListItem>
              <Input type="text" style={{ width: "350px" }} />
            </ListItem>
          </List>
          <List>
            <Button> Search Film </Button>
          </List>
          <List>
            <ListItem>Watchlist</ListItem>
          </List>
          <List>
            <ListItem>Sign in</ListItem>
          </List>
        </UnorderedList>
      </div>
      <Cards />
    </>
  );
};
