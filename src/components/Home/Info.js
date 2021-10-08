import React from "react";
import Title from "../Globals/Title";
import { Link } from "gatsby";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="AutoMotive Reviews, News, Parts, Accessories & More" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              From "Land-to-sea" AutoMotive lifestyle
            </p>
            <Link to="/Rankings/">
              <button className="btn text-uppercase btn-yellow">
                Latest Performance Rankings by Category
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
