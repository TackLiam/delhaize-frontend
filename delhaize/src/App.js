import "./App.css";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import ProductContainer from "./Components/ProductContainer";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="header">
        <Header />
        <Nav />
      </div>
      <ProductContainer />
      <Footer />
    </>
  );
}

export default App;
