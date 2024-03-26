import React from "react";
import classNames from "classnames";
import { Container, Image } from "react-bootstrap";
import NavBar from "../../components/content/Navbar";
import "../../App.css";
import IMAGES from "../../components/content/Assets";

class ErrorPage extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <div className="container">
          <div className="justify-content-center">
            <div className="col-auto">
              <Image
                src={IMAGES.Img_404}
                className="img-fluid"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <h1>Page not found</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default ErrorPage;
