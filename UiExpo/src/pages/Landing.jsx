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
          <div className="col-12 col-sm-9 col-md-8 col-lg-6">
          <MainCarousel/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
