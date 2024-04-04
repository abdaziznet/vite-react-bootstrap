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
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./components/forms/Login";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Mobile first
    this.state = {
      isOpen: false,
      isMobile: true,
      isLoggedIn: localStorage.getItem("isLoggedIn"),
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

    console.log(localStorage.getItem("isLoggedIn"));
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

  loginHandler = () => {
    this.setState({ isLoggedIn: true });
    localStorage.setItem("isLoggedIn", true);
  };

  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("isLoggedIn");
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <BrowserRouter>
        <div className="App wrapper">
          {isLoggedIn && (
            <SideBar
              toggle={this.toggle}
              isOpen={this.state.isOpen}
              onLogout={this.logoutHandler}
            />
          )}
          <Routes>
            <Route
              index
              element={
                isLoggedIn ? (
                  <Dashboard toggle={this.toggle} isOpen={this.state.isOpen} />
                ) : (
                  <Login onLogin={this.loginHandler} />
                )
              }
            />
            <Route
              path="dashboard"
              index
              element={
                isLoggedIn ? (
                  <Dashboard toggle={this.toggle} isOpen={this.state.isOpen} />
                ) : (
                  <Login onLogin={this.loginHandler} />
                )
              }
            />
            <Route
              path="reconstructImage"
              element={
                isLoggedIn ? (
                  <ReconstructImage
                    toggle={this.toggle}
                    isOpen={this.state.isOpen}
                  />
                ) : (
                  <Login onLogin={this.loginHandler} />
                )
              }
            />
            <Route
              path="reconstructImage/userVerify/:id"
              element={
                isLoggedIn ? (
                  <UserVerify toggle={this.toggle} isOpen={this.state.isOpen} />
                ) : (
                  <Login onLogin={this.loginHandler} />
                )
              }
            />
            <Route
              path="verificationImage"
              element={
                isLoggedIn ? (
                  <VerificationImage
                    toggle={this.toggle}
                    isOpen={this.state.isOpen}
                  />
                ) : (
                  <Login onLogin={this.loginHandler} />
                )
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
                isLoggedIn ? (
                  <Configuration
                    toggle={this.toggle}
                    isOpen={this.state.isOpen}
                  />
                ) : (
                  <Login onLogin={this.loginHandler} />
                )
              }
            />
            <Route
              path="*"
              element={
                <ErrorPage toggle={this.toggle} isOpen={this.state.isOpen} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
