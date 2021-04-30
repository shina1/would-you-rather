import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";
import UserLogin from "./UserLogin";
import Header from "./Header";
import Landing from "./Landing";
import CardUI from "./CardUI";
import StartPoll from "./StartPoll";
import Board from "./Board";
import ErroPage from "./ErroPage";

class App extends Component {
  componentDidMount() {
    this.props.handleInitialData();
  }
  render() {
    const { authenticatedUser } = this.props;
    return (
      <Router>
        <div className="App">
          {authenticatedUser === null ? (
            <Route
              render={() => (
                <ContentGrid>
                  <UserLogin />
                </ContentGrid>
              )}
            />
          ) : (
            <Fragment>
              <Header />
              <ContentGrid>
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route path="/questions/bad_id" component={ErroPage} />
                  <Route path="/questions/:question_id" component={CardUI} />
                  <Route path="/add" component={StartPoll} />
                  <Route path="/leaderboard" component={Board} />
                  <Route component={ErroPage} />
                </Switch>
              </ContentGrid>
            </Fragment>
          )}
        </div>
      </Router>
    );
  }
}

const ContentGrid = ({ children }) => (
  <Grid padded="vertically" columns={1} centered>
    <Grid.Row>
      <Grid.Column style={{ maxWidth: 550 }}>{children}</Grid.Column>
    </Grid.Row>
  </Grid>
);

function mapStateToProps({ authenticatedUser }) {
  return {
    authenticatedUser,
  };
}

export default connect(mapStateToProps, { handleInitialData })(App);
