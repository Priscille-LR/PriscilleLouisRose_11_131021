import Banner from "./Banner";
import Hero from "./Hero/Hero";
import RentalList from "./RentalList/RentalList";
import Footer from "./Footer/Footer";
import "../Styles/Layout.css";
import { useState } from "react";
import "../Styles/App.css";

function App() {
  //   const [cart, updateCart] = useState([]) //cart initialisé avec tableau vide
  //cart: valeur actuelle; updateCart: f° permettant de la modifier;

  return (
    <div>
      <Banner />
      <Hero />
      <div className="layout-inner">
        <RentalList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
