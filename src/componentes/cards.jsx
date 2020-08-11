import React from "react";

const Cards = (props) => {
  return (
    <div class="col mb-3">
      <div className="card p-0">
        <img
          className="card-img-top img-fluid"
          src={props.img}
          alt={props.title}
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <div class="card-footer bg-white px-0 pt-2 pb-0 text-center">
            <a href="#" className="btn btn-primary">
              {props.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
