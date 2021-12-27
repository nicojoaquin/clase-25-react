import { Component } from "react";
import CardContainer from "./components/cards/CardContainer";
import Carrousel from "./components/carrousel/Carrousel";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default class App extends Component {
  render() {
    return (
      <main className="container-fluid">
        <Header />
        <Carrousel />
        <CardContainer />
        <Footer />
      </main>
    );
  }
}
