import React from "react";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Signup() {
  let navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post(`http://localhost:8000/register`, {
        ...data,
      })
      .then((data) => {
        console.log(data);
        alert("Register successful 😃 ");
        navigate("/login");
      })
      .catch((err) => {
        // console.log("Error: " + err);
        alert("Error 😠  : Please try again");
      });
  };
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          {/* Input Field for name */}
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              //   name="name"
                              {...register("name", { required: true })}
                              id="form3Example1c"
                              className="form-control"
                              placeholder="Your Name"
                            />
                          </div>
                        </div>

                        {/* Input Field for email */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              //   name="email"
                              {...register("email", { required: true })}
                              id="form3Example3c"
                              className="form-control"
                              placeholder="Your Email"
                            />
                          </div>
                        </div>

                        {/* Input Field for city */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-city fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              //   name="city"
                              {...register("location", { required: true })}
                              id="form3Example4c"
                              className="form-control"
                              placeholder="City"
                            />
                          </div>
                        </div>

                        {/* Input Field for Password */}
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              //   name="password"
                              {...register("password", { required: true })}
                              id="form3Example4c"
                              className="form-control"
                              placeholder="Password"
                            />
                          </div>
                        </div>

                        {/* Input Field for confirm Password */}
                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              //   name="cpassword"
                              {...register("cpassword", { required: true })}
                              id="form3Example4cd"
                              className="form-control"
                              placeholder="Repeat your password"
                            />
                          </div>
                        </div> */}

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in
                            <Link to="#!" style={{ textDecoration: "none" }}>
                              &nbsp;&nbsp; Terms of service
                            </Link>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Register
                          </button>
                        </div>
                        <Link
                          className="d-flex justify-content-center mx-4 mb-3 mb-lg-4"
                          to="/login"
                        >
                          Already a user
                        </Link>
                      </form>
                    </div>

                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
