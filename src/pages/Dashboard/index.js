import React, { Component } from "react"
import {
  Container,
} from "reactstrap"

class Dashboard extends Component {
  render() {
    document.title = "Dashboard | Skote - React Admin & Dashboard Template";
    return (
      <React.Fragment>
        <div className="page-content">
          <Container fluid>
            <h4>Dashboard</h4>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;
