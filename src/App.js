import Banner from "./Components/Banner";
import Features from "./Components/Features";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import FAQ from "./Components/Faq";
import Nav from "./Components/Nav";
import Team from "./Components/Team";
import Services from "./Components/Services";
// import PortfolioSection from "./Components/Portfolio";


function App() {
  return (
    <div className="App">
    <Nav/>
   <Banner/>
   <Features/>
   <About/>
   <Team/>
   <Services/>
   {/* <PortfolioSection/> */}
   <FAQ/>
   <Contact/>
   <Footer/>
    </div>
  );
}

export default App;