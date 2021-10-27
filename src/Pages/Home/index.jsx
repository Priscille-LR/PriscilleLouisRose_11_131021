import { Component } from "react";
import Hero from "../../Components/Hero";
import RentalList from "../../Components/RentalList";
import backgroundHome from "../../Assets/background-home.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <Hero cover={backgroundHome} isTextVisible={true} />
        <RentalList />
      </div>
    );
  }
}

// function Home() {
//    return (
//        <div className="wrapper">
//            <Hero />
//             <RentalList/>
//        </div>
//    )
// }

export default Home;
