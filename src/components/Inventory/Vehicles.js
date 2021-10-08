import React from "react";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";
import Vehicle from "./Vehicle";
const getVehicles = graphql`
  {
    vehicles: allContentfulVehicles {
      edges {
        node {
          id
          title
          price
          capacity
          transmission
          mileage
          description
          model
          images {
            fluid(maxHeight: 200) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default function Vehicles() {
  return (
    <StaticQuery
      query={getVehicles}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Latest Arrivals" />
              <div className="row">
                {data.vehicles.edges.map(({ node: vehicle }) => {
                  return <Vehicle key={vehicle.id} vehicle={vehicle} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}

