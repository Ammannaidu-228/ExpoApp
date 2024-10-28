import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../styles/signup.css";
import MainNav from "../components/MainNav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Signup() {
  return (
    <div>
      <MainNav />
      <div className="completeComp row justify-content-center">
        <div className="col-12 col-sm-9 col-md-8 col-lg-6">
          <Form className="card p-3 mt-5">
            <p
              className="text-center mb-5"
              style={{
                fontFamily: "cursive",
                fontWeight: "bold",
                fontSize: "1.5rem",
              }}
            >
              Welcome to AppExpo
            </p>
            <Row className="mb-3">
              <Col>
                <Form.Label>First Name</Form.Label>

                <Form.Control placeholder="First name" />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>

                <Form.Control placeholder="Last name" />
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" className="mb-3" type="submit">
              Submit
            </Button>
            <div className="m-auto">
                <p>Already have an account? <Link to={'/signin'}>Sign in</Link></p>
            </div>
          </Form>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Signup;
