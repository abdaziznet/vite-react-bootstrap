// BreadcrumbComponent.js

import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";

const BreadcrumbComponent = () => {
  const paths = window.location.pathname
    .split("/")
    .filter((path) => path !== "");

  return (
    <Breadcrumb className="breadcrumb__custom">
      {paths.map((path, index) => (
        <Breadcrumb.Item
          key={index}
          linkAs={Link}
          linkProps={{ to: `/${paths.slice(0, index + 1).join("/")}` }}
        >
          {path}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbComponent;
