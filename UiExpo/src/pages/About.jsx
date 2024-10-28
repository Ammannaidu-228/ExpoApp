import Footer from "../components/Footer"
import MainNav from "../components/MainNav"
import '../styles/about.css'
function About() {
  return (
    <div>
        <div className="completeComp">
        <MainNav/>
        <h4 className="text-warning m-auto text-center">About page</h4>
        </div>
        <Footer/>
    </div>
  )
}

export default About
