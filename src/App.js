
import AboutUs from './About';
import './App.css';
import ContactUs from './ContactUs';
import CustomerReview from './CustomerReview';
import Footer from './Footer';
import HeroSection from './HeroSection';
import HighLight from './HighLight';
import Navbar from './Navbar';

function App() {
  return (
    <div className="w-[100vw] m-0 p-0 h-[100vh] overflow-y-auto overflow-x-hidden bg-bgBlue lg:pt-[50px] scroll-smooth">
      <div className="lg:w-[80%] w-full max-w-[1260px] bg-white h-fit mx-auto rounded-xl shadow-black shadow-2xl"
      >
       <Navbar/>
       <HeroSection/>
       <HighLight/>
       <AboutUs/>
        <CustomerReview/>
        <ContactUs/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
