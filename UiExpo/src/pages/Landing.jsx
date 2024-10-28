import MainNav from "../components/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Landing.css";
import Footer from "../components/Footer";
import MainCarousel from "../components/MainCarousel";
function Landing() {
  return (
    <div>
      <div className="CompleteLanding">
        <MainNav />
        <div className="row justify-content-center ">
          <div className="carousel-container col-12 col-md-10 col-lg-8">
          <MainCarousel/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
