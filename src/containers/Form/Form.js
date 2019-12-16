import React from "react";
import classes from "./Form.module.css";
import { Link } from "react-router-dom";

const Form = () => {
  return (
    <div className={classes.Form}>
      <h1 className="mb-4">Карточки</h1>
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Специальный заголовок</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>

              <Link to="/" className="btn btn-primary">
                {" "}
                Переход на главную
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Специальный заголовок</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <Link to="/djumbo" className="btn btn-info">
                {" "}
                Переход на Жумбика
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
