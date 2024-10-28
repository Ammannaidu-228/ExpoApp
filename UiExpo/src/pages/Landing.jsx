import MainNav from "../components/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Landing.css";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../styles/Landing.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Landing() {

  const [formResponce, setFormResponce] = useState("");

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    const data = e.currentTarget;
    const form = new FormData(data);
    const formData = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
    };

    axios
      .post("http://localhost:3000/user/signup", JSON.stringify(formData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setFormResponce(res.data?.message);
        form.reset(); // If form is a form element
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="CompleteLanding">
        <MainNav />
        <div className="row justify-content-center ">
          <div className="carousel-container col-12 col-md-10 col-lg-8">
            <MainCarousel />
            <h4 className="text-warning m-auto p-3">Info</h4>
            <div className="row justify-content-center mt-3">
              <div className="col-12 col-sm-9 col-md-8 col-lg-6">
              <Card className="card-style mb-5">
              <Card.Body>
                <Card.Text>
                  <p className="text-center mt-3 text-white">
                    This website specializes in web development tasks focused on
                    the MERN stack, which includes MongoDB, Express, React, and
                    Node.js. It offers in-depth, detailed explanations on how to
                    effectively use each component of the stack for building
                    modern, scalable web applications. Users can find
                    comprehensive guides, best practices, and project-based
                    tutorials that cover everything from setting up a
                    development environment to deploying full-featured
                    applications.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>

              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="mt-5container-fluid p-5 text-bg-dark">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-9 col-md-8 col-lg-6">
            <Form
              onSubmit={handleFormSubmission}
              className="card formStyle mt-5 m-auto p-3"
            >
              <h3
                className="text-center mb-5"
                style={{ fontFamily: "cursive" }}
              >
                {" "}
                Sign in with your account
              </h3>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" className="mb-3" type="submit">
                Sign in
              </Button>
              <div className="row justify-content-center">
                <div className="col-12 col-sm-9 col-md-8 col-lg-6">
                  <p>
                    Don&apos;t have an account?{" "}
                    <Link to={"/signup"}> Create One</Link>
                  </p>
                  <p className="text-danger text-center">Forget Password</p>
                </div>
              </div>
              {formResponce != "" && (
                <p className="mt-3 text-center">{formResponce}!!!</p>
              )}
            </Form>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Landing;
