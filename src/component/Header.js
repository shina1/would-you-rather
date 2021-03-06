import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Image, Grid, Button, Container } from "semantic-ui-react";
import setAuthUser from "../actions/authUser";

class Nav extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    this.props.setAuthUser(null);
  };

  render() {
    const { authenticatedUser, users } = this.props;

    return (
      <Container>
        <Grid as={Menu} minWidth={651} pointing secondary>
          <Menu.Item name="home" as={NavLink} to="/" exact />
          <Menu.Item name="new poll" as={NavLink} to="/add" />
          <Menu.Item name="leader board" as={NavLink} to="/leaderboard" />
          <Menu.Menu position="right">
            <Menu.Item>
              <span>
                <Image
                  src={users[authenticatedUser].avatarURL}
                  avatar
                  spaced="right"
                  verticalAlign="bottom"
                />
                {users[authenticatedUser].name}
              </span>
            </Menu.Item>
            <Menu.Item>
              <Button
                content="Logout"
                labelPosition="right"
                basic
                compact
                icon="log out"
                size="mini"
                onClick={this.handleLogout}
              />
            </Menu.Item>
          </Menu.Menu>
        </Grid>
        <Grid as={Fragment} minWidth={375} maxWidth={650}></Grid>
        <Grid as={Fragment} maxWidth={374}></Grid>
      </Container>
    );
  }
}

function mapStateToProps({ users, authenticatedUser }) {
  return {
    authenticatedUser,
    users,
  };
}

export default connect(mapStateToProps, { setAuthUser })(Nav);
