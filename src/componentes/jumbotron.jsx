import React from "react";

const Jumbotron = (props) => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">{props.description}</p>
        <a className="btn btn-primary btn-lg mt-3" href="#" role="button">
          {props.buttonLabel}
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
