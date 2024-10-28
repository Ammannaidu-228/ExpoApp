import Footer from "../components/Footer";
import MainNav from "../components/MainNav";
import "../styles/about.css";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <div>
      <div className="completeComp m-auto">
        <MainNav />
        <div className="m-auto">
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-sm-9 col-md-8 col-lg-6">
              <Card className="card-style">
                <Card.Body>
                  <Card.Title>
                    {" "}
                    <h4 className="text-warning m-auto mt-3 text-center">
                      About page
                    </h4>
                  </Card.Title>
                  <Card.Text>
                    <p className="text-center mt-3 text-white">
                      This website is dedicated to helping developers learn and
                      complete web development tasks specifically using the MERN
                      stack, a powerful combination of MongoDB, Express, React,
                      and Node.js. The MERN stack is widely used for building
                      dynamic, full-stack JavaScript applications, allowing
                      developers to work seamlessly with one language from the
                      client side to the database. <br />
                      The website offers a wide range of tutorials, project
                      guides, and coding exercises that walk users through each
                      stage of the development process in a detailed,
                      beginner-friendly manner. From setting up a MongoDB
                      database, structuring server-side routes and APIs with
                      Express and Node, to building responsive front-end
                      interfaces with React, each topic is covered
                      comprehensively. <br /> In addition to task-based guides,
                      the site includes best practices, troubleshooting tips,
                      and deployment strategies for live web applications,
                      making it an essential resource for anyone looking to
                      master full-stack development with the MERN stack. Whether
                      you&apos;re a beginner aiming to build your first
                      full-stack project or an intermediate developer looking to
                      deepen your expertise, this website provides the knowledge
                      and resources needed to succeed.
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
