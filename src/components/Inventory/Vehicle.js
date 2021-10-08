import React from "react";
import Img from "gatsby-image";
export default function Vehicle({ vehicle }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4  mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <div style={{ maxHeight: "726px" }}>
          <div>

            </div>

             <Img fluid={vehicle.images[0].fluid} />
            <div>
            </div>

             <Img fluid={vehicle.images[1].fluid} />
            <div>

            </div>
          <div className="card-body text-center">
           <h6>{vehicle.description}</h6>
            <h6>{vehicle.model}</h6>
            <h6>{vehicle.price}</h6>

            <h6>{vehicle.transmission}</h6>
            <h6>{vehicle.mileage} miles </h6>


          </div>
        </div>
      </div>
    </div>
  );
}

const getVehicles = graphql`
  {
    vehicle: allContentfulVehicles {
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
            fluid(maxHeight: 300) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;
