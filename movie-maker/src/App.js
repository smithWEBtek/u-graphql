import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Movies from "./containers/Movies"

const App = (props) => {
  return (
    <div>
      <Header />
      <Movies />
      <Footer />
    </div>
  );
};

export default App;
