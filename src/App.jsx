import { useEffect, useState } from "react";
import Models from "./component/Models";
import Cart from "./component/Cart";
import NavBar from "./component/NavBar";
import { ToastContainer } from "react-toastify";
import Banner from "./component/Banner";
import StepsSection from "./component/StepsSection";
import PricingSection from "./component/PricingSection";
import CTASection from "./component/CTASection";
import Footer from "./component/Footer";
import StatsSection from "./component/StatsSection ";

function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
  const [models, setModels] = useState([]);

  useEffect(() => {
    const loadModels = async () => {
      try {
        const res = await fetch("/data.json");
        const data = await res.json();
        setModels(data);
      } catch (err) {
        console.error(err);
      }
    };

    loadModels();
  }, []);

  return (
    <>
      {/* Navbar */}
      <NavBar carts={carts} setActiveTab={setActiveTab} />

      <Banner />
      <StatsSection />

      {/*  Products Section */}
      <Models
        models={models}
        carts={carts}
        setCarts={setCarts}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Cart Section */}
      {activeTab === "cart" && (
        <Cart carts={carts} setCarts={setCarts} setActiveTab={setActiveTab} />
      )}

      <StepsSection />
      <PricingSection />
      <CTASection />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
