import "./App.scss";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Main } from "./components/Main/Main";
import { LocationWrapper } from "./components/Location/LocationWrapper";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <LocationWrapper />
      <Footer
        imageOne={"./src/assets/images/Vector-1.svg"}
        imageTwo={"./src/assets/images/Vector.svg"}
      />
    </>
  );
}

export default App;
