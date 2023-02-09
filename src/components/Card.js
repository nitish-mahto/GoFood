import React from "react";
// import { Link } from "react-router-dom";

export default function Card() {
  return (
    <>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src="https://www.foodandwine.com/thmb/gRrfFwDl3N3uBOdWINoJKMqE8kk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/201012-ss-dishes-lamb-ragu-1f516715f31244f295426cf2d50193f2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">This is some Important Text</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value="{i+1}">
                      {i + 1}
                    </option>
                  );
                })}
              </select>

              <select className="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>

              <div className="d-inline h-100 fs-5">Total Prince</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
