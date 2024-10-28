import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import "../styles/Landing.css";
import { useState } from "react";
function Signin() {
    const [backendResponce, setBackendResponce] = useState("");
    const [formResponce, setFormResponce] = useState("");
    const handleButtonSubmission = () => {
      axios
        .get("https://expo-app-server.vercel.app/test")
        .then((res) => setBackendResponce(res.data?.message))
        .catch((err) => console.log(err));
    };
    console.log("backend responce",backendResponce);
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
        .post(
          "http://localhost:3000/user/signup",
          JSON.stringify(formData),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setFormResponce(res.data?.message)
          form.reset(); // If form is a form element
        })
        .catch((err) => console.log(err));
    };
    return (
      <div className="CompleteLanding container-fluid p-5">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-9 col-md-8 col-lg-6">
            <Button className="m-auto" onClick={handleButtonSubmission}>Connect Backend</Button>
            {backendResponce}
            <Form
              onSubmit={handleFormSubmission}
              className="card mt-5 m-auto p-3"
            >
              <h3 className="text-center mb-3" style={{ fontFamily: "cursive" }}>
                {" "}
                Sign up
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
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
              <Button variant="primary" type="submit">
                Register
              </Button>
              <p className="mt-3 text-center">{formResponce}!!!</p>
            </Form>
          </div>
        </div>
      </div>
    );
}

export default Signin
