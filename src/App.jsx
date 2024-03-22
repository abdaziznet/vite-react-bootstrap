import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SideBar from "./components/sidebar/Sidebar";
import Dashboard from "./pages/dashboard/Dashboard";
import ReconstructImage from "./pages/reconstructImage/Reconstructimage";
import VerificationImage from "./pages/verificationImage/Verificationimage";
import ActivityUser from "./pages/activityUser/ActivityUser";
import Configuration from "./pages/configuration/Configuration";
import BreadcrumbComponent from "./components/content/BreadCrumb";
import UserVerify from "./pages/reconstructImage/Userverify";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Mobile first
    this.state = {
      isOpen: false,
      isMobile: true,
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile,
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */

  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App wrapper">
          <SideBar toggle={this.toggle} isOpen={this.state.isOpen} />
          <BreadcrumbComponent />
          <Routes>
            <Route
              index
              element={
                <Dashboard toggle={this.toggle} isOpen={this.state.isOpen} />
              }
            />
            <Route
              path="reconstructImage"
              element={
                <ReconstructImage
                  toggle={this.toggle}
                  isOpen={this.state.isOpen}
                />
              }
            />
            <Route
              path="reconstructImage/userVerify/:id"
              element={
                <UserVerify toggle={this.toggle} isOpen={this.state.isOpen} />
              }
            />
            <Route
              path="verificationImage"
              element={
                <VerificationImage
                  toggle={this.toggle}
                  isOpen={this.state.isOpen}
                />
              }
            />
            <Route
              path="activityUser"
              element={
                <ActivityUser toggle={this.toggle} isOpen={this.state.isOpen} />
              }
            />
            <Route
              path="configuration"
              element={
                <Configuration
                  toggle={this.toggle}
                  isOpen={this.state.isOpen}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
