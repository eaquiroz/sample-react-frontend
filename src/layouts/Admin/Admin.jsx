
import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Sidebar from "components/Sidebar/Sidebar";
import { style } from "variables/Variables.jsx";

import routes from "../../routes.js";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _notificationSystem: null,
      image: "",
      color: "red",
      hasImage: true,
      fixedClasses: "dropdown show-dropdown open"
    };
  }
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout !== "") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };


  componentDidMount() {

  }
  componentDidUpdate(e) {

  }
  render() {
    return (
      <div className="wrapper">
        <Sidebar {...this.props} routes={routes}
        color={this.state.color}
        hasImage={this.state.hasImage}/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <AdminNavbar
            {...this.props}
          />
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }
}

export default Admin;
