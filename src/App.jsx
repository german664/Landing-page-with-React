import React from "react";
import "./App.css";
import Navbar from "./componentes/navbar";
import Jumbotron from "./componentes/jumbotron";
import MainCard from "./componentes/mainCard";
import Footer from "./componentes/footer";

let lorem =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis exercitationem consectetur harum, recusandae qui et nemo eveniet. Officia ipsa ipsum minus sequi quia, quos itaque ullam praesentium ad corporis excepturi!";

function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid px-5 d-block mt-5 pt-5">
        <Jumbotron
          title="A warm welcome"
          description={lorem}
          buttonLabel="Call to Action"
        />
        <div className="card-deck mb-3">
          <MainCard />
        </div>
      </div>
      <Footer website="www.dogs.com" />
    </>
  );
}

export default App;
