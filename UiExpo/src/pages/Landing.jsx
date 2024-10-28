import MainNav from "../components/MainNav";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Landing.css";
import Footer from "../components/Footer";
function Landing() {
  return (
    <div>
      <div className="CompleteLanding">
        <MainNav />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
