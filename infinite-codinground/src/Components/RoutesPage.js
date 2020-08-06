import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ListView from "./UserData/ListView";
import UserTable from "./UserTable";
import { Nav, NavItem, NavLink } from "reactstrap";

const RoutesPage = () => {
  return (
    <Router>
        <Nav>
          <NavItem>
            <NavLink href="/">Grid-Table</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/listview">List View</NavLink>
          </NavItem>

        </Nav>
        <hr />
        <Switch>
          <Route exact path="/">
            <UserTable />
          </Route>
          <Route path="/listview">
            <ListView />
          </Route>
          
        </Switch>
    </Router>
  );
}
export default RoutesPage;